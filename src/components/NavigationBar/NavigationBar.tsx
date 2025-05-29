import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar as MuiAppBar, AppBarProps as MuiAppBarProps, Toolbar, IconButton, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

export interface NavigationBarProps extends Omit<MuiAppBarProps, 'variant'> {
  navVariant?: 'center-aligned' | 'small' | 'large';
  title?: string;
  onMenuClick?: () => void;
}

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'navVariant',
})<NavigationBarProps>(({ theme, navVariant = 'center-aligned' }) => {
  const getVariantStyles = () => {
    switch (navVariant) {
      case 'center-aligned':
        return {
          height: '64px',
          '& .MuiToolbar-root': {
            justifyContent: 'center',
            padding: '0 16px',
          },
          '& .MuiTypography-root': {
            fontSize: '22px',
            lineHeight: '28px',
            letterSpacing: '0px',
            fontWeight: 400,
          },
        };
      case 'small':
        return {
          height: '64px',
          '& .MuiToolbar-root': {
            justifyContent: 'flex-start',
            padding: '0 16px',
          },
          '& .MuiTypography-root': {
            fontSize: '22px',
            lineHeight: '28px',
            letterSpacing: '0px',
            fontWeight: 400,
          },
        };
      case 'large':
        return {
          height: '152px',
          '& .MuiToolbar-root': {
            justifyContent: 'flex-start',
            padding: '0 16px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            height: '100%',
          },
          '& .MuiTypography-root': {
            fontSize: '28px',
            lineHeight: '36px',
            letterSpacing: '0px',
            fontWeight: 400,
            marginTop: '28px',
          },
        };
      default:
        return {};
    }
  };

  return {
    backgroundColor: theme.palette.surface.main,
    color: theme.palette.text.primary,
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.outline.main}`,
    '& .MuiIconButton-root': {
      color: theme.palette.text.primary,
      marginRight: '16px',
    },
    ...getVariantStyles(),
  };
});

export const NavigationBar: React.FC<NavigationBarProps> = ({
  navVariant = 'center-aligned',
  title,
  onMenuClick,
  ...props
}) => {
  return (
    <StyledAppBar navVariant={navVariant} {...props}>
      <Toolbar>
        {navVariant !== 'center-aligned' && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
        )}
        {title && (
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavigationBar; 