// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('Hook', (m) => {
  const usdc = '0xeb0ed822cc14E3c993c9065a9C3Bcd74a22B4814';
  const nft = '0xb4AF70855F924D729C89211854d1A8bB79FD6D87';
  const args = [nft, usdc];
  const Hook = m.contract('Hook', args, {});

  return { Hook };
});
