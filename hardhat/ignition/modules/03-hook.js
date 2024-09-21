// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('Hook', (m) => {
  const usdc = '0xdD9868aab91caFe3282cFCC67Cb1DAc965edB1f1';
  const nft = '0xA7175491676FA1c205fbc2215E4eEABeE2927f2b';
  const args = [nft, usdc];
  const Hook = m.contract('Hook', args, {});

  return { Hook };
});
