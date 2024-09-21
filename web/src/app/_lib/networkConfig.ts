const contractAddress = process.env.PUBLIC_SMART_CONTRACT_ADDRESS;

export const config = {
  '10200': {
    name: 'Gnosis Chaido',
    contractAddress: contractAddress || '0x152FfbB7510eaa234013b8b3907BFB04DAEf35f6',
  },
};
