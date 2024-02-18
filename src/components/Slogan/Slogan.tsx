import { Typography, styled } from "@mui/material";
import React,{FC,ReactNode} from "react";

interface SloganProps{children:ReactNode}

const SloganBox = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    textTransform: 'capitalize'
}))

export const Slogan:FC<SloganProps>=({children})=>{
    return <SloganBox variant="h4">{children}</SloganBox>;
}