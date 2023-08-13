import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react'

function Comment({user, content}) {

    return (
        <Box>
            <Heading size='xs' textTransform='uppercase'>
                {user}
            </Heading>
            <Text pt='2' fontSize='sm'>
                {content}
            </Text>
        </Box>
    );
}

export default Comment;