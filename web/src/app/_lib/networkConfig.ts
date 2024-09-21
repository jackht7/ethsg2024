const hookContractAddress = process.env.PUBLIC_HOOK_CONTRACT_ADDRESS;
const usdcContractAddress = process.env.PUBLIC_USDC_CONTRACT_ADDRESS;
const nftContractAddress = process.env.PUBLIC_NFT_CONTRACT_ADDRESS;

export const config = {
  '10200': {
    name: 'Gnosis Chaido',
    hookContractAddress: hookContractAddress || '0x3E57Fb5f9A21E518b667a55235da34B723DD83d9',
    usdcContractAddress: usdcContractAddress || '0xdD9868aab91caFe3282cFCC67Cb1DAc965edB1f1',
    nftContractAddress: nftContractAddress || '0xa7175491676fa1c205fbc2215e4eeabee2927f2b',
  },
};
