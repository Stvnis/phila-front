import React, { FC } from 'react';
import { Button, Container, Grid, Stack } from '@mui/material';
import * as S from './Subscribe.styles';

export interface SubscribeProps {
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

export const Subscribe: FC<SubscribeProps> = ({ title, text, button, image, backgroundColor }) => {
  return (
    <S.Wrap style={{ backgroundColor }}>
      <Container data-testid="subscribe">
        <Grid container>
          <Grid item xs={12}>
            <S.ContentWrap>
              <Stack spacing={3}>
                <S.Title variant="h3" color="default">
                  {title}
                </S.Title>
                <S.Description>{text}</S.Description>
                <Stack justifyContent="center" direction="row">
                  <Button variant="contained">{button.title}</Button>
                </Stack>
                <S.Translation>
                  Наступна трансляція через 12 годин, 24 хвилин, 42 секунд
                </S.Translation>
              </Stack>
            </S.ContentWrap>
          </Grid>
          <Grid item xs={12}>
            <S.Image src={image.url} alt={image.alt} width={1240} height={530} />
          </Grid>
        </Grid>
      </Container>
    </S.Wrap>
  );
};
