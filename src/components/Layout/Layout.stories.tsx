import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';
import { Container } from './Container';
import { Grid } from './Grid';
import { Stack } from './Stack';
import { Flex } from './Flex';
import { Center } from './Center';
import { Typography } from '@mui/material';

const meta: Meta = {
  title: 'Layout',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

// Box Stories
export const BoxExample: StoryObj<typeof Box> = {
  render: () => (
    <Box
      bg="primary.main"
      color="white"
      p={3}
      borderRadius={2}
      w={300}
      h={200}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography>Box Component</Typography>
    </Box>
  ),
};

// Container Stories
export const ContainerExample: StoryObj<typeof Container> = {
  render: () => (
    <Container
      bg="surface.main"
      p={3}
      borderRadius={2}
      maxW="md"
      centerContent
    >
      <Typography variant="h4" gutterBottom>Container Component</Typography>
      <Typography>This is a centered container with max width</Typography>
    </Container>
  ),
};

// Grid Stories
export const GridExample: StoryObj<typeof Grid> = {
  render: () => (
    <Grid
      container
      spacing={2}
      bg="surface.main"
      p={3}
      borderRadius={2}
      templateColumns="repeat(3, 1fr)"
      gap={2}
    >
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Grid item key={item}>
          <Box
            bg="primary.main"
            color="white"
            p={2}
            borderRadius={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography>Item {item}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  ),
};

// Stack Stories
export const StackExample: StoryObj<typeof Stack> = {
  render: () => (
    <Stack
      direction="column"
      spacing={2}
      bg="surface.main"
      p={3}
      borderRadius={2}
      alignItems="center"
    >
      {[1, 2, 3].map((item) => (
        <Box
          key={item}
          bg="primary.main"
          color="white"
          p={2}
          borderRadius={1}
          w={200}
        >
          <Typography>Stack Item {item}</Typography>
        </Box>
      ))}
    </Stack>
  ),
};

// Flex Stories
export const FlexExample: StoryObj<typeof Flex> = {
  render: () => (
    <Flex
      direction="row"
      gap={2}
      bg="surface.main"
      p={3}
      borderRadius={2}
      justifyContent="space-between"
      alignItems="center"
    >
      {[1, 2, 3].map((item) => (
        <Box
          key={item}
          bg="primary.main"
          color="white"
          p={2}
          borderRadius={1}
          grow={1}
        >
          <Typography>Flex Item {item}</Typography>
        </Box>
      ))}
    </Flex>
  ),
};

// Center Stories
export const CenterExample: StoryObj<typeof Center> = {
  render: () => (
    <Center
      bg="surface.main"
      p={3}
      borderRadius={2}
      w={300}
      h={200}
      horizontal
      vertical
    >
      <Typography variant="h5">Centered Content</Typography>
    </Center>
  ),
}; 