import React from 'react';
import { styled } from '@mui/material/styles';
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    filled: true;
    outlined: true;
  }
}

export interface ChipProps extends Omit<MuiChipProps, 'variant'> {
  variant?: 'filled' | 'outlined';
}

const StyledChip = styled(MuiChip, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<ChipProps>(({ theme, variant = 'filled' }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'filled':
        return {
          backgroundColor: theme.palette.surface.container.high,
          color: theme.palette.text.primary,
          '&:hover': {
            backgroundColor: theme.palette.surface.container.high,
            opacity: 0.92,
          },
          '&:focus': {
            backgroundColor: theme.palette.surface.container.high,
            opacity: 0.88,
          },
          '&:active': {
            backgroundColor: theme.palette.surface.container.high,
            opacity: 0.84,
          },
          '& .MuiChip-deleteIcon': {
            color: theme.palette.text.primary,
            '&:hover': {
              color: theme.palette.text.primary,
              opacity: 0.92,
            },
          },
        };
      case 'outlined':
        return {
          backgroundColor: 'transparent',
          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.outline.main}`,
          '&:hover': {
            backgroundColor: theme.palette.surface.container.high,
            opacity: 0.08,
            border: `1px solid ${theme.palette.outline.main}`,
          },
          '&:focus': {
            backgroundColor: theme.palette.surface.container.high,
            opacity: 0.12,
            border: `1px solid ${theme.palette.outline.main}`,
          },
          '&:active': {
            backgroundColor: theme.palette.surface.container.high,
            opacity: 0.16,
            border: `1px solid ${theme.palette.outline.main}`,
          },
          '& .MuiChip-deleteIcon': {
            color: theme.palette.text.primary,
            '&:hover': {
              color: theme.palette.text.primary,
              opacity: 0.92,
            },
          },
        };
      default:
        return {};
    }
  };

  return {
    height: '32px',
    borderRadius: '16px',
    padding: '0 12px',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '0.1px',
    '& .MuiChip-label': {
      padding: '0 4px',
    },
    '& .MuiChip-deleteIcon': {
      margin: '0 0 0 4px',
      fontSize: '18px',
    },
    ...getVariantStyles(),
  };
});

export const Chip: React.FC<ChipProps> = (props) => {
  return <StyledChip {...props} />;
};

export default Chip; 