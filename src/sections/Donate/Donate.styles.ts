'use client';
import { Box, styled, Typography } from '@mui/material';

export const Wrap = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  padding: `${theme.spacing(10)} 0`,
}));
export const ContentWrap = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(10),
  maxWidth: theme.spacing(92.25),
  margin: 'auto',
}));
export const Title = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(3),
}));
export const Description = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(3),
}));