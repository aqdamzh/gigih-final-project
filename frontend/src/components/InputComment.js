import { useRef, useState } from "react";
import { 
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Input,
    FormControl,
    FormLabel
 } from "@chakra-ui/react";

function InputComment({ videoId, isOpen, onClose, handleInput }) {
    const btnRef = useRef();

    const [form, setForm] = useState({
        username: '',
        comment: ''
    });

    const handleText = e => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }
  
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size='md'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Input your Comment</DrawerHeader>
  
            <DrawerBody>
                <FormControl isRequired={true}>
                    <FormLabel>username</FormLabel>
                    <Input name='username' value={form.username} onChange={handleText} 
                    placeholder='Type here...' />
                </FormControl>
                <FormControl isRequired={true}>
                    <FormLabel>comment</FormLabel>
                    <Input name='comment' value={form.comment} onChange={handleText}
                    placeholder='Type here...' />
                </FormControl>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue' 
              onClick={() => handleInput(
                {username: form.username, content: form.comment}, videoId
                )}>Input</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default InputComment;