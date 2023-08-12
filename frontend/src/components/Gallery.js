import style from "./Gallery.module.css";
import { useState, useEffect } from "react";
import {
     Wrap,
     WrapItem,
     Image,
     Stack,
     Heading 
    } from "@chakra-ui/react";

import ImgPng from './videodefault.jpg';
import { useNavigate } from "react-router-dom";

const getAllVideos = async () => {
    const url = 'http://localhost:8080/api/videos';
    const responseData = await fetch(url, {
        method: 'GET'
    })
    .then( response => {
        if(!response.ok){
            throw new Error('HTTP status ' + response.status);
        }else {
            return response.json();
        }
    });
    return responseData;
}

function Gallery() {

    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();
    const mainData = [];

    for(let i=0; i<100; i++){
      mainData.push(`data ${i}`);
    }
    const handleDetail = () => {
        navigate('/video');
    }
    useEffect(() => {
        getAllVideos()
        .then(data => {
            setVideos(data);
        });
    }, []);
    return (
    <Stack direction='column'>
    {console.log(videos)}
    <Heading>Codingpedia Play</Heading>
    <Wrap p={12} spacing='30px' justify='center' bg='gray.100'>
        {mainData.map(
            (data) => (
            <WrapItem>
                <Image objectFit='cover' 
                src={ImgPng} 
                className={style['videoTumbX']} 
                onClick={handleDetail} />
            </WrapItem>
            )
        )}
    </Wrap>
    </Stack>
    
    );
}

export default Gallery;