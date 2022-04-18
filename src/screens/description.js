import { Typography } from "@mui/material";
import React from "react";
import exampleImage from '../images/example.jpg';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import {useParams} from 'react-router-dom'
import { Link } from "react-router-dom";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Box } from "@mui/material";
export default function Description() {
  let params = useParams()
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return(
        <div style={{padding:20, marginTop:10}}>
            
            <img src={exampleImage} alt='example' style={{maxHeight:820, width: '90%',  backgroundColor: '#000', objectFit:'contain', marginTop:0}}/>'
            <Typography variant='h3' >
            {params.productName}
            </Typography>
            <Box sx={{marginBottom:5, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>

            <FormControl sx={{ m: 1, minWidth: 120, }} color='primary'>

        <InputLabel id="demo-simple-select-helper-label">Velicina</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="velicina"
          onChange={handleChange}
          
        >
          
          <MenuItem value={10} sx={{backgroundColor:'#1f1f1f'}}>Ten</MenuItem>
          <MenuItem value={20} sx={{backgroundColor:'#1f1f1f'}}>Twenty</MenuItem>
          <MenuItem value={30} sx={{backgroundColor:'#1f1f1f'}}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Izaberite velicinu</FormHelperText>
      </FormControl>
      <div style={{backgroundColor:'#171717', display:'inline-block', borderRadius:66, marginTop:10, padding:3, marginLeft:10}}>
      <IconButton aria-label="add to shopping cart" size="medium" color='primary' component={Link} to="/korpa">
        <AddShoppingCartIcon fontSize="large" />
      </IconButton>
      </div>
     </Box>
            <Typography variant='body1'>
                Et laboris sint ipsum amet minim. Magna magna aliquip eu in anim nisi cillum minim cillum enim minim elit laborum dolor. Veniam sunt occaecat reprehenderit consectetur veniam minim commodo reprehenderit aliquip nulla exercitation. Esse voluptate enim tempor deserunt sit sunt eu minim dolor magna ipsum sint. Irure id minim in incididunt cupidatat enim adipisicing ad occaecat irure occaecat. In consequat sint sint laborum.

Nulla exercitation veniam mollit amet. Eu sit quis ex Lorem nulla. Laboris id et adipisicing aliqua et aliquip veniam nisi labore. Do ipsum enim aute ea fugiat aute eu non cupidatat irure culpa ex ullamco deserunt.

Ullamco magna ut culpa velit officia reprehenderit excepteur officia ad velit commodo exercitation ipsum nulla. Cupidatat nulla proident adipisicing dolor irure nulla esse ea. Minim id dolore nostrud consectetur aliquip incididunt sunt nostrud aliquip. Adipisicing pariatur id id aliquip fugiat quis ullamco irure dolore aliquip officia nisi id consectetur. Elit consectetur et irure incididunt duis proident do commodo. Elit ipsum Lorem non eiusmod incididunt ad sint eiusmod laboris elit commodo ex duis. Lorem voluptate cupidatat eu aliqua culpa mollit ut amet proident do aute dolore est laborum.
            </Typography>
            </div>
            )
}