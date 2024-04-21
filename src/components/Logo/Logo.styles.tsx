'use client';
import { styled, Typography } from '@mui/material';
import NextLink from 'next/link';
import { LogoSVG } from '@phila-front/assets/images/icons';

export const Icon = styled(LogoSVG)(({ theme }) => ({
  fontSize: theme.spacing(6.25),
}));

export const Link = styled(NextLink)(() => ({
  textDecoration: 'none',
}));

export const Title = styled(Typography)(() => ({
  color: '#262626',
  fontWeight: 'bold',
}));
