import React from 'react';
import { Box, Typography, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { PublicKey } from '@solana/web3.js';

const BalanceContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

const TokenInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

interface TokenBalanceProps {
  mint: string;
  decimals?: number;
  symbol?: string;
  logo?: string;
}

export const TokenBalance: React.FC<TokenBalanceProps> = ({
  mint,
  decimals = 9,
  symbol,
  logo,
}) => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = React.useState<number | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchBalance = async () => {
      if (!publicKey) {
        setBalance(null);
        setLoading(false);
        return;
      }

      try {
        const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
          publicKey,
          { mint: new PublicKey(mint) }
        );

        const totalBalance = tokenAccounts.value.reduce(
          (acc, { account }) => acc + Number(account.data.parsed.info.tokenAmount.amount),
          0
        );

        setBalance(totalBalance / Math.pow(10, decimals));
      } catch (error) {
        console.error('Error fetching token balance:', error);
        setBalance(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, [connection, publicKey, mint, decimals]);

  if (loading) {
    return (
      <BalanceContainer>
        <Skeleton variant="text" width={100} />
        <Skeleton variant="text" width={60} />
      </BalanceContainer>
    );
  }

  if (!publicKey) {
    return (
      <BalanceContainer>
        <Typography variant="body2" color="text.secondary">
          Connect wallet to view balance
        </Typography>
      </BalanceContainer>
    );
  }

  return (
    <BalanceContainer>
      <TokenInfo>
        {logo && (
          <Box
            component="img"
            src={logo}
            alt={symbol || 'Token'}
            sx={{ width: 24, height: 24 }}
          />
        )}
        <Typography variant="h6">
          {balance !== null ? balance.toLocaleString() : '0'} {symbol}
        </Typography>
      </TokenInfo>
      <Typography variant="body2" color="text.secondary">
        Mint: {mint.slice(0, 4)}...{mint.slice(-4)}
      </Typography>
    </BalanceContainer>
  );
}; 