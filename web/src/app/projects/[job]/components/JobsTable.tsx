'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';


import { formatCurrency } from '@/app/_lib/utils';
import { FormControlLabel } from '@mui/material';

function createData(name: string, proposals: number, approved: number, amount: number) {
  return { name, proposals, approved, amount };
}

const StyledTableCell = styled(TableCell)({
  color: 'white',
});

interface JobsTableProps {
  jobs: any[]
}

const JobsTable = ({ jobs }: JobsTableProps) => {
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
              <TableCell align="right">
                <FormControlLabel
                  control={
                    <Checkbox size="small"
                      sx={{
                        '&.Mui-checked': {
                          color: "#181C14",
                        },
                      }}
                    />
                  }
                  label="Approve" />
              </TableCell>
              <TableCell align="right">{job.image_hash}</TableCell>
              <TableCell align="right">{formatCurrency(job.amount)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JobsTable;
