import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import Detail from './components/Detail';
import Gallery from './components/Gallery';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <ChakraProvider>
      <Routes>
      <Route path='/' element={<Gallery />} />
      <Route path='/video' element={<Detail />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
