import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';

export interface BottomNavigationBarProps {
  // Add any necessary props here, e.g., for handling navigation
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  backgroundColor: theme.palette.surface.main,
  borderTop: `1px solid ${theme.palette.outline.main}`,
  height: '56px',
}));

const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&.Mui-selected': {
    color: theme.palette.text.primary,
  },
}));

export const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({
  value,
  onChange,
}) => {
  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
      <StyledBottomNavigation value={value} onChange={onChange}>
        <StyledBottomNavigationAction
          label="Swap"
          icon={<SwapVertIcon />}
        />
        <StyledBottomNavigationAction
          label="Pools"
          icon={<StarIcon />}
        />
        <StyledBottomNavigationAction
          label="Settings"
          icon={<SettingsIcon />}
        />
      </StyledBottomNavigation>
    </Box>
  );
};

export default BottomNavigationBar; 