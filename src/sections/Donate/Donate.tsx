import { FC } from 'react';
import { Button, Container, Grid, Typography } from "@mui/material";
import { GalleryImage, Slogan } from "@phila-front/components";

export interface DonateProps {
    title: string,
    slogan: string,
    text: string,
    button: { 
        title: string,
        link: string
    },
    images: string[],
}

export const Donate: FC<DonateProps>=({title,slogan,text,button})=>{
    return (
        <Container>
            <Grid container>
                <Grid item xs={6}>
                    <Slogan>{slogan}</Slogan>
                    <Typography>{title}</Typography>
                    <Typography>{text}</Typography>
                    <Button variant="contained">{button.title}</Button>
                </Grid>
                <Grid item xs={6}>
                    <GalleryImage src="https://www.reconnectwithnature.org/getmedia/bbf87a4f-2bb7-48ca-b948-8ebff37dc835/Great-horned-owl-Shutterstock_1.jpg?width=1500&height=1084&ext=.jpg" alt="preview"/>
                
                </Grid>
            </Grid>
        </Container>
    );
}