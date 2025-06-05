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
      if (window.TradingView && containerRef.current) {
        try {
          console.log('Initializing TradingView widget with symbol:', symbol);
          new window.TradingView.widget({
            container_id: containerId,
            symbol: symbol,
            interval: interval,
            theme: theme,
            style: '1',
            locale: 'en',
            toolbar_bg: '#f1f3f6',
            enable_publishing: false,
            allow_symbol_change: true,
            save_image: false,
            hideideas: true,
            height: '100%',
            width: '100%',
            library_path: '/charting_library/',
            fullscreen: false,
            autosize: true,
            studies: [],
            disabled_features: ['use_localstorage_for_settings'],
            enabled_features: ['study_templates'],
            overrides: {
              'mainSeriesProperties.candleStyle.upColor': '#26a69a',
              'mainSeriesProperties.candleStyle.downColor': '#ef5350',
              'mainSeriesProperties.candleStyle.wickUpColor': '#26a69a',
              'mainSeriesProperties.candleStyle.wickDownColor': '#ef5350',
            },
          });
          console.log('TradingView widget initialized successfully');
        } catch (error) {
          console.error('Error initializing TradingView widget:', error);
        }
      }
    };

    script.onerror = (error) => {
      console.error('Error loading TradingView script:', error);
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [symbol, theme, interval, containerId]);

  return <ChartContainer ref={containerRef} id={containerId} />;
}; 