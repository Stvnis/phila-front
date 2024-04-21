import { FC } from 'react';
import { Stack } from '@mui/material';
import { getSocialIcon } from './utils';
import { SocialLink } from './SocialLinks.styles';

interface ISocialLinks {
  links: string[];
}

export const SocialLinks: FC<ISocialLinks> = ({ links }) => {
  return (
    <Stack direction="row" spacing={3}>
      {links.map((link, index) => {
        const Icon = getSocialIcon(link);
        return (
          <SocialLink key={index} href={link} target="_blank">
            {Icon ? <Icon /> : 'N/I'}
          </SocialLink>
        );
      })}
    </Stack>
  );
};
