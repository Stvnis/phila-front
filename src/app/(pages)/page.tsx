import { Button, Typography } from '@mui/material';
import { Donate, DonateProps, Subscribe, SubscribeProps, Blog, BlogProps } from '@phila-front/sections';
import { donate, subscribe, blog } from '@phila-front/mocks';

const sectionMap = {
  donate: Donate,
  subscribe: Subscribe,
  blog: Blog,
};

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

const sectionsData: (DonateData | SubscribeData | BlogData)[] = [
  {
    type: 'blog',
    props: blog,
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
