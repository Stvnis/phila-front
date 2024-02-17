import { Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export const Donate = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <Typography>НАБЛИЖАЙ ПЕРЕМОГУ</Typography>
          <Typography>Волонтерство та допомога</Typography>
          <Typography>Почни змінювати себе в кращу сторону разом з християнською церквою “Філадельфія” змінювати себе в
            кращу сторону разом з християнською церквою “Філадельфія” змінювати себе в кращу сторону разом з
            християнською церквою “Філадельфія” Приєднуйся до нас та наближай перемогу!</Typography>
          <Button variant="contained">Допомогти</Button>
        </Grid>
        <Grid item xs={6}>
          <Image width="500" height="500" alt="preview"
                 src="https://www.reconnectwithnature.org/getmedia/bbf87a4f-2bb7-48ca-b948-8ebff37dc835/Great-horned-owl-Shutterstock_1.jpg?width=1500&height=1084&ext=.jpg" />
        </Grid>
      </Grid>
    </Container>
  );
};