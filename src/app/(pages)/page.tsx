import { Button, Typography } from '@mui/material';
import { Donate, DonateProps, Subscribe, SubscribeProps } from '@phila-front/sections';
import { donate, subscribe } from '@phila-front/mocks';

const sectionMap = {
  donate: Donate,
  subscribe: Subscribe,
};

interface DonateData {
  type: 'donate';
  props: DonateProps;
}

interface SubscribeData {
  type: 'subscribe';
  props: SubscribeProps;
}

const sectionsData: (DonateData | SubscribeData)[] = [
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
