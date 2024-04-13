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
  images: Image[];
}

export const About: FC<AboutProps> = ({ title, text, button, images, backgroundColor }) => {
  const theme = useTheme();
  return (
    <SectionWrapper backgroundColor={backgroundColor || theme.palette.common.white}>
      <Container>
        <Grid container gap={10}>
          <Grid container spacing={3.75}>
            <Grid item md={5} xs={12}>
              <S.Title variant="h2">{title}</S.Title>
            </Grid>
            <Grid item md={7} xs={12} display={'flex'} direction={'column'} justifyContent={'space-between'} alignItems={'start'}>
              <S.Text>{text}</S.Text>
              <Button variant='text' endIcon={<EastIcon />}>{button.title}</Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="space-between" spacing={1.5}>
            {
              images.map((image, index)=>{
                if (index === 0) {
                  return <S.PrimaryImage key={index} alt={image.alt} src={image.url} />
                }
                return <S.SecondaryImage key={index} alt={image.alt} src={image.url} />              
              })
            }
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};
