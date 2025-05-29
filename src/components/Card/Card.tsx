import React from 'react';
import { styled } from '@mui/material/styles';
import { Card as MuiCard, CardProps as MuiCardProps } from '@mui/material';

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    elevated: true;
    filled: true;
  }
}

export interface CardProps extends Omit<MuiCardProps, 'variant'> {
  variant?: 'elevated' | 'filled' | 'outlined';
}

const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<CardProps>(({ theme, variant = 'elevated' }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'elevated':
        return {
          backgroundColor: theme.palette.surface.container.low,
          boxShadow: theme.shadows[1],
        };
      case 'filled':
        return {
          backgroundColor: theme.palette.surface.container.high,
          boxShadow: 'none',
        };
      case 'outlined':
        return {
          backgroundColor: theme.palette.surface.container.low,
          border: `1px solid ${theme.palette.outline.main}`,
          boxShadow: 'none',
        };
      default:
        return {};
    }
  };

  return {
    borderRadius: '28px',
    padding: '16px',
    ...getVariantStyles(),
  };
});

export const Card: React.FC<CardProps> = (props) => {
  return <StyledCard {...props} />;
};

export default Card; 