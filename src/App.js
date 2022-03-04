import './App.css';
import Home from './screens/home';
import Products from './screens/products';
import Services from './screens/services';
import Contact from './screens/contact';
import Description from './screens/description';
import ButtonAppBar from './components/bar';
import { Paper } from '@mui/material';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proizvodi" element={<Products/>} />
        <Route path="/usluge" element={<Services/>} />
        <Route path="/kontakt" element={<Contact/>} />
        <Route path="/proizvod" element={<Description/>} />
      </Routes>
      <Paper variant="outlined" elevation={2} sx={{height:80, backgroundColor:'#171717', marginTop: 10, buttom:0, }}  />

    </div>
  );
}

export default App;
