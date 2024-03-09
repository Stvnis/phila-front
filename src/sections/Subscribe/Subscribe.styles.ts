'use client';
import { Box, styled, Typography } from '@mui/material';
import NextImage from 'next/image';

export const ContentWrap = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(10),
  maxWidth: theme.spacing(92.25),
  margin: 'auto',
}));
export const Title = styled(Typography)(() => ({
  textAlign: 'center',
  fontWeight: 600,
}));
export const Description = styled(Typography)(() => ({
  textAlign: 'center',
  fontWeight: 500,
}));
export const Translation = styled(Typography)(() => ({
  textAlign: 'center',
  fontWeight: 500,
}));
export const Image = styled(NextImage)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: theme.spacing(1.5),
}));
