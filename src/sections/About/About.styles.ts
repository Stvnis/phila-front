'use client';
import { Box, Typography, styled } from '@mui/material';

export const Title = styled(Typography)(() => ({
  fontWeight: 600,
  letterSpacing: -2.8,
}));

export const Text = styled(Typography)(() => ({
  fontWeight: 500,
  opacity: 0.6,
}));

export const PrimaryImage = styled('img')(() => ({
  maxHeight: 368,
  maxWidth: 596,
  borderRadius: 12,
  width: '100%',
  objectFit: 'cover',
  flex: 1,
}));

export const SecondaryImage = styled('img')(() => ({
  maxHeight: 368,
  maxWidth: 298,
  borderRadius: 12,
  objectFit: 'cover',
  flex: 2,
}));
