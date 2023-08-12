import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    Divider,
    ButtonGroup,
    Button,
    Stack,
    Image,
    Text,
    Heading
 } from '@chakra-ui/react'

function Product({name}) {

    return (
    <Card maxW='sm'>
        <CardBody>

            <Stack mt='6' spacing='3'>
            <Heading size='md'>{name}</Heading>

            <Text color='blue.600' fontSize='2xl'>
                Rp.450
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
                Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
                Add to cart
            </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
    );
}

export default Product;