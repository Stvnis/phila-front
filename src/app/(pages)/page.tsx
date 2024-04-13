import { Button, Typography } from '@mui/material';
import { About, AboutProps, Donate, DonateProps, Subscribe, SubscribeProps, Blog, BlogProps } from '@phila-front/sections';
import { donate, subscribe, blog, about, volunteer } from '@phila-front/mocks';

const sectionMap = {
  about: About,
  donate: Donate,
  subscribe: Subscribe,
  blog: Blog,
};

interface AboutData {
  type: 'about';
  props: AboutProps;
}

interface DonateData {
  type: 'donate';
  props: DonateProps;
}

interface SubscribeData {
  type: 'subscribe';
  props: SubscribeProps;
}

interface BlogData {
  type: 'blog';
  props: BlogProps;
}

const sectionsData: (AboutData | DonateData | SubscribeData | BlogData)[] = [
  
  {
    type: 'about',
    props: about,
  },
  {
    type: 'blog',
    props: blog,
  },
  {
    type: 'about',
    props: volunteer,
  },
  {
    type: 'donate',
    props: donate,
  },
  {
    type: 'subscribe',
    props: subscribe,
  },
];

export default function Home() {
  return (
    <main>
      <Typography>Homepage</Typography>
      <Button variant="contained" color="secondary">
        Next
      </Button>
      {sectionsData.map(({ type, props }, index) => {
        const Component = sectionMap[type];
        return <Component key={index} {...props} />;
      })}
    </main>
  );
}
