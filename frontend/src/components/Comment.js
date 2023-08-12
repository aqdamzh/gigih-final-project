import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react'

function Comment({user}) {

    return (
        <Box>
            <Heading size='xs' textTransform='uppercase'>
                {user}
            </Heading>
            <Text pt='2' fontSize='sm'>
                See a detailed analysis of all your business clients.
            </Text>
        </Box>
    );
}

export default Comment;