'use client';

import { useState } from 'react';
import { Box, Button, Container, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';

import JobForm from './components/JobForm';
import JobsTable from './components/JobsTable';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

const Jobs = () => {
  const [modal, setModal] = useState(false);
  const [depositAmount, setDepositAmount] = useState('');

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  return (
    <>
      <Box>
        <Container style={{
          margin: '25px auto',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Button variant="contained" onClick={handleModalOpen}>
            Create job
          </Button>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              type="number"
              placeholder="Total Balance"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              style={{ marginRight: '20px' }}
              sx={{
                "& fieldset": { border: 'none' },
                '& .MuiInputBase-input': {
                  color: 'white',
                  borderBottom: '1px solid white',
                  borderRadius: 0,
                },
              }}
              variant='standard'
            />
            <Button variant="contained" startIcon={<LocalAtmIcon />}>
              Deposit
            </Button>
          </div>
        </Container>
        <Container>
          <JobsTable />
        </Container>
      </Box>
      <Dialog
        open={modal}
        onClose={handleModalClose}
        PaperProps={{
          style: {
            backgroundColor: 'black',
            color: 'white',
            minWidth: '1000px',
          },
        }}
      >
        <DialogTitle>New Job</DialogTitle>
        <DialogContent>
          <JobForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Jobs;
