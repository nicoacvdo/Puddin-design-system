import React from 'react';
import { styled } from '@mui/material/styles';
import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps } from '@mui/material';

declare module '@mui/material/IconButton' {
  interface IconButtonPropsVariantOverrides {
    filled: true;
    tonal: true;
    outlined: true;
    standard: true;
  }
}

export interface IconButtonProps extends Omit<MuiIconButtonProps, 'variant'> {
  variant?: 'filled' | 'tonal' | 'outlined' | 'standard';
}

const StyledIconButton = styled(MuiIconButton, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<IconButtonProps>(({ theme, variant = 'standard' }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'filled':
        return {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.onPrimary,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            opacity: 0.92,
          },
          '&:focus': {
            backgroundColor: theme.palette.primary.main,
            opacity: 0.88,
          },
          '&:active': {
            backgroundColor: theme.palette.primary.main,
            opacity: 0.84,
          },
        };
      case 'tonal':
        return {
          backgroundColor: theme.palette.secondary.container,
          color: theme.palette.secondary.onSecondaryContainer,
          '&:hover': {
            backgroundColor: theme.palette.secondary.container,
            opacity: 0.92,
          },
          '&:focus': {
            backgroundColor: theme.palette.secondary.container,
            opacity: 0.88,
          },
          '&:active': {
            backgroundColor: theme.palette.secondary.container,
            opacity: 0.84,
          },
        };
      case 'outlined':
        return {
          backgroundColor: 'transparent',
          color: theme.palette.primary.main,
          border: `1px solid ${theme.palette.outline.main}`,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            opacity: 0.08,
            border: `1px solid ${theme.palette.primary.main}`,
          },
          '&:focus': {
            backgroundColor: theme.palette.primary.main,
            opacity: 0.12,
            border: `1px solid ${theme.palette.primary.main}`,
          },
          '&:active': {
            backgroundColor: theme.palette.primary.main,
            opacity: 0.16,
            border: `1px solid ${theme.palette.primary.main}`,
          },
        };
      case 'standard':
        return {
          backgroundColor: 'transparent',
          color: theme.palette.text.primary,
          '&:hover': {
            backgroundColor: theme.palette.text.primary,
            opacity: 0.08,
          },
          '&:focus': {
            backgroundColor: theme.palette.text.primary,
            opacity: 0.12,
          },
          '&:active': {
            backgroundColor: theme.palette.text.primary,
            opacity: 0.16,
          },
        };
      default:
        return {};
    }
  };

  return {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    padding: '8px',
    '& .MuiSvgIcon-root': {
      fontSize: '24px',
    },
    ...getVariantStyles(),
  };
});

export const IconButton: React.FC<IconButtonProps> = (props) => {
  return <StyledIconButton {...props} />;
};

export default IconButton; 