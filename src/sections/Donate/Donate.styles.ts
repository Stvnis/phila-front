'use client';
import { Box, styled, Typography } from '@mui/material';
import NextImage from 'next/image';

export const ContentWrap = styled(Box)(({ theme }) => ({
  maxWidth: theme.spacing(70),
  padding: theme.spacing(3),
}));
export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(3),
}));
export const Description = styled(Typography)(() => ({
  fontWeight: 500,
}));
export const Image = styled(NextImage)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: theme.spacing(1.5),
}));
