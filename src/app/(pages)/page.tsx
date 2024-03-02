import { Button, Typography } from '@mui/material';
import { Donate, DonateProps } from '@phila-front/sections';

const sectionMap = {
  donate: Donate,
}

interface DonateData {
  type: 'donate',
  props: DonateProps
}

const sectionsData: DonateData[] = [
  {
    type:"donate",
    props: {
      title:"Волонтерство та допомога123",
      slogan:"НАБЛИЖАЙ ПЕРЕМОГУ",
      text:"Почни змінювати себе в кращу сторону разом з християнською церквою “Філадельфія” змінювати себе в кращу сторону разом з християнською церквою “Філадельфія” змінювати себе в кращу сторону разом з християнською церквою “Філадельфія” Приєднуйся до нас та наближай перемогу!",
      button:{
        title:"Допомогти",
        link:"#",
      },
      images:['https://www.reconnectwithnature.org/getmedia/bbf87a4f-2bb7-48ca-b948-8ebff37dc835/Great-horned-owl-Shutterstock_1.jpg?width=1500&height=1084&ext=.jpg'],
    }
  },
  {
    type:"donate",
    props: {
      title:"Волонтерство та допомога123",
      slogan:"НАБЛИЖАЙ ПЕРЕМОГУ",
      text:"Почни змінювати себе в кращу сторону разом з християнською церквою “Філадельфія” змінювати себе в кращу сторону разом з християнською церквою “Філадельфія” змінювати себе в кращу сторону разом з християнською церквою “Філадельфія” Приєднуйся до нас та наближай перемогу!",
      button:{
        title:"Допомогти",
        link:"#",
      },
      images:['https://www.reconnectwithnature.org/getmedia/bbf87a4f-2bb7-48ca-b948-8ebff37dc835/Great-horned-owl-Shutterstock_1.jpg?width=1500&height=1084&ext=.jpg'],
    }
  },
  {
    type:"donate",
    props: {
      title:"Волонтерство та допомога123",
      slogan:"НАБЛИЖАЙ ПЕРЕМОГУ",
      text:"Почни змінювати себе в кращу сторону разом з християнською церквою “Філадельфія” змінювати себе в кращу сторону разом з християнською церквою “Філадельфія” змінювати себе в кращу сторону разом з християнською церквою “Філадельфія” Приєднуйся до нас та наближай перемогу!",
      button:{
        title:"Допомогти",
        link:"#",
      },
      images:['https://www.reconnectwithnature.org/getmedia/bbf87a4f-2bb7-48ca-b948-8ebff37dc835/Great-horned-owl-Shutterstock_1.jpg?width=1500&height=1084&ext=.jpg'],
    }
  }
]

export default function Home() {
  return (
    <main>
      <Typography>
        Homepage
      </Typography>
      <Button variant="contained" color="secondary">
        Next
      </Button>
      {sectionsData.map(({ type, props }, index)=> {
        const Component = sectionMap[type];
        return <Component key={index} {...props} />
      })}
    </main>
  );
}
