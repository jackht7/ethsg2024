const hookContractAddress = process.env.PUBLIC_HOOK_CONTRACT_ADDRESS;
const usdcContractAddress = process.env.PUBLIC_USDC_CONTRACT_ADDRESS;
const nftContractAddress = process.env.PUBLIC_NFT_CONTRACT_ADDRESS;

export const config = {
  '10200': {
    name: 'Gnosis Chaido',
    hookContractAddress: hookContractAddress || '0xEDb69778a35d10B0fC72ae5Cb9dF48616445a529',
    usdcContractAddress: usdcContractAddress || '0xdD9868aab91caFe3282cFCC67Cb1DAc965edB1f1',
    nftContractAddress: nftContractAddress || '0xa7175491676fa1c205fbc2215e4eeabee2927f2b',
  },
};
