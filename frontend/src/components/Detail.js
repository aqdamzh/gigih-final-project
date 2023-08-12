import { 
    Center,
    Grid, 
    GridItem,
    HStack,
    Button,
    Card,
    CardBody,
    CardHeader,
    Heading,
    Stack,
    StackDivider,
    Box
  } from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Product from './Product';
import Video from './Video';
import Comment from './Comment';

async function getVideo(id) {
  const url = 'http://localhost:8080/api/videos/' + id;
  const responseData = await fetch(url , {
    method: 'GET'
  })
  .then(response => {
    if(!response.ok){
      throw new Error(`HTTP Status: ${response.status}`);
    }else {
      return response.json();
    }
  });
  return responseData;
}

function Detail() {
  const [video, setVideo] = useState('');
  const { id } = useParams();
  useEffect(() => {
    getVideo(id)
    .then((data) => {
      setVideo(data.src);
    });
    console.log(id);
  }, []);
  const mainData = [];
  for(let i=0; i<100; i++){
    mainData.push("Main");
  }
  return (
  <Grid
  templateAreas={`"main comment"
                  "product comment"
                  "product button"`}
  gridTemplateRows={'6fr 2fr 1fr'}
  gridTemplateColumns={'3fr 2fr'}
  h='100vh'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
  bg='gray.100'
  >{console.log(video)}
      {/* video player section */}
      <GridItem pl='2' area={'main'}>
        <Video src={video}/>
      </GridItem>
      {/* list products section */}
      <GridItem pl='2' area={'product'}  style={{overflow: "auto"}}>
      <HStack spacing='24px'>
        {mainData.map((data) => 
              <Box><Product name={data}/></Box>
        )}
      </HStack>
      </GridItem>
      {/* list comments section */}
      <GridItem px={10} area={'comment'} style={{overflow: "auto"}}>
      <Card>
          <CardHeader>
              <Heading size='md'>Comments</Heading>
          </CardHeader>
          <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
              {mainData.map((data) => 
                  <Comment user={data}/>
              )}
              </Stack>
          </CardBody>
      </Card>
      </GridItem>
      {/* input comment section */}
      <GridItem pt={4} area={'button'}>
      <Center>
      <Button colorScheme='teal' size='lg'>
          Input Comment
      </Button>
      </Center>
      </GridItem>
      {/* end section */}
  </Grid>
  );
}

export default Detail;