import { 
    Card, 
    CardBody, 
    CardFooter,
    ButtonGroup,
    Button,
    Stack,
    Image,
    Text,
    Heading,
    Center
 } from '@chakra-ui/react';

 import BoxPng from "./box.png"

function Product({name, price, image = BoxPng}) {

    return (
    <Card direction={{ base: 'column', sm: 'row' }}>
        <Center size='100px'>
            <Image
            src= {image}
            objectFit='cover'
            maxW={{ base: '100%', sm: '100px' }}
            />
        </Center>
        <Stack>
        <CardBody>
            <Heading size='sm'>{name}</Heading>
            <Text color='blue.600' fontSize='xs'>
                Rp.{price}
            </Text>
        </CardBody>
        <CardFooter>
            <ButtonGroup spacing='1'>
            <Button size='xs' variant='solid' colorScheme='blue'>
                Buy now
            </Button>
            <Button size='xs' variant='ghost' colorScheme='blue'>
                Add to cart
            </Button>
            </ButtonGroup>
        </CardFooter>
        </Stack>
    </Card>
    );
}

export default Product;