'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

import { NFT__factory } from '@/../typechain';
import { config } from '@/app/_lib/networkConfig';
import { formatAddress, formatCurrency } from '@/app/_lib/utils';
import { useEthersSigner } from '@/app/_lib/wagmi-signer';

const Nft = ({ jobId }: { jobId: string }) => {
  const [token, setToken] = useState('');
  const { project: projectId, job: jobName } = useParams();
  const { address, chainId } = useAccount();
  const signer = useEthersSigner();
  useEffect(() => {
    const fetchNfts = async () => {
      if (!chainId) return;
      const nftContractFactory = new NFT__factory(signer);
      const nftContract = nftContractFactory.attach(
        config[chainId?.toString() as keyof typeof config].nftContractAddress
      );

      const tokenUriFunc = nftContract.getFunction('tokenURI');
      const tokenResponse = await tokenUriFunc(projectId + jobId);

      return tokenResponse;
    };

    const interval = setInterval(() => {
      fetchNfts().then((res) => setToken(res));
    }, 3000);

    return () => clearInterval(interval);
  }, [address, chainId, signer]);
  console.log('token', token);
  if (token)
    return (
      <Link target="_blank" href={token}>
        {formatAddress(token.replace('https://gateway.pinata.cloud/ipfs/', '').toString())}
      </Link>
    );

  return <></>;
};

export default Nft;
