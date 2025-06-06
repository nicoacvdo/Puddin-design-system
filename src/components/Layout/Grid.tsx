import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid as MuiGrid, GridProps as MuiGridProps } from '@mui/material';

export interface GridProps extends MuiGridProps {
  /**
   * The content of the grid
   */
  children?: React.ReactNode;
  /**
   * The background color of the grid
   */
  bg?: string;
  /**
   * The border radius of the grid
   */
  borderRadius?: string | number;
  /**
   * The padding of the grid
   */
  p?: number | string;
  /**
   * The margin of the grid
   */
  m?: number | string;
  /**
   * The gap between grid items
   */
  gap?: number | string;
  /**
   * The template columns of the grid
   */
  templateColumns?: string;
  /**
   * The template rows of the grid
   */
  templateRows?: string;
  /**
   * The auto flow of the grid
   */
  autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
  /**
   * The auto columns of the grid
   */
  autoColumns?: string;
  /**
   * The auto rows of the grid
   */
  autoRows?: string;
}

const StyledGrid = styled(MuiGrid)<GridProps>(({ theme, ...props }) => ({
  backgroundColor: props.bg,
  borderRadius: props.borderRadius,
  padding: theme.spacing(props.p as number),
  margin: theme.spacing(props.m as number),
  gap: theme.spacing(props.gap as number),
  gridTemplateColumns: props.templateColumns,
  gridTemplateRows: props.templateRows,
  gridAutoFlow: props.autoFlow,
  gridAutoColumns: props.autoColumns,
  gridAutoRows: props.autoRows,
}));

export const Grid: React.FC<GridProps> = (props) => {
  return <StyledGrid {...props} />;
}; 