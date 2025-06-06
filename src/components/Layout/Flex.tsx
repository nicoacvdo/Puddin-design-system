import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '../Box/Box';

export interface FlexProps {
  /**
   * The content of the flex container
   */
  children?: React.ReactNode;
  /**
   * The background color of the flex container
   */
  bg?: string;
  /**
   * The border radius of the flex container
   */
  borderRadius?: string | number;
  /**
   * The padding of the flex container
   */
  p?: number | string;
  /**
   * The margin of the flex container
   */
  m?: number | string;
  /**
   * The gap between flex items
   */
  gap?: number | string;
  /**
   * The direction of the flex container
   */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /**
   * The justify content of the flex container
   */
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  /**
   * The align items of the flex container
   */
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  /**
   * The wrap behavior of the flex container
   */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /**
   * The width of the flex container
   */
  w?: string | number;
  /**
   * The height of the flex container
   */
  h?: string | number;
  /**
   * The grow property of the flex container
   */
  grow?: number;
  /**
   * The shrink property of the flex container
   */
  shrink?: number;
  /**
   * The basis property of the flex container
   */
  basis?: string | number;
}

const StyledFlex = styled(Box)<FlexProps>(({ theme, ...props }) => ({
  display: 'flex',
  backgroundColor: props.bg,
  borderRadius: props.borderRadius,
  padding: theme.spacing(props.p as number),
  margin: theme.spacing(props.m as number),
  gap: theme.spacing(props.gap as number),
  flexDirection: props.direction,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  flexWrap: props.wrap,
  width: props.w,
  height: props.h,
  flexGrow: props.grow,
  flexShrink: props.shrink,
  flexBasis: props.basis,
}));

export const Flex: React.FC<FlexProps> = (props) => {
  return <StyledFlex {...props} />;
}; 