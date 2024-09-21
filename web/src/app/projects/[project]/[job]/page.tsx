'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { Box, Button, Container, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';

import { Hook__factory, NFT__factory } from '@/../typechain';
import { config } from '@/app/_lib/networkConfig';
import { useEthersSigner } from '@/app/_lib/wagmi-signer';

import JobForm from './components/JobForm';
import JobsTable from './components/JobsTable';

const Jobs = () => {
  const [modal, setModal] = useState(false);
  const [projectAmount, setProjectAmount] = useState();
  const { address, chainId } = useAccount();
  const { project: projectIdd } = useParams();

  const signer = useEthersSigner();

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     console.log('fetchProjects');
  //     if (!chainId) return;
  //     const hookContractFactory = new Hook__factory(signer);
  //     const hookContract = hookContractFactory.attach(
  //       config[chainId?.toString() as keyof typeof config].hookContractAddress
  //     );

  //     // const nextProjectIdFunc = hookContract.getFunction('nextProjectId');
  //     const getProjectFunc = hookContract.getFunction('getProject');
  //     // const attestationCountFunc = hookContract.getFunction('attestationCount');
  //     // const nextProjectId = Number(await nextProjectIdFunc.call(signer));
  //     // const projects = [];
  //     console.log(projectIdd);
  //     const [projectId, name, description, amount, jobs] = await getProjectFunc(BigInt(projectIdd as string));
  //     console.log(amount);
  //     return amount;
  //   }

  //   const interval = setInterval(() => {
  //     fetchProjects().then((res) => {
  //       if (res) setProjectAmount(res);
  //     });
  //   }, 5000);

  //   console.log(projectAmount);
  //   return () => clearInterval(interval);
  // }, [address, chainId, projectIdd]);

  return (
    <>
      <Box>
        <Container
          style={{
            margin: '25px auto',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button variant="contained" onClick={handleModalOpen}>
            Create job
          </Button>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* <TextField
              type="number"
              placeholder="Total Balance"
              value={projectAmount}
              // onChange={(e) => setDepositAmount(e.target.value)}
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
              readOnly={true}
            />  */}
            {/* <p>{projectAmount}</p> */}
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
            minWidth: '800px',
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
