import { Container, Grid, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { Logo } from '../Logo/Logo';
import * as S from './Footer.styles';

export const Footer: FC = ({}) => {
  const links = ['https://youtube.com/', 'https://instagram.com/', 'https://facebook.com/'];
  return (
    <S.Wrapper>
      <Container>
        <Grid container justifyContent="space-between" spacing={3} flexWrap="wrap">
          <S.Column item>
            <Stack spacing={3} direction="column">
              <Logo />
              <Typography>Криворізька християнська церква віри Євангельської</Typography>
              <SocialLinks links={links} />
            </Stack>
          </S.Column>
          <S.Column item></S.Column>
        </Grid>
      </Container>
    </S.Wrapper>
  );
};
