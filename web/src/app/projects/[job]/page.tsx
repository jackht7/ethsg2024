'use client';

import { useState } from 'react';

import { Box, Button, Container, Dialog, DialogContent, DialogTitle } from '@mui/material';

import JobForm from './components/JobForm';
import JobsTable from './components/JobsTable';

const Jobs = () => {
  const [modal, setModal] = useState(false);

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };
  return (
    <>
      <Box>
        <Container style={{ margin: '20px' }}>
          <Button variant="contained" onClick={handleModalOpen}>
            Create job
          </Button>
        </Container>
        <Container style={{ margin: '20px' }}>
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
        <DialogTitle>New Transaction</DialogTitle>
        <DialogContent>
          <JobForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Jobs;
