'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

import { Hook__factory } from '@/../typechain';
import { config } from '@/app/_lib/networkConfig';
import { formatCurrency } from '@/app/_lib/utils';
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

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="contracts table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Job</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Image Hash</StyledTableCell>
            <StyledTableCell align="right">Total Amount (SGD)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ background: 'white' }}>
          {jobs?.map((job) => (
            <TableRow key={job.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {job.name}
              </TableCell>
              <TableCell align="center" sx={{ display: 'flex', gap: 2 }}>
                <Button size="small" variant="outlined" color="default">
                  Approve
                </Button>
                <Button size="small" variant="outlined" color="default">
                  Reject
                </Button>
              </TableCell>
              <TableCell align="right">{job.metadata}</TableCell>
              <TableCell align="right">{formatCurrency(job.amount)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JobsTable;
