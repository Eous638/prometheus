import './App.css';
import Home from './screens/home';
import Products from './screens/products';
import Services from './screens/services';
import Contact from './screens/contact';
import Description from './screens/description';
import ButtonAppBar from './components/bar';
import Category from './screens/category';
import SubCategory from './screens/subCategory';
import Basket from './screens/basket';
import Checkout from './screens/checkout'
import { Paper } from '@mui/material';
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proizvodi" element={<Outlet/>} >
        <Route path='' element={<Products/>}/>
          <Route path=':categoryName' element={<Outlet/>}>
          <Route path='' element={<Category/>}/>
          <Route path=':subCategoryName' element={<Outlet/>}>
          <Route path='' element={<SubCategory/>}/>
          <Route path=':productName' element={<Description/>}/>
          </Route>
          </Route>
          </Route>
        <Route path="/usluge" element={<Services/>} />
        <Route path="/kontakt" element={<Contact/>} />
        <Route path="/proizvod" element={<Description/>} />
        <Route path="/korpa" element={<Basket/>} />
        <Route path='/kasa' element={<Checkout/>}/>
      </Routes>
      <Paper variant="outlined" elevation={2} sx={{height:80, backgroundColor:'#171717', marginTop: 10, buttom:0, }}  />

    </div>
  );
}

export default App;
