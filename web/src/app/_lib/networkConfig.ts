const hookContractAddress = process.env.PUBLIC_HOOK_CONTRACT_ADDRESS;
const usdcContractAddress = process.env.PUBLIC_USDC_CONTRACT_ADDRESS;

export const config = {
  '10200': {
    name: 'Gnosis Chaido',
    hookContractAddress: hookContractAddress || '0xa09Bcf45012532d33708886B5486C5776f90B7c2',
    usdcContractAddress: usdcContractAddress || '0xdD9868aab91caFe3282cFCC67Cb1DAc965edB1f1',
  },
};
