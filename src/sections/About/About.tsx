'use client';
import React, { FC } from 'react';
import { SectionWrapper } from '@phila-front/components';
import { Container, Typography, Grid, Box, useTheme, Button } from '@mui/material';
import { Image } from '@phila-front/types';
import EastIcon from '@mui/icons-material/East';
import * as S from './About.styles';

export interface AboutProps {
  title: string;
  text: string;
  button: {
    title: string;
    link: string;
  };
  backgroundColor?: string;
  image: Image;
}

export const About: FC<AboutProps> = ({ title, text, button, image }) => {
  const theme = useTheme();
  return (
    <SectionWrapper>
      <Container>
        <Grid container gap={10}>
          <Grid container wrap='nowrap' gap={7.5}>
            <Grid item xs={4}>
              <S.Title variant="h3">{title}</S.Title>
            </Grid>
            <Grid item xs={8} display={'flex'} direction={'column'} justifyContent={'space-between'} alignItems={'start'}>
              <S.Text>{text}</S.Text>
              <Button variant='text' endIcon={<EastIcon />}>{button.title}</Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="space-between" gap={3}>
            <S.PrimaryImage alt="Image" src="https://stvnis.github.io/assets/about-pic1.jpg" />
            <S.SecondaryImage alt="Image" src="https://stvnis.github.io/assets/about-pic2.png" />
            <S.SecondaryImage alt="Image" src="https://stvnis.github.io/assets/about-pic3.jpg" />
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};
