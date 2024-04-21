'use client';
import { styled, Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';

export const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#F8F8F8',
  padding: `${theme.spacing(10)} 0`,
}));

export const Container = styled(Grid)(({ theme }) => ({
  justifyContent: 'center',

  [theme.breakpoints.up('sm')]: {
    justifyContent: 'space-between',
  },
}));

export const Column = styled(Grid)(({ theme }) => ({
  flexBasis: theme.breakpoints.values['sm'] / 2,
  [theme.breakpoints.up('sm')]: {
    flexBasis: 250,
  },
}));

export const Header = styled(Typography)(() => ({
  fontWeight: 600,
}));

export const FooterLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#1D1D1C',
  opacity: 0.6,
  fontSize: theme.spacing(1.75),
  lineHeight: 1.5,
}));
