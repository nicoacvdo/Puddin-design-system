import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ChartContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  minHeight: 400,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

interface TradingViewProps {
  symbol: string;
  theme?: 'light' | 'dark';
  interval?: string;
  containerId?: string;
}

declare global {
  interface Window {
    TradingView: any;
  }
}

export const TradingView: React.FC<TradingViewProps> = ({
  symbol,
  theme = 'dark',
  interval = '1D',
  containerId = 'tradingview_chart',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (typeof window.TradingView !== 'undefined' && containerRef.current) {
        new window.TradingView.widget({
          container_id: containerId,
          symbol: symbol,
          interval: interval,
          theme: theme,
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          allow_symbol_change: false,
          save_image: false,
          hide_side_toolbar: false,
          width: '100%',
          height: '100%',
          studies: [],
          show_popup_button: false,
          popup_width: '1000',
          popup_height: '650',
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [symbol, theme, interval, containerId]);

  return <ChartContainer ref={containerRef} id={containerId} />;
};

export default TradingView; 