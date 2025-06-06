import React from 'react';
import { styled } from '@mui/material/styles';
import { Box as MuiBox, BoxProps as MuiBoxProps } from '@mui/material';

export interface BoxProps extends MuiBoxProps {
  /**
   * The content of the box
   */
  children?: React.ReactNode;
  /**
   * The background color of the box
   */
  bg?: string;
  /**
   * The border radius of the box
   */
  borderRadius?: string | number;
  /**
   * The padding of the box
   */
  p?: number | string;
  /**
   * The margin of the box
   */
  m?: number | string;
  /**
   * The width of the box
   */
  w?: string | number;
  /**
   * The height of the box
   */
  h?: string | number;
  /**
   * The display property of the box
   */
  display?: 'flex' | 'block' | 'inline-block' | 'inline' | 'grid' | 'none';
  /**
   * The flex direction of the box
   */
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /**
   * The justify content of the box
   */
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  /**
   * The align items of the box
   */
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  /**
   * The gap between flex items
   */
  gap?: number | string;
}

const StyledBox = styled(MuiBox)<BoxProps>(({ theme, ...props }) => ({
  backgroundColor: props.bg,
  borderRadius: props.borderRadius,
  padding: theme.spacing(props.p as number),
  margin: theme.spacing(props.m as number),
  width: props.w,
  height: props.h,
  display: props.display,
  flexDirection: props.flexDirection,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  gap: theme.spacing(props.gap as number),
}));

export const Box: React.FC<BoxProps> = (props) => {
  return <StyledBox {...props} />;
}; 