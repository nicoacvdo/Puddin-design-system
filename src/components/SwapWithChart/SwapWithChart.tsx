import React, { useEffect, useRef, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Paper, Typography, Stack, Divider, Grid, FormControl, Select, MenuItem, ButtonGroup, Button as MuiButton } from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Chip from '@mui/material/Chip';

// Import necessary components
import NavigationBar from '../NavigationBar/NavigationBar';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';
import CryptoCard from '../CryptoCard/CryptoCard';
import BottomNavigationBar from '../BottomNavigationBar/BottomNavigationBar';
import TradingView from '../TradingView/TradingView';

const SwapWithChartContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.surface.container.high, // Based on Figma style 710:5489
  minHeight: '100vh',
  padding: theme.spacing(3), // Overall padding based on visual estimation from image (24px)
  paddingBottom: theme.spacing(10), // Added padding at bottom to account for potential fixed elements or just spacing
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  paddingTop: '80px', // Add 80px top padding between navbar and content
}));

const ChartAndSwapArea = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(3), // Spacing below this main area (24px) - Based on visual estimation
}));

const ChartContainer = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: 0,
  backgroundColor: theme.palette.surface.main,
  boxShadow: 'none',
  height: '400px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column', // Changed to column for title above chart
  width: '639px', // Set fixed width to 639px
}));

const SwapInterfaceContainer = styled(Paper)(({ theme }) => ({
   borderRadius: theme.shape.borderRadius, // Based on Figma visual
  padding: '24px', // Padding based on Figma data (719:610 - container padding)
  backgroundColor: theme.palette.surface.main, // Based on Figma style 710:5461
  boxShadow: 'none', // Remove default Paper elevation
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // Distribute space between elements
  width: '449px', // Set fixed width to 449px
}));

const CurrencySelectContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexGrow: 0,
  flexShrink: 0,
  marginRight: theme.spacing(1.5), // Estimated spacing

  '& .MuiFormControl-root':{
    width: '100%',
    '& .MuiOutlinedInput-root': {
      borderRadius: '16px', // Based on Figma visual
      height: '32px', // Based on Figma visual (matches Chip height)
      padding: '0px', // Remove root padding
      backgroundColor: theme.palette.surface.main, // Matches container background
      '& .MuiSelect-select': {
         padding: '0px', // Remove default select padding
         display: 'flex',
         alignItems: 'center',
         boxSizing: 'border-box',
         minHeight: 'auto',
         color: theme.palette.text.primary, // Based on Figma visual
         paddingRight: theme.spacing(3), // Adjust padding for icon positioning
      },
      '& .MuiOutlinedInput-notchedOutline': {
         border: 'none', // Based on Figma visual
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        border: 'none', 
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: 'none', 
      },
    },
    '& .MuiSvgIcon-root': {
        color: theme.palette.text.secondary, // Based on Figma visual
        right: '8px', // Adjust icon position
    }
  }
}));

const SwapButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  margin: theme.spacing(2, 0), // Estimated vertical margin (16px)
}));

const CurrencyInputStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row', // Default to row for larger screens
  spacing: 2,
  alignItems: 'center', // Vertically align items in the stack
  justifyContent: 'space-between', // Distribute space
  width: '100%', // Take full width
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column', // Stack vertically on small screens
    alignItems: 'flex-start', // Align items to the start on small screens
  },
}));

const AmountInputStack = styled(Stack)(({ theme }) => ({
  alignItems: 'flex-end', // Align items to the end by default (for amount on right)
  spacing: 0.5,
  minHeight: '56px', // Ensure consistent height
  [theme.breakpoints.down('sm')]: {
    alignItems: 'flex-start', // Align items to the start on small screens
  },
}));

export const SwapWithChart: React.FC = () => {
  const theme = useTheme();
  const [fromCurrency, setFromCurrency] = useState('SOL');
  const [toCurrency, setToCurrency] = useState('USDT');
  const [fromAmount, setFromAmount] = useState('4.38');

  const handleFromCurrencyChange = (event: any) => {
    setFromCurrency(event.target.value as string);
  };

  const handleToCurrencyChange = (event: any) => {
    setToCurrency(event.target.value as string);
  };

  const handleFromAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFromAmount(event.target.value);
  };

  const handleHalfMax = (action: 'half' | 'max') => {
    console.log(`${action} clicked`);
  };

  return (
    <SwapWithChartContainer>
      <NavigationBar navVariant="small" title="Label" />

      <ContentWrapper>
        <ChartAndSwapArea container spacing={3}>
          <Grid item xs={12} md={8}>
            <ChartContainer>
              <Box sx={{ display: 'flex', alignItems: 'center', padding: theme.spacing(2) }}>
                <Box sx={{ width: 24, height: 24, backgroundColor: theme.palette.primary.main, borderRadius: '50%', mr: 1 }} />
                <Typography variant="h6" color="text.primary">SOL - USDT</Typography>
              </Box>
              <TradingView 
                symbol="SOLUSDT"
                theme={theme.palette.mode}
                interval="1D"
                containerId="tradingview_chart"
              />
            </ChartContainer>
          </Grid>

          <Grid item xs={12} md={4}> {/* Adjust grid size based on visual estimation */}
            <SwapInterfaceContainer>
               <Typography variant="body2" color="text.secondary">From</Typography>
               <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }} justifyContent="space-between">
                  <CurrencySelectContainer>
                    <FormControl fullWidth size="small">
                       <Select
                         labelId="from-currency-label"
                         id="from-currency-select"
                         value={fromCurrency}
                         label="Currency"
                         onChange={handleFromCurrencyChange}
                         IconComponent={ArrowDropDownIcon}
                         renderValue={(selected) => (
                            <Box sx={{ display: 'flex', alignItems: 'center', padding: theme.spacing(0.5, 1) }}>
                               <Box sx={{ width: 24, height: 24, backgroundColor: theme.palette.primary.main, borderRadius: '50%', mr: 0.5 }} />
                               <Typography variant="body1" color="text.primary">{selected}</Typography>
                             </Box>
                         )}
                         sx={{ /* Add any specific styles for the Select component if needed */}}
                       >
                         <MenuItem value={'SOL'}>
                            <Box sx={{ width: 24, height: 24, backgroundColor: theme.palette.primary.main, borderRadius: '50%', mr: 1 }} />
                            SOL
                         </MenuItem>
                         <MenuItem value={'USDT'}>
                             <Box sx={{ width: 24, height: 24, backgroundColor: theme.palette.secondary.main, borderRadius: '50%', mr: 1 }} />
                             USDT
                         </MenuItem>
                       </Select>
                     </FormControl>
                  </CurrencySelectContainer>
                  <Stack alignItems={{ xs: 'flex-start', sm: 'flex-end' }} spacing={0.5}>
                    <ButtonGroup variant="text" aria-label="half max button group" size="small">
                      <MuiButton onClick={() => handleHalfMax('half')}>Half</MuiButton>
                      <MuiButton onClick={() => handleHalfMax('max')}>Max</MuiButton>
                    </ButtonGroup>
                    <TextField
                      variant="standard"
                      value={fromAmount}
                      onChange={handleFromAmountChange}
                      InputProps={{
                        disableUnderline: true,
                         style: {
                           fontSize: theme.typography.h5.fontSize,
                           lineHeight: theme.typography.h5.lineHeight,
                           letterSpacing: theme.typography.h5.letterSpacing,
                         },
                      }}
                      sx={{
                         '& .MuiInputBase-input': {
                           textAlign: 'right',
                            padding: 0,
                            fontSize: theme.typography.h5.fontSize,
                            lineHeight: theme.typography.h5.lineHeight,
                            letterSpacing: theme.typography.h5.letterSpacing,
                            color: theme.palette.text.primary,
                            backgroundColor: theme.palette.surface.main,
                            borderRadius: '4px',
                           },
                           mt: 0,
                        }}
                    />
                  </Stack>
                </Stack>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>1 SOL = 123.314 CLP</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                  <IconButton variant="filled" size="large">
                    <SwapVertIcon sx={{ color: theme.palette.primary.contrastText }}/>
                  </IconButton>
                </Box>

                <Typography variant="body2" color="text.secondary">To</Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }} justifyContent="space-between">
                  <CurrencySelectContainer>
                     <FormControl fullWidth size="small">
                        <Select
                          labelId="to-currency-label"
                          id="to-currency-select"
                          value={toCurrency}
                          label="Currency"
                          onChange={handleToCurrencyChange}
                          IconComponent={ArrowDropDownIcon}
                          renderValue={(selected) => (
                             <Box sx={{ display: 'flex', alignItems: 'center', padding: theme.spacing(0.5, 1.5) }}>
                                <Box sx={{ width: 24, height: 24, backgroundColor: theme.palette.secondary.main, borderRadius: '50%', mr: 1 }} />
                                <Typography variant="body1" color="text.primary">{selected}</Typography>
                              </Box>
                          )}
                          sx={{}}
                        >
                          <MenuItem value={'SOL'}>
                             <Box sx={{ width: 24, height: 24, backgroundColor: theme.palette.primary.main, borderRadius: '50%', mr: 1 }} />
                             SOL
                           </MenuItem>
                           <MenuItem value={'USDT'}>
                              <Box sx={{ display: 'flex', alignItems: 'center', padding: theme.spacing(0.5, 1.5) }}>
                                 <Box sx={{ width: 24, height: 24, backgroundColor: theme.palette.secondary.main, borderRadius: '50%', mr: 1 }} />
                                 <Typography variant="body1" color="text.primary">USDT</Typography>
                               </Box>
                           </MenuItem>
                         </Select>
                     </FormControl>
                 </CurrencySelectContainer>
                  <Stack alignItems={{ xs: 'flex-start', sm: 'flex-end' }} spacing={0.5}>
                     <TextField
                       variant="standard"
                       value="444.007876"
                        InputProps={{
                          disableUnderline: true,
                          readOnly: true,
                          style: {
                             fontSize: theme.typography.h5.fontSize,
                             lineHeight: theme.typography.h5.lineHeight,
                             letterSpacing: theme.typography.h5.letterSpacing,
                          },
                        }}
                       sx={{
                          '& .MuiInputBase-input': {
                            textAlign: 'right',
                             padding: 0,
                             fontSize: theme.typography.h5.fontSize,
                             lineHeight: theme.typography.h5.lineHeight,
                             letterSpacing: theme.typography.h5.letterSpacing,
                              color: theme.palette.text.primary,
                               backgroundColor: theme.palette.surface.main,
                              borderRadius: '4px',
                             },
                              mt: 0,
                             }}
                     />
                   </Stack>
                </Stack>
                 <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>1 SOL = 123.314 CLP</Typography>

                <Typography variant="body2" color="text.secondary" align="center" sx={{ my: 2 }}>
                  1 SOL = 163.8653311 USDT
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: -1, mb: 2 }}>
                  <Chip label="JUP" />
                </Box>

                <Button 
                  variant="filled" 
                  fullWidth 
                  size="medium" 
                  sx={{ 
                    height: 56,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '0.15px',
                    fontWeight: 500,
                    textTransform: 'none'
                  }}
                >
                  Swap
                </Button>
            </SwapInterfaceContainer>
          </Grid>
        </ChartAndSwapArea>
      </ContentWrapper>
      <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
        <BottomNavigationBar value={0} onChange={() => {}} />
      </Box>
    </SwapWithChartContainer>
  );
};

export default SwapWithChart;