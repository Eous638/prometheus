import React from "react";
import { TextField } from "@mui/material";
import {Button} from "@mui/material";
export default function Contact() {
  return (
    <div>
      <h1>Kontakt</h1>
      <b3>060 720 5029</b3>
      <br/>
      <b3>kontakt@pirografija.rs</b3>
      <div style={{ marginTop:30, flexDirection:'column', display:'flex', justifyContent:"center", width: "100%", alignItems:"center",}}>
      <h2>Posaljite nam poruku</h2>
      <TextField label="Ime i prezime" variant="filled" sx={{width:{xs:'90%', md:'40%'}, paddingBottom:3}}/>
      <TextField label="Email adresa" variant="filled" sx={{width:{xs:'90%', md:'40%'},paddingBottom:3}}/>
      <TextField label="Broj telefona" variant="filled" sx={{width:{xs:'90%', md:'40%'},paddingBottom:3}}/>
      <TextField label="poruka" multiline variant="filled" rows={10}sx={{width:{xs:'90%', md:'50%'},paddingBottom:3}}/>
      <Button variant="contained" color="primary" >Posalji</Button>
      </div>
    </div>
  );
}