import { Container, Grid } from "@mui/material";

export const Donate=()=>{
    return (
        <Container>
            <Grid container>
                <Grid item xs={6}>Left</Grid>
                <Grid item xs={6}>Right</Grid>
            </Grid>
        </Container>
    );
}