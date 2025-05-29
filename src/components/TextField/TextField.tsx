import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';

declare module '@mui/material/TextField' {
  interface TextFieldVariants {
    standard: true;
  }
}

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'variant'> {
  variant?: 'filled' | 'outlined' | 'standard';
}

const StyledTextField = styled(MuiTextField, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<TextFieldProps>(({ theme, variant = 'outlined' }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'filled':
        return {
          '& .MuiOutlinedInput-root': {
            backgroundColor: theme.palette.surface.container.high,
            '&:hover': {
              backgroundColor: theme.palette.surface.container.high,
              opacity: 0.92,
            },
            '&.Mui-focused': {
              backgroundColor: theme.palette.surface.container.high,
              opacity: 0.88,
            },
            '&.Mui-error': {
              backgroundColor: theme.palette.error.container,
              '&:hover': {
                backgroundColor: theme.palette.error.container,
                opacity: 0.92,
              },
              '&.Mui-focused': {
                backgroundColor: theme.palette.error.container,
                opacity: 0.88,
              },
            },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '& .MuiInputLabel-root': {
            color: theme.palette.text.secondary,
            '&.Mui-focused': {
              color: theme.palette.primary.main,
            },
            '&.Mui-error': {
              color: theme.palette.error.main,
            },
          },
          '& .MuiInputBase-input': {
            color: theme.palette.text.primary,
            '&::placeholder': {
              color: theme.palette.text.secondary,
              opacity: 1,
            },
          },
          '& .MuiInputAdornment-root': {
            color: theme.palette.text.secondary,
          },
        };
      case 'outlined':
        return {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'transparent',
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.outline.main,
              },
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.main,
                borderWidth: '2px',
              },
            },
            '&.Mui-error': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.error.main,
              },
              '&:hover': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.error.main,
                },
              },
              '&.Mui-focused': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.error.main,
                  borderWidth: '2px',
                },
              },
            },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.outline.main,
          },
          '& .MuiInputLabel-root': {
            color: theme.palette.text.secondary,
            '&.Mui-focused': {
              color: theme.palette.primary.main,
            },
            '&.Mui-error': {
              color: theme.palette.error.main,
            },
          },
          '& .MuiInputBase-input': {
            color: theme.palette.text.primary,
            '&::placeholder': {
              color: theme.palette.text.secondary,
              opacity: 1,
            },
          },
          '& .MuiInputAdornment-root': {
            color: theme.palette.text.secondary,
          },
        };
      default:
        return {};
    }
  };

  return {
    '& .MuiOutlinedInput-root': {
      borderRadius: '4px',
      height: '56px',
      padding: '0 16px',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.5px',
    },
    '& .MuiInputLabel-root': {
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.5px',
      transform: 'translate(16px, 16px) scale(1)',
      '&.MuiInputLabel-shrink': {
        transform: 'translate(16px, -9px) scale(0.75)',
      },
    },
    '& .MuiInputBase-input': {
      padding: '16px 0',
    },
    '& .MuiInputAdornment-root': {
      marginRight: '16px',
    },
    ...getVariantStyles(),
  };
});

export const TextField: React.FC<TextFieldProps> = (props) => {
  return <StyledTextField {...props} />;
};

export default TextField; 