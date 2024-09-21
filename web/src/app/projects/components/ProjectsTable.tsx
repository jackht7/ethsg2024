'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

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

interface Project {
  name: string;
  amount: number;
  proposals: number;
  approved: number;
}

function createData(name: string, proposals: number, approved: number, amount: number) {
  return { name, proposals, approved, amount };
}

const rows = [createData('Improvement to Building A', 20, 6, 24000)];

const StyledTableCell = styled(TableCell)({
  color: 'white',
});

const ProjectsTable = () => {
  const pathname = usePathname();
  const [projects, setProjects] = useState<Project[]>([]);

  const { address, chainId } = useAccount();
  const signer = useEthersSigner();

  useEffect(() => {
    const fetchProjects = async () => {
      if (!chainId) return;
      const hookContractFactory = new Hook__factory(signer);
      const hookContract = hookContractFactory.attach(
        config[chainId?.toString() as keyof typeof config].hookContractAddress
      );

      const nextProjectIdFunc = hookContract.getFunction('nextProjectId');
      const getProjectFunc = hookContract.getFunction('getProject');
      const nextId = Number(await nextProjectIdFunc.call(signer));
      const projects = [];

      for (let i = 0; i < nextId; i++) {
        const [projectId, name, description, amount, jobs] = await getProjectFunc(i);
        projects.push({
          name: description,
          amount: amount,
        } as Project);
      }

      return projects;
    };

    const interval = setInterval(() => {
      fetchProjects().then((res) => {
        if (res) setProjects(res);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [address, chainId, signer]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="contracts table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Contract</StyledTableCell>
            <StyledTableCell align="right">Proposals</StyledTableCell>
            <StyledTableCell align="right">Approved</StyledTableCell>
            <StyledTableCell align="right">Total Amount (SGD)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ background: 'white' }}>
          {projects &&
            projects.length > 0 &&
            projects.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <Link href={`${pathname}/${encodeURIComponent(row.name)}`}>{row.name}</Link>
                </TableCell>
                <TableCell align="right">{row.proposals}</TableCell>
                <TableCell align="right">{row.approved}</TableCell>
                <TableCell align="right">{formatCurrency(row.amount)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectsTable;
