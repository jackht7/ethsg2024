const { SignProtocolClient, SpMode, EvmChains } = require('@ethsign/sp-sdk');
const { privateKeyToAccount } = require('viem/accounts');
const ethers = require('ethers');

// Initialize Ethereum provider and wallet
const rpcUrl = 'https://rpc.chiadochain.net'; // Replace with your actual RPC URL
const privateKey = ''; // Replace with your actual private key
const provider = new ethers.JsonRpcProvider(rpcUrl);
const wallet = new ethers.Wallet(privateKey, provider);

const client = new SignProtocolClient(SpMode.OnChain, {
  chain: EvmChains.gnosisChiado,
  account: privateKeyToAccount(privateKey), // Optional for Node.js environment
});
const schemaId = '0x50';

// Define attestation data based on your schema
const attestationData = {
  project_id: 123456, // Replace with actual project_id
  job_id: 654321, // Replace with actual job_id
  timestamp: Math.floor(Date.now() / 1000), // Current timestamp in seconds
  amount: 1000, // Replace with actual amount
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
