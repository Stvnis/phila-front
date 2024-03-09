import { Box, Container, Stack, Grid, Button } from '@mui/material';
import { SectionWrapper, BlogCard } from '@phila-front/components';
import { CardBlogPost } from '@phila-front/types';
import React, { FC } from 'react';
import EastIcon from '@mui/icons-material/East';
import * as S from './Blog.styles';

export interface BlogProps {
  title: string;
  text: string;
  button: {
    title: string;
    link: string;
  };
  backgroundColor?: string;
  posts: CardBlogPost[];
}

export const Blog: FC<BlogProps> = ({ title, text, button, backgroundColor, posts }) => {
  return (
    <SectionWrapper backgroundColor={backgroundColor}>
      <Container>
        <S.Wrapper>
          <S.Title variant="h3">{title}</S.Title>
          <S.Description>{text}</S.Description>
        </S.Wrapper>

        <Box>
          <Grid 
          container spacing={3}
        //    direction="row" 
        justifyContent="center" 
        // flexWrap='wrap'
           >
            {posts.map((post) => (
              <Grid item>
                <BlogCard {...post} />{' '}
              </Grid>
            ))}
          </Grid>
        </Box>
        <Stack direction="column" alignItems="center">
          <Button endIcon={<EastIcon />}>{button.title}</Button>
        </Stack>
      </Container>
    </SectionWrapper>
  );
};
