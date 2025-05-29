import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Paper, Typography, Stack, Divider, FormControl, InputLabel, Select, MenuItem, ButtonGroup, Button as MuiButton } from '@mui/material';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';
import CryptoCard from '../CryptoCard/CryptoCard';
import BottomNavigationBar from '../BottomNavigationBar/BottomNavigationBar';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Chip from '@mui/material/Chip';

const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.surface.container.high,
  minHeight: '100vh',
  minWidth: '440px',
  paddingBottom: theme.spacing(7), // Assuming bottom nav height is approx 56px, spacing(7) is 56px
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2), // 16px padding based on design
}));

const SwapCard = styled(Paper)<{ last?: boolean }>(({ theme, last }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  marginBottom: last ? 0 : theme.spacing(2), // Only first card gets margin
  backgroundColor: theme.palette.surface.main,
  boxShadow: 'none', // Remove elevation
  minHeight: 140, // Set a minimum height for both cards (adjust as needed)
}));

const CurrencySelectContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexGrow: 0, // Prevent it from growing, fixed size based on design
  flexShrink: 0, // Prevent it from shrinking
  marginRight: theme.spacing(1.5), // Adjusted spacing based on visual estimation

  // Styles for currency select to match the design exactly
  '& .MuiFormControl-root':{
    width: '100%', // Ensure it takes full width of its container within constraints
    '& .MuiOutlinedInput-root': {
      borderRadius: '16px', // Rounded corners for the select based on design
      height: '32px', // Changed height to match Chip
      padding: '0px', // Remove root padding to allow renderValue to control it
      backgroundColor: theme.palette.surface.main, // Changed background color to match user's request
      '& .MuiSelect-select': {
         padding: '0px',
         display: 'flex',
         alignItems: 'center',
         boxSizing: 'border-box', // Include padding in the element's total width and height
         minHeight: 'auto', // Allow min height to be determined by content
         color: theme.palette.text.primary, // Ensure selected value color matches design
         paddingRight: theme.spacing(3), // Adjust padding for icon positioning (icon is approx 24px)
      },
      '& .MuiOutlinedInput-notchedOutline': {
         border: 'none', // Remove border based on design
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        border: 'none', 
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: 'none', 
      },
    },
    '& .MuiSvgIcon-root': {
        color: theme.palette.text.secondary,
        right: '8px', // Adjust icon position closer to the edge (1 theme.spacing unit)
    }
  }
}));

const SwapButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  // Vertical margin around the swap button area, matching design
  margin: theme.spacing(2, 0), // 16px vertical margin based on design
}));

// Sample data for crypto cards
const sampleChartData = [
  { value: 10 }, { value: 12 }, { value: 8 }, { value: 15 }, { value: 10 }, { value: 14 }, { value: 16 }
];

export const Swap: React.FC = () => {
  const theme = useTheme();
  const [fromCurrency, setFromCurrency] = useState('SOL');
  const [toCurrency, setToCurrency] = useState('USDT');
  const [fromAmount, setFromAmount] = useState('4.38');
  const [bottomNavValue, setBottomNavValue] = useState(0); // State for bottom navigation

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
    // Implement half/max logic here
    console.log(`${action} clicked`);
  };

  const handleBottomNavChange = (event: React.SyntheticEvent, newValue: number) => {
    setBottomNavValue(newValue);
    // Handle navigation based on newValue
    console.log('Bottom navigation value:', newValue);
  };

  return (
    <PageContainer>
      <ContentContainer>
        <SwapCard>
          <Typography variant="body2" color="text.secondary">From</Typography>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            justifyContent="space-between"
          >
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
            <Stack 
               alignItems={{ xs: 'flex-start', sm: 'flex-end' }} 
               spacing={0.5}
               sx={{ minHeight: '56px' }}
            >
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
        </SwapCard>

        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <IconButton variant="filled" size="large">
            <SwapVertIcon sx={{ color: theme.palette.primary.contrastText }}/>
          </IconButton>
        </Box>

        <SwapCard last>
          <Typography variant="body2" color="text.secondary">To</Typography>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            justifyContent="space-between"
          >
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
             <Stack 
               alignItems={{ xs: 'flex-start', sm: 'flex-end' }} 
               spacing={0.5}
               sx={{ minHeight: '56px' }}
             >
               {/* Hidden placeholder for Half/Max buttons to match height */}
               <Box sx={{ height: 32, visibility: 'hidden' }}>
                 <ButtonGroup variant="text" aria-label="half max button group" size="small">
                   <MuiButton>Half</MuiButton>
                   <MuiButton>Max</MuiButton>
                 </ButtonGroup>
               </Box>
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
        </SwapCard>

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

        <Box sx={{ mt: 3 }}>
          <CryptoCard currency="SOL" percentageChange="+3.43%" price="$243.4430001" chartData={sampleChartData} />
          <CryptoCard currency="MATIC" percentageChange="+3.43%" price="$43.443001" chartData={sampleChartData} />
          <CryptoCard currency="USDC" percentageChange="+0.42%" price="$1.0042" chartData={sampleChartData} />
        </Box>

      </ContentContainer>
      <BottomNavigationBar value={bottomNavValue} onChange={handleBottomNavChange} />
    </PageContainer>
  );
};

export default Swap;