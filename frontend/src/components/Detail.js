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
    Box,
    Container,
    useDisclosure
  } from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import useFetch from "../hooks/useFetch";

import Product from './Product';
import Video from './Video';
import Comment from './Comment';
import InputComment from './InputComment';
import { useNavigate } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const { data: videoData, 
    loading: videoLoading, 
    error: videoError } = useFetch(`http://localhost:8080/api/videos/${id}`, {
    method: 'GET'
  });
  const { data: productsData, 
    loading: productsLoading, 
    error: productsError } = useFetch(`http://localhost:8080/api/videos/${id}/products`, {
    method: 'GET'
  });
  const { data: commentsData, 
    loading: commentsLoading, 
    error: commentsError } = useFetch(`http://localhost:8080/api/videos/${id}/comments`, {
    method: 'GET'
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const handleInputComment = (body, videoId) => {
    fetch(`http://localhost:8080/api/videos/${videoId}/comments`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => {
        if(!res.ok){
            throw new Error(`HTTP Status: ${res.status}`);
        }else {
            return res.json();
        }
    }).then(data => {
        if(data.status === 'success'){
            onClose();
            navigate(0);
        }
    });
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
  >
      {/* video player section */}
      <GridItem pl='2' area={'main'}>
        {!videoLoading && <Video src={!videoError? videoData.src: ''}/>}
      </GridItem>
      {/* list products section */}
      <GridItem pl='2' area={'product'}  style={{overflow: "auto"}}>
      <HStack spacing='24px'>
        {!productsLoading && productsData.map((data) => 
              <Box key={data._id}><Product name={data.name} price={data.price}/></Box>
        )}
      </HStack>
      </GridItem>
      {/* list comments section */}
      <GridItem px={10} area={'comment'} style={{overflow: "auto"}}>
      <Card minH='100%'>
          <CardHeader>
              <Heading size='md'>Comments</Heading>
          </CardHeader>
          <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
              {!commentsLoading && commentsData.map((data) => 
                  <Comment key={data._id} user={data.username} content={data.content}/>
              )}
              </Stack>
          </CardBody>
      </Card>
      </GridItem>
      {/* input comment section */}
      <GridItem pt={4} area={'button'}>
      <Center>
      <Button colorScheme='teal' size='lg' onClick={onOpen}>
          Input Comment
      </Button>
      </Center>
      < InputComment videoId={id} handleInput={handleInputComment}
      isOpen={isOpen} onClose={onClose} />
      </GridItem>
      {/* end section */}
  </Grid>
  
  );
}

export default Detail;