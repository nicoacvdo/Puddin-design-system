import React from 'react';
import { styled } from '@mui/material/styles';
import { Container as MuiContainer, ContainerProps as MuiContainerProps } from '@mui/material';

export interface ContainerProps extends MuiContainerProps {
  /**
   * The content of the container
   */
  children?: React.ReactNode;
  /**
   * The background color of the container
   */
  bg?: string;
  /**
   * The border radius of the container
   */
  borderRadius?: string | number;
  /**
   * The padding of the container
   */
  p?: number | string;
  /**
   * The margin of the container
   */
  m?: number | string;
  /**
   * The maximum width of the container
   */
  maxW?: string | number;
  /**
   * The center content of the container
   */
  centerContent?: boolean;
  /**
   * The center items of the container
   */
  centerItems?: boolean;
}

const StyledContainer = styled(MuiContainer)<ContainerProps>(({ theme, ...props }) => ({
  backgroundColor: props.bg,
  borderRadius: props.borderRadius,
  padding: theme.spacing(props.p as number),
  margin: theme.spacing(props.m as number),
  maxWidth: props.maxW,
  ...(props.centerContent && {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  ...(props.centerItems && {
    display: 'flex',
    alignItems: 'center',
  }),
}));

export const Container: React.FC<ContainerProps> = (props) => {
  return <StyledContainer {...props} />;
}; 