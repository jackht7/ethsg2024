require('@nomicfoundation/hardhat-toolbox');
require('@nomicfoundation/hardhat-verify');
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
      url: 'https://rpc.chiado.gnosis.gateway.fm',
      chainId: 10200,
      accounts: [process.env.DEPLOYER_PK],
    },
  },
  etherscan: {
    apiKey: 'abc',
    customChains: [
      {
        network: 'gnosisChiado',
        urls: {
          apiURL: 'https://gnosis-chiado.blockscout.com/api/',
          browserURL: 'https://gnosis-chiado.blockscout.com/',
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
};
