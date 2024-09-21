// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

interface ISnaptureNFT {
    function mint(address to, uint projectId, uint jobId, string memory tokenUri) external;
}
