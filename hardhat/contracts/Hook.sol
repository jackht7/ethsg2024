// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Hook is Ownable, ReentrancyGuard {
    // USDC address
    address public usdc;

    struct Project {
        uint projectId;
        string description;
        uint amount;
    }

    // array of projects
    Project[] public projects;
    uint public projectCount;

    event Deposit(address indexed user, uint projectId, uint256 amount);
    event Withdrawn(
        address indexed user,
        uint projectId,
        uint256 amount,
        string reason
    );
    event ProjectCreated(uint indexed projectId, uint amount);
    event JobCreated(
        uint indexed projectId,
        uint indexed jobId,
        string description,
        string metadata
    );
    event ProjectTerminated(uint indexed projectId);

    constructor(address _usdc) Ownable(msg.sender) {
        // set USDC address
        usdc = _usdc;
    }

    function createProject(
        uint projectId,
        string calldata description,
        uint amount
    ) external {
        // create project
        projects.push(Project(projectId, description, amount));
        projectCount++;

        emit ProjectCreated(projectId, amount);
    }

    function createJob(
        uint projectId,
        uint jobId,
        string calldata description,
        string calldata metadata
    ) external {
        // create job

        emit JobCreated(projectId, jobId, description, metadata);
    }

    // deposit USDC
    function deposit(uint projectId, uint amount) external payable {
        // deposit USDC
        IERC20(usdc).transferFrom(msg.sender, address(this), amount);

        emit Deposit(msg.sender, projectId, amount);
    }

    function emergencyWithdraw(
        uint projectId,
        uint amount,
        string calldata reason
    ) external onlyOwner {
        IERC20(usdc).transfer(msg.sender, amount);

        emit Withdrawn(msg.sender, projectId, amount, reason);
    }
}
