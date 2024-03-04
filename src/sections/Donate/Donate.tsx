import React, { FC } from 'react';
import { Box, Button, Container, Grid, Stack } from '@mui/material';
import * as S from './Donate.styles';

export interface DonateProps {
  title: string;
  text: string;
  button: {
    title: string;
    link: string;
  };
  image: {
    url: string;
    alt: string;
  };
  backgroundColor?: string;
}

export const Donate: FC<DonateProps> = ({ title, text, button, image, backgroundColor }) => {
  return (
    <S.Wrap style={{ backgroundColor }}>
      <Container data-testid="donate">
        <Grid container>
          <Grid item xs={7}>
            <S.ContentWrap>
              <Stack spacing={6}>
                <Box>
                  <S.Title variant="h3">{title}</S.Title>
                  <S.Description>{text}</S.Description>
                </Box>

                <Box>
                  <Button variant="contained" color="secondary">
                    {button.title}
                  </Button>
                </Box>
              </Stack>
            </S.ContentWrap>
          </Grid>
          <Grid item xs={5}>
            <S.Image src={image.url} alt={image.alt} width={1240} height={530} />
          </Grid>
        </Grid>
      </Container>
    </S.Wrap>
  );
};
