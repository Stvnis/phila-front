'use client';
import { Box, styled } from '@mui/material';

export const Wrap = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: `${theme.spacing(10)} 0`,
}));
