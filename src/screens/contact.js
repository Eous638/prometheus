import React, {useState} from "react";
import { TextField } from "@mui/material";
import {Button} from "@mui/material";
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [num, setNum] = useState()
  const [message, setMessage] = useState()

  var mail = {
    Name: name,
    Email: email,
    Num: num,
    message: message
  }
  return (
    <div>
      <h1>Kontakt</h1>
      <b3>060 720 5029</b3>
      <br/>
      <b3>kontakt@pirografija.rs</b3>
      <div style={{ marginTop:30, flexDirection:'column', display:'flex', justifyContent:"center", width: "100%", alignItems:"center",}}>
      <h2>Posaljite nam poruku</h2>
      <TextField onChange={(e)=>{setName(e.target.value)}} label="Ime i prezime" name="name" variant="filled" sx={{width:{xs:'90%', md:'40%', input:{color: 'white'}}, paddingBottom:3}} required/>
      <TextField onChange={(e)=>{setEmail(e.target.value)}}  label="Email adresa" name="email" variant="filled" sx={{width:{xs:'90%', md:'40%', input:{color: 'white'}},paddingBottom:3}} required/>
      <TextField onChange={(e)=>{setNum(e.target.value)}} label="Broj telefona" name='phone number'variant="filled" sx={{width:{xs:'90%', md:'40%', input:{color: 'white'}},paddingBottom:3}} />
      <TextField onChange={(e)=>{setMessage(e.target.value)}} label="poruka" multiline variant="filled" rows={10}sx={{width:{xs:'90%', md:'50%', "& .MuiInputBase-root": {
            color: 'white'
        }},paddingBottom:3, }} required/>
      <Button variant="contained" color="primary" onClick={()=>emailjs.send("service_1hrsyf8","template_84ex08q", mail, 'iyYA9yyqFG8PCoyUM')}>Posalji</Button>
      </div>
    </div>
  );
}