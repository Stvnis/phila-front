import { Button, Typography } from '@mui/material';
import { Donate } from '@phila-front/sections';

export default function Home() {
  return (
    <main>
      <Typography>
        Homepage
      </Typography>
      <Button variant="contained" color="secondary">
        Next
      </Button>
      <Donate />
    </main>
  );
}
