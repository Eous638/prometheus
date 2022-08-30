import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import meni from '../images/meni.jpg'
import portret2 from '../images/portret2.jpg'
import portret from '../images/pyrography girl.jpg'
import portret4 from '../images/portret4.jpg'
import portret3 from '../images/portret3.jpg'
import table from '../images/table.jpg'
import znak from '../images/znak.jpg'
import podmetaci from '../images/podmetaci.jpg'
export default function Services() {
  return (
    <div>
      <h1>Portreti</h1>
      <h4 style={{paddingLeft:'10%', paddingRight:'10%'}}>
        Ako želite da ovekovečite sliku voljene osobe ili ljubimca na unikatan način, samo nam trebate poslati sliku, željene dimenzije i bilo koje druge detalje kao što su posvete, značajni datum i slično.
        Možete čak i odlučiti o obliku portreta kako bi ste dobili potpuno unikatni poklon ili uspomenu. Naš tim će vredno raditi sa vama tako da svi vaši zahtevi budu ispunjeni! 
      </h4>
      <Button variant="contained" component={Link} to="/kontakt">Kontaktirajte nas</Button>
      <div style={{ paddingLeft: '25%', marginTop:15}}>
      <Carousel width={'60%'}>
        <div >
          <img src={portret2} alt="portret" />
        </div>
        <div style={{ maxHeight:20}}>
          <img src={portret} alt="engraver" />
        </div>
        <div style={{ maxHeight:20}}>
          <img src={portret4} alt="engraver" />
        </div>
        <div style={{ maxHeight:20}}>
          <img src={portret3} alt="engraver" />
        </div>
      </Carousel>  
      </div> 
      <h1>Komercijalni proizvodi</h1>
      <h4>
        Radimo i komercijalni materijal za vaše lokale, podmetaci, privesci, graviranje stolova vašim zeljenim logoima, pa cak i unikatni meniji po vašoj zelji. 
      </h4>
      <Button variant="contained" component={Link} to="/kontakt">Kontaktirajte nas</Button>
      <div style={{ paddingLeft: '25%', marginTop:15}}>
      <Carousel  autoPlay width={'60%'} showIndicators={false} showStatus={false} >
        <div >
          <img src={table} alt="engraver" />
          
        </div>
        <div style={{ maxHeight:20}}>
          <img src={znak} alt="engraver" />
        </div>
        <div style={{ maxHeight:20}}>
          <img src={meni} alt="engraver" />
        </div>
        <div style={{ maxHeight:20}}>
          <img src={podmetaci } alt="engraver" />
        </div>
      </Carousel>  
      </div>   
      
      
    </div>
  );
}