'use client';
import { styled, Box, Grid } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#F8F8F8',
  padding: `${theme.spacing(10)} 0`,
}));

export const Column = styled(Grid)(() => ({
  flexBasis: 250,
}));
