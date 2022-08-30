import React, {useContext, useState} from "react";
import { TextField } from "@mui/material";
import {Button} from "@mui/material";
import emailjs from '@emailjs/browser';
import { cartStoreContext } from "../states/cartState";

export default function Checkout() {
  const cartStore = useContext(cartStoreContext)

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [num, setNum] = useState()
  const [street, setStreet] = useState()
  const [post, setPost] = useState()
  const [city, setCity] = useState()
  const [comment, setComment] = useState()

  var mail = {
    Name: name,
    Email: email,
    number: num,
    Street: street,
    code: post,
    City: city,
    Comment:comment,
    Product: JSON.stringify(cartStore.products)
  }
  return (
    <div>
      <h1>Kasa</h1>
      <b3>Sve posiljke se dostavljaju postexpressom</b3>
      <br/>
      <b3>Placanje pouzecem</b3>
      <div style={{ marginTop:30, flexDirection:'column', display:'flex', justifyContent:"center", width: "100%", alignItems:"center",}}>
      
      <TextField onChange={(e)=>{setName(e.target.value)}}  label="Ime i prezime" name="name" variant="filled" sx={{width:{xs:'90%', md:'40%', input:{color: 'white'}}, paddingBottom:3}} required/>
      <TextField onChange={(e)=>{setEmail(e.target.value)}} label="Email adresa" name="email" variant="filled" sx={{width:{xs:'90%', md:'40%', input:{color: 'white'}},paddingBottom:3}} required/>
      <TextField onChange={(e)=>{setNum(e.target.value)}} label="Broj telefona" name="phone number" variant="filled" sx={{width:{xs:'90%', md:'40%', input:{color: 'white'}},paddingBottom:3}} required/>
      <TextField onChange={(e)=>{setStreet(e.target.value)}} label="Ulica i broj" name="Street" variant="filled" sx={{width:{xs:'90%', md:'40%', input:{color: 'white'}},paddingBottom:3}} required/>
      <TextField onChange={(e)=>{setPost(e.target.value)}} label="postanski broj" name='post code' variant="filled" sx={{width:{xs:'90%', md:'40%', input:{color: 'white'}},paddingBottom:3}} required/>
      <TextField onChange={(e)=>{setCity(e.target.value)}} label="Grad" name="city" variant="filled" sx={{width:{xs:'90%', md:'40%', input:{color: 'white'}},paddingBottom:3}} required/>
      <TextField onChange={(e)=>{setComment(e.target.value)}} label="komentar" name="comment" multiline variant="filled" rows={10} sx={{width:{xs:'90%', md:'50%', "& .MuiInputBase-root": {
            color: 'white'
        }},paddingBottom:3}}/>
      <Button variant="contained" color="primary" onClick={()=>emailjs.send("service_1hrsyf8","template_fgd9kwj", mail, 'iyYA9yyqFG8PCoyUM')}>Poruci</Button>
    
      </div>
    </div>
  );
}