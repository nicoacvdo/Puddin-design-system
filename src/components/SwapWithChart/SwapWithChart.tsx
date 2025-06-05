import React, { useEffect, useRef, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Paper, Typography, Stack, Divider, Grid, FormControl, Select, MenuItem, ButtonGroup, Button as MuiButton } from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Chip from '@mui/material/Chip';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; // Import recharts components

// Import necessary components
import NavigationBar from '../NavigationBar/NavigationBar';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';
import CryptoCard from '../CryptoCard/CryptoCard';
import BottomNavigationBar from '../BottomNavigationBar/BottomNavigationBar';

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

  // Mock data for recharts (SOL/USDT)
  const mockChartData = [
    { date: '2023-01-01', price: 10.5 },
    { date: '2023-02-01', price: 12.3 },
    { date: '2023-03-01', price: 11.8 },
    { date: '2023-04-01', price: 14.2 },
    { date: '2023-05-01', price: 15.0 },
    { date: '2023-06-01', price: 13.5 },
    { date: '2023-07-01', price: 16.8 },
    { date: '2023-08-01', price: 17.5 },
    { date: '2023-09-01', price: 16.0 },
    { date: '2023-10-01', price: 18.2 },
    { date: '2023-11-01', price: 19.5 },
    { date: '2023-12-01', price: 21.0 },
    { date: '2024-01-01', price: 22.5 },
    { date: '2024-02-01', price: 24.0 },
    { date: '2024-03-01', price: 23.0 },
    { date: '2024-04-01', price: 25.5 },
    { date: '2024-05-01', price: 26.8 },
    { date: '2024-05-29', price: 27.1 }, // Today's approximate price
  ];

  return (
    <SwapWithChartContainer>
      {/* Using 'small' navVariant based on visual and available types, despite potential linter issue */}
      <NavigationBar navVariant="small" title="Label" />

      <ContentWrapper>
        <ChartAndSwapArea container spacing={3}> {/* Spacing between grid items (24px) */}
          <Grid item xs={12} md={8}> {/* Adjust grid size based on visual estimation */}
            <ChartContainer>
              <Box sx={{ display: 'flex', alignItems: 'center', padding: theme.spacing(2) }}> {/* Padding around title and icon */}
                 <Box sx={{ width: 24, height: 24, backgroundColor: theme.palette.primary.main, borderRadius: '50%', mr: 1 }} /> {/* Placeholder Icon */}
                 <Typography variant="h6" color="text.primary">SOL - USDT</Typography> {/* Title text */}
              </Box>
              {/* Recharts Line Chart */}
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={mockChartData}
                  margin={{
                    top: 20,
                    right: 20,
                    left: 0,
                    bottom: 20,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} opacity={0.3} />
                  <XAxis 
                    dataKey="date" 
                    tick={{ 
                      fill: theme.palette.text.secondary, 
                      fontSize: theme.typography.caption.fontSize,
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: theme.typography.caption.fontWeight,
                    }} 
                    axisLine={false} 
                    tickLine={false}
                    tickFormatter={(value) => {
                      const date = new Date(value);
                      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                    }}
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis 
                    tick={{ 
                      fill: theme.palette.text.secondary, 
                      fontSize: theme.typography.caption.fontSize,
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: theme.typography.caption.fontWeight,
                    }} 
                    axisLine={false} 
                    tickLine={false} 
                    domain={['auto', 'auto']}
                    tickFormatter={(value) => `$${value}`}
                    padding={{ top: 10, bottom: 10 }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: theme.palette.surface.container.main, 
                      borderColor: theme.palette.divider, 
                      borderRadius: theme.shape.borderRadius,
                      boxShadow: theme.shadows[2],
                    }} 
                    itemStyle={{ 
                      color: theme.palette.text.primary,
                      fontSize: theme.typography.body2.fontSize,
                      fontFamily: theme.typography.fontFamily,
                    }} 
                    labelStyle={{ 
                      color: theme.palette.text.secondary,
                      fontSize: theme.typography.caption.fontSize,
                      fontFamily: theme.typography.fontFamily,
                    }}
                    formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke={theme.palette.primary.main} 
                    strokeWidth={3} 
                    dot={false} 
                    activeDot={{ 
                      r: 8, 
                      stroke: theme.palette.primary.main, 
                      strokeWidth: 2,
                      fill: theme.palette.surface.main 
                    }} 
                  />
                </LineChart>
              </ResponsiveContainer>
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
      {/* Bottom Navigation Bar */}
      <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
        <BottomNavigationBar value={0} onChange={() => {}} /> {/* Add state management for value and onChange later */}
      </Box>
    </SwapWithChartContainer>
  );
};

export default SwapWithChart;