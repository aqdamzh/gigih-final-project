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
    StackDivider
  } from '@chakra-ui/react';
  
import Product from './Product';
import Video from './Video';
import Comment from './Comment';

function Detail() {
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
    >
        {/* video player section */}
        <GridItem pl='2' area={'main'}>
          <Video />
        </GridItem>
        {/* list products section */}
        <GridItem pl='2' area={'product'}  style={{overflow: "auto"}}>
        <HStack spacing='24px'>
          {mainData.map((data) => 
                <box><Product name={data}/></box>
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