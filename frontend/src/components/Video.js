import { AspectRatio, Box } from "@chakra-ui/react";

function Video() {

    return (
        <Box  py={4} px={16} color='white' >
        <AspectRatio maxH='460px' maxW='730px' ratio={1}>
        <iframe
            title='naruto'
            src='https://www.youtube.com/embed/QhBnZ6NPOY0'
            allowFullScreen
        />
        </AspectRatio>
        </Box>

    );
}

export default Video;