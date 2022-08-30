import React from 'react';
import home from '../images/home.jpg';
import { Typography, Button } from '@mui/material';
import piro2 from '../images/piro2.jpg'
import portrait from '../images/portrait.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='container'>
            <img src={home} alt="home" className='homeImage'/>
            <h1 className="centeredText">Dobrodošli u Pirograf</h1>
            <div className="padded-container">
            
          

          <Typography paragraph variant="h4" component="div" sx={{ flexGrow: 1, paddingTop: 5 }}>
            Naša ponuda
            </Typography>
            
            <Typography variant="body1" component="div" sx={{ flexGrow: 1, paddingTop: 2, paddingBottom: 1 }}>
                U Prometej katalogu imate sirok spektar proizvoda i motiva. Od funkcionalnih proizvoda kao sto su daske za secenje i  podmetaci, pa do dekorativnih slika koje bi ste bili ponosni da okacite na zid. U nasem katalogu imamo motiv za svakoga! Ako ste ljubitelj marvel filmova, pogledajte nesto iz nase kolekcije filmova i serija. Ako ste ljubitelj prirode, retro scena ili cak i animea, na pravom ste mestu. U slucaju da volite prirodne materijale, pogledajte nas asortiman nakita i privezaka!           
          </Typography>
          <Button variant="contained" component={Link} to="/proizvodi">Pogledaj proizvode</Button>
          <img src={portrait} alt="engraver" className='banner'/>
          

          <Typography paragraph variant="h4" component="div" sx={{ flexGrow: 1, paddingTop: 5 }}>
                Radovi po narudzbini
            </Typography>
            <Typography variant="body1" component="div" sx={{ flexGrow: 1, paddingTop: 2 }}>
                Nikakav problem! Ponosimo se brzom i fleksibilnom uslugom. Ako posedujete biznis i zelite unikatni promotivni materijal, imate kafic i trebaju vam kreativni podmetaci, zelite innovativni poklon, ili samo zelite vecno urezati portret voljene osobe u drvo. Kontaktirajte nas i osiguracemo da dobijete svoj proizvod u sto kracem roku!            
          </Typography>
          <Button variant="contained" component={Link} to='usluge'>Naruči</Button>
          <img src={piro2} alt="engraver" className='banner'/>
          

          </div>
        </div>
    );
}