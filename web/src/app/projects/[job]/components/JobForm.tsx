'use client';

import { FormEvent, useEffect, useState } from 'react';

import { Button, Container, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { PinataSDK } from "pinata-web3";
import { v4 as uuidv4 } from 'uuid';

const StyledTextField = styled(TextField)({
  input: { color: 'white' },
});


const JobForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [file, uploadFile] = useState<File | null>(null);


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {


    event.preventDefault();

    console.log(name, amount, file);
    // call pinata api 
    const pinata = new PinataSDK({
      pinataJwt: process.env.NEXT_PUBLIC_PINATA_JWT,
      pinataGateway: "crimson-added-hedgehog-755.mypinata.cloud"
    });
    const upload = await pinata.upload.file(file!);
    const jobId = uuidv4();

    const resJson = {
      "name": name,
      "description": description,
      "image": upload.IpfsHash,
      "jobId": jobId,
    }
    console.log(resJson);
  };


  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Container style={{ marginTop: '10px' }}>
        <StyledTextField
          label="Name"
          onChange={(e) => setName(e.target.value)}
          required
          variant="outlined"
          sx={{ mb: 2 }}
          fullWidth
          value={name}
        />
        <StyledTextField
          label="Description"
          onChange={(e) => setDescription(e.target.value)}
          required
          variant="outlined"
          sx={{ mb: 2 }}
          fullWidth
          value={description}
        />
        <StyledTextField
          label="Amount"
          onChange={(e) => setAmount(Number(e.target.value))}
          required
          variant="outlined"
          sx={{ mb: 2 }}
          fullWidth
          value={amount}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Completion Date"
            sx={{
              input: { color: 'white' },
              color: 'white',
              mb: 2,
              width: '100%'
            }}
            value={null}
          />
        </LocalizationProvider>

        <TextField type='file'
          id="outlined-basic"
          sx={{
            mb: 2,
            input: { color: 'white' },
            color: 'white',
            width: '100%'
          }}
          placeholder='Upload file'
          name='file'
          fullWidth
          onChange={(e: any) =>
            uploadFile(e.target.files[0])
          }
        />

        <Button variant="contained" type="submit">
          Create
        </Button>
      </Container>
    </form>
  );
};

export default JobForm;
