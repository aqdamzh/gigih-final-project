import style from "./Gallery.module.css";
import { useState, useEffect } from "react";
import {
     Wrap,
     WrapItem,
     Image,
     Stack,
     Heading 
    } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

async function getAllVideos() {
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
    const {data, loading, error} = useFetch('http://localhost:8080/api/videos', {
        method: 'GET'
    });
    const navigate = useNavigate();
    const handleDetail = (id) => {
        navigate(`/video/${id}`);
    }
    return (
    <Stack direction='column'>
    <Heading>Codingpedia Play</Heading>
    <Wrap p={12} spacing='30px' justify='center' bg='gray.100'>
        {!loading && data.map(
            (data) => (
            <WrapItem key={data._id}>
                <Image objectFit='cover' 
                src={data.thumbnail} 
                className={style['videoTumbX']} 
                onClick={() => handleDetail(data._id)} />
            </WrapItem>
            )
        )}
    </Wrap>
    </Stack>
    
    );
}

export default Gallery;