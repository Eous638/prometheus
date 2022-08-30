import { Typography } from "@mui/material";
import React, { useEffect, useState, useContext} from "react";
import IconButton from '@mui/material/IconButton';
import {useParams} from 'react-router-dom'
import { Link } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Box } from "@mui/material";
import axios from "axios";
import { cartStoreContext } from "../states/cartState";
export default function Description() {
  let params = useParams()
  const cartStore = useContext(cartStoreContext)
  const [products, setProducts] = useState([]);
  const url = 'http://192.168.0.23:8000/api/products/' + params.productName
  const items = {
      "title": params.productName,
      "price": products.price,
      "image": products.image,
      "ammount" : 1,
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setProducts(result.data);
      console.log(result.data)
    };
    fetchData();
  }, []);
  
    return(
        <div style={{padding:20, marginTop:10}}>
            
            <img src={products.image} alt='example' style={{maxHeight:820, width: '90%',  backgroundColor: '#000', objectFit:'contain', marginTop:0}}/>'
            <Typography variant='h3' >
            {params.productName}
            </Typography>
            <Box sx={{marginBottom:5, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>

            <b1 style={{color:'white', borderStyle:'solid', borderWidth:1, borderColor:'red', padding:15}}>cena: {products.price}rsd</b1>

      <div style={{backgroundColor:'#171717', display:'inline-block', borderRadius:66, marginTop:10, padding:3, marginLeft:10}}>
      <IconButton aria-label="add to shopping cart" size="medium" color='primary' component={Link} onClick={()=> {
  cartStore.products.push(items)}}  to="/korpa" >
        <AddShoppingCartIcon fontSize="large" />
      </IconButton>
      </div>
     </Box>
            <Typography variant='body1'>
              {products.description}
            </Typography>
            </div>
            )
}

/*onClick={()=> {
  cartStoreContext.product += items
}}*/

/* const items = [
    {
      "title": params.productName,
      "price": categoryStore.price,
      "image": categoryStore.image,
  },
  ];
  
  onClick={()=> {
  cartStore.products.push(items);
  
}}*/