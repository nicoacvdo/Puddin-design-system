import React from 'react';
import { styled } from '@mui/material/styles';
import { Stack as MuiStack, StackProps as MuiStackProps } from '@mui/material';

export interface StackProps extends MuiStackProps {
  /**
   * The content of the stack
   */
  children?: React.ReactNode;
  /**
   * The background color of the stack
   */
  bg?: string;
  /**
   * The border radius of the stack
   */
  borderRadius?: string | number;
  /**
   * The padding of the stack
   */
  p?: number | string;
  /**
   * The margin of the stack
   */
  m?: number | string;
  /**
   * The gap between stack items
   */
  gap?: number | string;
  /**
   * The direction of the stack
   */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /**
   * The justify content of the stack
   */
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  /**
   * The align items of the stack
   */
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  /**
   * The wrap behavior of the stack
   */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

const StyledStack = styled(MuiStack)<StackProps>(({ theme, ...props }) => ({
  backgroundColor: props.bg,
  borderRadius: props.borderRadius,
  padding: theme.spacing(props.p as number),
  margin: theme.spacing(props.m as number),
  gap: theme.spacing(props.gap as number),
  flexDirection: props.direction,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  flexWrap: props.wrap,
}));

export const Stack: React.FC<StackProps> = (props) => {
  return <StyledStack {...props} />;
}; 