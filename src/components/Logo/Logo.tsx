import { FC } from 'react';
import { Stack } from '@mui/material';
import * as S from './Logo.styles';

export const Logo: FC = () => {
  return (
    <S.Link href="/">
      <Stack direction="row" spacing={3} alignItems="center">
        <S.Icon />
        <S.Title>Філадельфія</S.Title>
      </Stack>
    </S.Link>
  );
};
