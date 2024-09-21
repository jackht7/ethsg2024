'use client';

import { FormEvent, useEffect, useState } from 'react';

import { Button, Container, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const StyledTextField = styled(TextField)({
  input: { color: 'white' },
});

interface Job {
  name: string;
  amount: number;
  image_hash: string;
}

const JobForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [image, setImage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, amount);
    // call pinata api 

    // call smart contract api 

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
        sx={{ mb: 2, 
          input: { color: 'white' },
          color: 'white', 
          width: '100%'
        }}
        placeholder='Upload file'
        fullWidth
        />

        <Button variant="contained" type="submit">
          Create
        </Button>
      </Container>
    </form>
  );
};

export default JobForm;
