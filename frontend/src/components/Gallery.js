import style from "./Gallery.module.css";

import {
     Wrap,
     WrapItem,
     Image,
     Stack,
     Heading 
    } from "@chakra-ui/react";

import ImgPng from './videodefault.jpg';

function Gallery() {
    const mainData = [];
    for(let i=0; i<100; i++){
      mainData.push(`data ${i}`);
    }
    return (
    <Stack direction='column'>
    <Heading>Codingpedia Play</Heading>
    <Wrap p={12} spacing='30px' justify='center' bg='gray.100'>
        {mainData.map(
            (data) => (
            <WrapItem>
                <Image objectFit='cover' src={ImgPng} className={style['videoTumbX']} />
            </WrapItem>
            )
        )}
    </Wrap>
    </Stack>
    
    );
}

export default Gallery;