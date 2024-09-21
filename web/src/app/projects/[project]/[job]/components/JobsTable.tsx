'use client';

import ethers from 'ethers';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Address } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { useAccount } from 'wagmi';

import { EvmChains, OnChainClientOptions, SignProtocolClient, SpMode } from '@ethsign/sp-sdk';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

import { Hook__factory, NFT__factory } from '@/../typechain';
import { config } from '@/app/_lib/networkConfig';
import { formatAddress, formatCurrency } from '@/app/_lib/utils';
import { useEthersSigner } from '@/app/_lib/wagmi-signer';

const StyledTableCell = styled(TableCell)({
  color: 'white',
});

interface Job {
  jobId: number;
  name: string;
  description: number;
  amount: number;
  metadata: number;
}

const JobsTable = () => {
  const { project: projectId, job: jobName } = useParams();
  const [jobs, setJobs] = useState<Job[]>([]);
  const { address, chainId } = useAccount();
  const signer = useEthersSigner();
  const [signClient, setSignClient] = useState<SignProtocolClient>();

  useEffect(() => {
    const privateKey = (process.env.NEXT_PUBLIC_PRIVATE_KEY || address) as Address;
    const newClient = new SignProtocolClient(SpMode.OnChain, {
      chain: EvmChains.gnosisChiado,
      account: address,
      rpcUrl: 'https://rpc.chiado.gnosis.gateway.fm',
    } as OnChainClientOptions);

    setSignClient(newClient);
  }, [address, chainId]);

  useEffect(() => {
    const fetchJobs = async () => {
      if (!chainId) return;
      const hookContractFactory = new Hook__factory(signer);
      const hookContract = hookContractFactory.attach(
        config[chainId?.toString() as keyof typeof config].hookContractAddress
      );

      const nextJobIdFunc = hookContract.getFunction('nextJobId');
      const getJobFunc = hookContract.getFunction('getJob');
      const nextId = Number(await nextJobIdFunc.call(signer));
      const jobs = [];

      for (let i = 0; i < nextId; i++) {
        const [jobId, name, description, amount, metadata] = await getJobFunc(BigInt(projectId as string), BigInt(i));
        jobs.push({
          jobId,
          name,
          amount,
          metadata,
        } as Job);
      }

      return jobs;
    };

    const interval = setInterval(() => {
      fetchJobs().then((res) => {
        if (res) setJobs(res);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [address, chainId, signer]);

  useEffect(() => {
    const fetchNfts = async () => {
      if (!chainId) return;
      const nftContractFactory = new NFT__factory(signer);
      const nftContract = nftContractFactory.attach(
        config[chainId?.toString() as keyof typeof config].nftContractAddress
      );

      const nextJobIdFunc = nftContract.getFunction('tokenURI');
      return [];
    };

    const interval = setInterval(() => {
      fetchNfts().then((res) => {
        if (res) setJobs(res);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [address, chainId, signer]);

  const handleApprove = async (job: Job) => {
    if (!signClient) return;

    const attestationData = {
      project_id: BigInt(projectId as string),
      job_id: BigInt(1),
      timestamp: BigInt(Math.floor(Date.now() / 1000)),
      amount: BigInt(job.amount),
      action: true,
      ipfs_hash: job.metadata.toString(),
    };

    try {
      const schemaId = process.env.NEXT_PUBLIC_SIGN_PROTOCOL_SCHEMA_ID;
      const attestation = await signClient.createAttestation({
        schemaId: schemaId!,
        data: attestationData,
        indexingValue: signer!.address,
      });

      console.log('Attestation created:', attestation);
    } catch (error) {
      console.error('Error creating attestation:', error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="contracts table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Job</StyledTableCell>

            <StyledTableCell align="right">Image Hash</StyledTableCell>
            <StyledTableCell align="right">Total Amount (SGD)</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ background: 'white' }}>
          {jobs?.map((job) => (
            <TableRow key={job.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {job.name}
              </TableCell>

              <TableCell align="right">
                <Link target="_blank" href={`https://gateway.pinata.cloud/ipfs/${job.metadata}`}>
                  {formatAddress(job.metadata.toString())}
                </Link>
              </TableCell>
              <TableCell align="right">{formatCurrency(job.amount)}</TableCell>
              <TableCell align="right" sx={{ display: 'flex', gap: 2 }}>
                <Button size="small" variant="outlined" color="default" onClick={async () => await handleApprove(job)}>
                  Approve
                </Button>
                <Button size="small" variant="outlined" color="default">
                  Reject
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JobsTable;
