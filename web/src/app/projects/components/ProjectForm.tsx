'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { Button, Container, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Hook__factory } from '@/../typechain';
import { config } from '@/app/_lib/networkConfig';
import { useEthersSigner } from '@/app/_lib/wagmi-signer';

const StyledTextField = styled(TextField)({
  input: { color: 'white' },
});

interface ProjectFormProps {
  onAddProject: (name: string, amount: number, reviewers: string[]) => void;
}

const ProjectForm = ({ onAddProject }: ProjectFormProps) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [threshold, setThreshold] = useState(1);
  const [reviewers, setReviewers] = useState(['']);

  const signer = useEthersSigner();
  const { address, chainId } = useAccount();
  const hookContractFactory = new Hook__factory(signer);
  const hookContract = hookContractFactory.attach(config[chainId?.toString() as keyof typeof config].contractAddress);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name && reviewers.length > 0) {
      onAddProject(name, amount, reviewers);
      // call smart contract api
      
      setName('');
      setAmount(0);
      setReviewers(['']);
    }
  };

  useEffect(() => {
    const newReviewers = Array.from({ length: threshold }, (_, i) => reviewers[i] || '');
    setReviewers(newReviewers);
  }, [threshold]);

  const handleReviewerChange = (index: number, value: string) => {
    const newReviewers = [...reviewers];
    newReviewers[index] = value;
    setReviewers(newReviewers);
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
        <StyledTextField
          label="Threshold"
          onChange={(e) => setThreshold(Number(e.target.value))}
          required
          variant="outlined"
          value={threshold}
          fullWidth
          sx={{ mb: 2 }}
        />

        {reviewers.map((reviewer, index) => (
          <StyledTextField
            key={index}
            label={`Reviewer ${index + 1}`}
            onChange={(e) => handleReviewerChange(index, e.target.value)}
            required
            variant="outlined"
            value={reviewer}
            fullWidth
            sx={{ mb: 2 }}
          />
        ))}
        <Button variant="contained" type="submit">
          Create
        </Button>
      </Container>
    </form>
  );
};

export default ProjectForm;
