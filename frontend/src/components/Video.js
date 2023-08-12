import { AspectRatio, Box } from "@chakra-ui/react";

function Video({src = 'https://www.youtube.com/embed/QhBnZ6NPOY0'}) {

    return (
        <Box  py={4} px={16} color='white' >
        <AspectRatio maxH='460px' maxW='730px' ratio={1}>
        <iframe
            title='naruto'
            src={src}
            allowFullScreen
        />
        </AspectRatio>
        </Box>

    );
}

export default Video;