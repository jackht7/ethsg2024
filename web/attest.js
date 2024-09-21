const { SignProtocolClient, SpMode, EvmChains } = require('@ethsign/sp-sdk');
const { privateKeyToAccount } = require('viem/accounts');

// Initialize Ethereum provider and wallet
const privateKey = '0xa87a2e9936b1f4d5e69391fcbd5bb1f732148c0f981d977d95ded1477241690b'; // Replace with your actual private key

const client = new SignProtocolClient(SpMode.OnChain, {
  chain: EvmChains.gnosisChiado,
  rpcUrl: 'https://rpc.chiado.gnosis.gateway.fm',
  account: privateKeyToAccount(privateKey), // Optional for Node.js environment
});
const schemaId = '0x6c';

// Define attestation data based on your schema
const attestationData = {
  project_id: 1, // Replace with actual project_id
  job_id: 0, // Replace with actual job_id
  timestamp: Math.floor(Date.now() / 1000), // Current timestamp in seconds
  amount: 1e17, // Replace with actual amount
  action: true, // Replace with actual action
  ipfs_hash: 'QmTzQ1YbZJrMXrJ8Cuy59A1dTmTp7wCahmvHY4vU5EWWfZ', // Replace with actual IPFS hash
};

// Call the create attestation method
async function createAttestation() {
  try {
    const attestation = await client.createAttestation({
      schemaId: schemaId,
      data: attestationData,
    });

    console.log('Attestation created:', attestation);
  } catch (error) {
    console.error('Error creating attestation:', error);
  }
}

// Execute the function
createAttestation();
