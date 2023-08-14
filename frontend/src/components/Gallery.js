import style from "./Gallery.module.css";
import {
     Wrap,
     WrapItem,
     Image,
     Stack,
     Heading 
    } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";


function Gallery() {
    const {data, loading, error} = useFetch('/api/videos', {
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