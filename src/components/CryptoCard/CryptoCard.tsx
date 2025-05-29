import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Paper, Typography, Stack, Box } from '@mui/material';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

// Define a type for the chart data
interface ChartDataPoint {
  value: number;
}

export interface CryptoCardProps {
  currency: string;
  percentageChange: string;
  price: string;
  chartData: ChartDataPoint[];
}

const StyledCryptoCard = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
  backgroundColor: theme.palette.surface.container.low,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const ChartContainer = styled(Box)(({ theme }) => ({
  width: 100,
  height: 30,
}));

export const CryptoCard: React.FC<CryptoCardProps> = ({
  currency,
  percentageChange,
  price,
  chartData,
}) => {
  const theme = useTheme();

  return (
    <StyledCryptoCard>
      <Stack direction="row" spacing={1} alignItems="center">
        {/* Placeholder for currency icon */}
        <Box sx={{ width: 24, height: 24, backgroundColor: theme.palette.primary.main, borderRadius: '50%' }} />
        <Typography variant="body1">{currency}</Typography>
        <Typography variant="body2" color="success.main">{percentageChange}</Typography>
      </Stack>
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={theme.palette.primary.main} 
              strokeWidth={2} 
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
      <Typography variant="body1">{price}</Typography>
    </StyledCryptoCard>
  );
};

export default CryptoCard; 