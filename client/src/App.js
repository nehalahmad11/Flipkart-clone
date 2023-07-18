
// All Components are here------------>

import { Box } from '@mui/material';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import DetailsView from './components/details/DetailsView';

import DataProvider from './context/DataProvider';


import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header/>
      <Box style={{marginTop:54}}>
        {/* here access details routes  */}
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/product/:id" element={<DetailsView/>}/>
      </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
