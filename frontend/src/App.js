import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import Detail from './components/Detail';

function App() {

  return (
    <ChakraProvider>
      <Detail />
    </ChakraProvider>
  );
}

export default App;
