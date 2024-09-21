const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("All Contracts", function () {
    let Hook, MockUSDC, NFT;
    let hook, mockUSDC, nft;

    let tokenUri = 'https://gateway.pinata.cloud/ipfs/QmXNJzDJYKG8tjBDvQrStqcM9dbuQBjv2tvpvvUeDoS2SV';

    beforeEach(async function () {
        // Deploy MockUSDC
        MockUSDC = await ethers.getContractFactory("MockUSDC");
        mockUSDC = await MockUSDC.deploy();
        await mockUSDC.waitForDeployment();

        // Deploy NFT
        NFT = await ethers.getContractFactory("NFT");
        nft = await NFT.deploy();
        await nft.waitForDeployment();

        // Now deploy Hook with the addresses of MockUSDC and NFT
        Hook = await ethers.getContractFactory("Hook");
        hook = await Hook.deploy(await nft.getAddress(), await mockUSDC.getAddress());
        await hook.waitForDeployment();

        // // Transfer ownership of NFT to Hook
        // await nft.transferContractOwnership(await hook.getAddress());
    });

    describe("MockUSDC", function () {
        it("should deploy successfully", async function () {
            expect(await mockUSDC.getAddress()).to.be.properAddress;
        });
    });

    describe("NFT", function () {
        let owner, user1, user2;

        beforeEach(async function () {
            [owner, user1, user2] = await ethers.getSigners();
        });

        it("should deploy successfully", async function () {
            expect(await nft.getAddress()).to.be.properAddress;
        });

        it("should only allow owner or hook contract to mint", async function () {
            const projectId = 1;
            const jobId = 1;
            await expect(nft.connect(user1).mint(user1.address, projectId, jobId, tokenUri))
                .to.be.revertedWith('Only the hook contract or owner can call this function');
        });
        
        it("should have correct owner", async function () {
            const contractOwner = await nft.owner();
            expect(contractOwner).to.equal(owner.address);
        });

        it("should allow owner to mint NFT successfully", async function () {
            const recipient = user1.address;
            const projectId = 2;
            const jobId = 1;

            let tokenId = projectId.toString() + jobId.toString();
            tokenId = ethers.toBigInt(tokenId);

            // Mint the NFT
            const tx = await nft.connect(owner).mint(recipient, projectId, jobId, tokenUri);
            await tx.wait();

            expect(await nft.ownerOf(tokenId)).to.equal(recipient);
            expect(await nft.tokenURI(tokenId)).to.equal(tokenUri);
        });
    });

    describe("Hook", function () {
        let owner, user1, user2;

        beforeEach(async function () {
            [owner, user1, user2] = await ethers.getSigners();

            // Mint some USDC to users for testing
            const tx1 = await mockUSDC.mint(user1.address, ethers.parseUnits("1000", 6));
            await tx1.wait();
            const tx2 = await mockUSDC.mint(user2.address, ethers.parseUnits("1000", 6));
            await tx2.wait();
        });

        it("should deploy successfully", async function () {
            expect(await hook.getAddress()).to.be.properAddress;
        });

        it("should create two projects", async function () {
            const defaultAction = 1;

            // Create the first project
            const projectDescription1 = "Test Project";
            const projectAmount1 = ethers.parseUnits("100", 6); // 100 USDC
            await mockUSDC.connect(user1).approve(await hook.getAddress(), projectAmount1);
            const projectId1 = await createProject(user1, projectDescription1, projectAmount1);

            // Create a second project with different parameters
            const projectDescription2 = "Another Test Project";
            const projectAmount2 = ethers.parseUnits("200", 6); // 200 USDC
            await mockUSDC.connect(user2).approve(await hook.getAddress(), projectAmount2);
            const projectId2 = await createProject(user2, projectDescription2, projectAmount2);

            // Verify both projects
            const project1 = await hook.projects(projectId1);
            expect(project1.description).to.equal(projectDescription1);
            expect(project1.amount).to.equal(projectAmount1);
            expect(project1.action).to.equal(defaultAction);

            const project2 = await hook.projects(projectId2);
            expect(project2.description).to.equal(projectDescription2);
            expect(project2.amount).to.equal(projectAmount2);
            expect(project2.action).to.equal(defaultAction);
        });

        it("should create a project with a job and mint an NFT", async function () {
            // Create a project
            const projectDescription = "Test Project";
            const projectAmount = ethers.parseUnits("100", 6); // 100 USDC
            await mockUSDC.connect(user1).approve(await hook.getAddress(), projectAmount);
            const projectId = await createProject(user1, projectDescription, projectAmount);

            // Create a job for the project
            const jobName = "Test Job";
            const jobDescription = "Test Job Description";
            const jobAmount = ethers.parseUnits("10", 6); // 10 USDC
            const jobMetadata = tokenUri;

            await hook.connect(user1).createJob(projectId, jobName, jobDescription, jobAmount, jobMetadata);

            const jobId = 0;
            const job = await hook.getJob(projectId, jobId);
            expect(job[0]).to.equal(jobId);
            expect(job[1]).to.equal(jobName);
            expect(job[2]).to.equal(jobDescription);
            expect(job[3]).to.equal(jobAmount);
            expect(job[4]).to.equal(jobMetadata);

            //set hook contract
            await nft.setHookAddress(await hook.getAddress());

            // Finalize the job
            await hook.connect(owner)._finalizeJob(projectId, jobId);

            const recipient = user1.address;
            let tokenId = projectId.toString() + jobId.toString();
            tokenId = ethers.toBigInt(tokenId);

            // retrieve the NFT by tokenId
            const ownerOfNFT = await nft.ownerOf(tokenId);
            expect(ownerOfNFT).to.equal(recipient);
            expect(await nft.tokenURI(tokenId)).to.equal(tokenUri);
        });

        // //create a project and terminate it
        // it("should create a project and terminate it", async function () {
        //     const projectDescription = "Test Project";
        //     const projectAmount = ethers.parseUnits("100", 6); // 100 USDC
        //     await mockUSDC.connect(user1).approve(await hook.getAddress(), projectAmount);
        //     const projectId = await createProject(user1, projectDescription, projectAmount);
        //     await hook.connect(user1).terminateProject(projectId);
        //     const project = await hook.projects(projectId);
        //     expect(project.action).to.equal(0);
        // });

        // Helper function to create a project
        async function createProject(user, description, amount) {
            await mockUSDC.connect(user).approve(await hook.getAddress(), amount);
            await hook.connect(user).createProject(description, amount);
            let projectId = await hook.nextProjectId() - 1n;
            return projectId;
        }
    });
});