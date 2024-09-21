// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721, Ownable {
    constructor() ERC721("Snapture", "SNAP") Ownable(msg.sender) {
        _mint(msg.sender, 1);
    }

    function mint(address to, uint256 tokenId) external onlyOwner {
        _mint(to, tokenId);
    }
}
