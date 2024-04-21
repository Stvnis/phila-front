'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import { Box, Button, Container, Grid, Stack, useTheme } from '@mui/material';
import { SectionWrapper } from '@phila-front/components';
import { Image } from '@phila-front/types';
import * as S from './Donate.styles';

export interface DonateProps {
  title: string;
  text: string;
  button: {
    title: string;
    link: string;
  };
  image: Image;
  backgroundColor?: string;
}

export const Donate: FC<DonateProps> = ({ title, text, button, image, backgroundColor }) => {
  const theme = useTheme();
  const defaultBackgroundColor = theme.palette.primary.main;
  return (
    <SectionWrapper backgroundColor={backgroundColor || defaultBackgroundColor}>
      <Container data-testid="donate">
        <Grid container>
          <Grid item md={7}>
            <S.ContentWrap>
              <Stack spacing={6}>
                <Box>
                  <S.Title variant="h3">{title}</S.Title>
                  <S.Description>{text}</S.Description>
                </Box>

                <Box>
                  <Button variant="contained" color="secondary" component={Link} href={button.link}>
                    {button.title}
                  </Button>
                </Box>
              </Stack>
            </S.ContentWrap>
          </Grid>
          <Grid item md={5}>
            {image && <S.Image src={image.url} alt={image.alt} width={1240} height={530} />}
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};
