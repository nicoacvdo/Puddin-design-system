import React from 'react';
import { styled } from '@mui/material/styles';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    filled: true;
    elevated: true;
    tonal: true;
  }
}

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<ButtonProps>(({ theme, variant = 'filled' }) => {
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
      case 'text':
        return {
          backgroundColor: 'transparent',
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            opacity: 0.08,
          },
          '&:focus': {
            backgroundColor: theme.palette.primary.main,
            opacity: 0.12,
          },
          '&:active': {
            backgroundColor: theme.palette.primary.main,
            opacity: 0.16,
          },
        };
      case 'elevated':
        return {
          backgroundColor: theme.palette.surface.container.low,
          color: theme.palette.primary.main,
          boxShadow: theme.shadows[1],
          '&:hover': {
            backgroundColor: theme.palette.surface.container.low,
            boxShadow: theme.shadows[2],
          },
          '&:focus': {
            backgroundColor: theme.palette.surface.container.low,
            boxShadow: theme.shadows[1],
          },
          '&:active': {
            backgroundColor: theme.palette.surface.container.low,
            boxShadow: theme.shadows[1],
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
      default:
        return {};
    }
  };

  return {
    borderRadius: '20px',
    padding: '10px 24px',
    textTransform: 'none',
    ...getVariantStyles(),
  };
});

export const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

export default Button; 