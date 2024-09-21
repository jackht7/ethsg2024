'use client';

import { useState } from 'react';

import { Box, Button, Container, Dialog, DialogContent, DialogTitle } from '@mui/material';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import JobForm from './components/JobForm';
import JobsTable from './components/JobsTable';

interface Job {
  name: string;
  amount: number;
  image_hash: string;
}

const Jobs = () => {
  const [modal, setModal] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  const addJob = (newJob: Job) => {
    setJobs((prevJobs) => [...prevJobs, newJob]);
  }

  return (
    <>
      <Box>
        <Container style={{ margin: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" onClick={handleModalOpen}>
            Create job
          </Button>
          <Button variant="contained" startIcon={<LocalAtmIcon />}>
            Deposit
          </Button>
        </Container>
        <Container style={{ margin: '20px' }}>
          <JobsTable jobs={jobs} />
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
        <DialogTitle>Create New Job</DialogTitle>
        <DialogContent>
          <JobForm addJob={addJob} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Jobs;
