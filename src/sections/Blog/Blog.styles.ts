'use client';
import { Box, styled, Typography } from '@mui/material';

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  maxWidth: theme.spacing(90.25),
}));
export const Description = styled(Typography)(( {theme} ) => ({
  fontWeight: 500,
  maxWidth: theme.spacing(68.75),
}));
export const Wrapper = styled(Box)(( {theme} ) => ({
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: theme.spacing(10),
}));
