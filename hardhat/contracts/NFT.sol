// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract NFT is ERC721URIStorage, Ownable {
    address public hookAddress;

    constructor() ERC721("Snapture", "SNAP") Ownable(msg.sender) {
        // _mint(msg.sender, 1);
    }

    modifier allowOwnerOrHook() {
        require(msg.sender == hookAddress || msg.sender == owner(), "Only the hook contract or owner can call this function");
        _;
    }

    function mint(address to, uint256 projectId, uint256 jobId, string memory tokenUri) public allowOwnerOrHook {  
        string memory combinedId = string(abi.encodePacked(Strings.toString(projectId), Strings.toString(jobId)));
        uint256 tokenId = stringToUint(combinedId);

        //request address of this tokenId is not exist
        require(_ownerOf(tokenId) == address(0), "tokenId already exists");

        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenUri);
    }

    // Add this function to allow the owner to set hook contract
    function setHookAddress(address _hookAddress) public onlyOwner {
        hookAddress = _hookAddress;
    }

    function stringToUint(string memory s) internal pure returns (uint result) {
        bytes memory b = bytes(s);
        uint i;
        result = 0;
        for (i = 0; i < b.length; i++) {
            uint c = uint256(uint8(b[i]));
            if (c >= 48 && c <= 57) {
                result = result * 10 + (c - 48);
            }
        }
    }
}