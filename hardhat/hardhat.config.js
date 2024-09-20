require('@nomicfoundation/hardhat-toolbox');

// read private key from .env file
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.27',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    gnosisChiado: {
      url: 'https://1rpc.io/gnosis',
      accounts: [process.env.DEPLOYER_PK],
    },
  },
};
