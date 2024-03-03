import React, { FC } from 'react';
import { Button, Chip, Container, Grid, Stack } from '@mui/material';
import Image from 'next/image';
import * as S from './Donate.styles';

export interface DonateProps {
  title: string;
  text: string;
  button: {
    title: string;
    link: string;
  };
  image: string;
  backgroundColor?: string;
}

export const Donate: FC<DonateProps> = ({ title, text, button, image, backgroundColor }) => {
  return (
    <S.Wrap style={{ backgroundColor }}>
      <Container data-testid="donate">
        <Grid container>
          <Grid item xs={12}>
            <S.ContentWrap>
              <S.Title variant="h3">{title}</S.Title>
              <S.Description>{text}</S.Description>
              <Stack flexDirection="row" justifyContent="center">
                <Chip label="Наступна трансляція через: 4 дні" />
                <Button variant="contained">{button.title}</Button>
              </Stack>
            </S.ContentWrap>
          </Grid>
          <Grid item xs={12}>
            <Image src={image} alt="preview" width={1240} height={530} />
          </Grid>
        </Grid>
      </Container>
    </S.Wrap>
  );
};
