import React, { FC } from 'react';
import { CardBlogPost } from '@phila-front/types';
import NextImage from "next/image"
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

export const BlogCard: FC<CardBlogPost> = ({ image, title, link , publishDate }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia>
        <NextImage src={image.url} alt={image.alt} width={345} height={140} />
        </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography variant="body2">
          {publishDate}
        </Typography>
      </CardContent>
    </Card>
  );
};
