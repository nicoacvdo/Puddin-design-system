import React, { useState, useEffect } from 'react';
import { Button, Menu, MenuItem, Typography, Box } from '@mui/material';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { styled } from '@mui/material/styles';

// Import wallet adapter styles
require('@solana/wallet-adapter-react-ui/styles.css');

const WalletContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const AddressTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'monospace',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  maxWidth: '200px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

export const WalletConnect: React.FC = () => {
  const { publicKey, connected } = useWallet();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return (
    <WalletContainer>
      {connected && publicKey ? (
        <>
          <AddressTypography variant="body2">
            {formatAddress(publicKey.toString())}
          </AddressTypography>
          <Button
            variant="outlined"
            onClick={handleClick}
            aria-controls="wallet-menu"
            aria-haspopup="true"
          >
            Connected
          </Button>
          <Menu
            id="wallet-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>View on Explorer</MenuItem>
            <MenuItem onClick={handleClose}>Disconnect</MenuItem>
          </Menu>
        </>
      ) : (
        <WalletMultiButton />
      )}
    </WalletContainer>
  );
}; 