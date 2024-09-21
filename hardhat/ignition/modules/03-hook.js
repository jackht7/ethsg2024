// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('Hook', (m) => {
  const usdc = '0xdD9868aab91caFe3282cFCC67Cb1DAc965edB1f1';
  const nft = '0xb4AF70855F924D729C89211854d1A8bB79FD6D87';
  const args = [usdc, nft];
  const Hook = m.contract('Hook', args, {});

  return { Hook };
});
