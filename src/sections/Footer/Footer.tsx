import { Container, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { SocialLinks, Logo } from '@phila-front/components';
import * as S from './Footer.styles';

export const Footer: FC = ({}) => {
  const links = ['https://youtube.com/', 'https://instagram.com/', 'https://facebook.com/'];
  return (
    <S.Wrapper>
      <Container>
        <S.Container container spacing={3} flexWrap="wrap">
          <S.Column item>
            <Stack spacing={3} direction="column">
              <Logo />
              <Typography>Криворізька християнська церква віри Євангельської</Typography>
              <SocialLinks links={links} />
            </Stack>
          </S.Column>
          <S.Column item>
            <Stack spacing={2} direction="column">
              <S.Header>Зв’язок з нами</S.Header>
              <S.FooterLink href="mailto:philakr@gmail.com">philakr@gmail.com</S.FooterLink>
              <S.FooterLink href="callto:0972321143">097-232-11-43</S.FooterLink>
              <S.FooterLink href="/">м. Кривий Ріг, вул. Прорізна 1В</S.FooterLink>
            </Stack>
          </S.Column>
        </S.Container>
      </Container>
    </S.Wrapper>
  );
};
