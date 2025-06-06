import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '../Box/Box';

export interface CenterProps {
  /**
   * The content of the center container
   */
  children?: React.ReactNode;
  /**
   * The background color of the center container
   */
  bg?: string;
  /**
   * The border radius of the center container
   */
  borderRadius?: string | number;
  /**
   * The padding of the center container
   */
  p?: number | string;
  /**
   * The margin of the center container
   */
  m?: number | string;
  /**
   * The width of the center container
   */
  w?: string | number;
  /**
   * The height of the center container
   */
  h?: string | number;
  /**
   * Whether to center content horizontally
   */
  horizontal?: boolean;
  /**
   * Whether to center content vertically
   */
  vertical?: boolean;
}

const StyledCenter = styled(Box)<CenterProps>(({ theme, ...props }) => ({
  display: 'flex',
  backgroundColor: props.bg,
  borderRadius: props.borderRadius,
  padding: theme.spacing(props.p as number),
  margin: theme.spacing(props.m as number),
  width: props.w,
  height: props.h,
  ...(props.horizontal && {
    justifyContent: 'center',
  }),
  ...(props.vertical && {
    alignItems: 'center',
  }),
}));

export const Center: React.FC<CenterProps> = (props) => {
  return <StyledCenter {...props} />;
}; 