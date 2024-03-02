import React, { FC } from "react";
import Image from "next/image"
interface GalleryImageProps{src:string;alt:string}


export const GalleryImage:FC<GalleryImageProps>=({src, alt})=>{
    return (<Image width="500" height="500" src={src} alt={alt} />)
} 