const hookContractAddress = process.env.PUBLIC_HOOK_CONTRACT_ADDRESS;
const usdcContractAddress = process.env.PUBLIC_USDC_CONTRACT_ADDRESS;

export const config = {
  '10200': {
    name: 'Gnosis Chaido',
    hookContractAddress: hookContractAddress || '0x47AaDbc03AEa6EDC9D1EF5D8eBa597321743B3B8',
    usdcContractAddress: usdcContractAddress || '0xdD9868aab91caFe3282cFCC67Cb1DAc965edB1f1',
  },
};
