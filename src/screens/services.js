import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import engraver from "../images/engraver.jpg";
import example from "../images/example.jpg";
export default function Services() {
  return (
    <div>
      <h1>Poručite proizvod po meri</h1>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos eos quia doloremque quisquam dolorum quis dolore dolorem 
        voluptatem, quae, quidem quisquam doloremque.	
      </h4>
      <div style={{ paddingLeft: '25%'}}>
      <Carousel autoPlay width={'60%'}>
        <div >
          <img src={engraver} alt="engraver" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={engraver} alt="engraver" />
        </div>
      </Carousel>  
      </div>   
      <h1>Promotivni proizvodi</h1>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos eos quia doloremque quisquam dolorum quis dolore dolorem 
        voluptatem, quae, quidem quisquam doloremque.	
      </h4>
      <div style={{ paddingLeft: '25%'}}>
      <Carousel autoPlay infiniteLoop width={'60%'}>
        <div >
          <img src={engraver} alt="engraver" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={example} alt="engraver" />
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>  
      </div>
      <h1>Portreti</h1>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos eos quia doloremque quisquam dolorum quis dolore dolorem 
        voluptatem, quae, quidem quisquam doloremque.	
      </h4>
      <div style={{ paddingLeft: '25%'}}>
      <Carousel width={'60%'}>
        <div >
          <img src={engraver} alt="engraver" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={engraver} alt="engraver" />
        </div>
      </Carousel>  
      </div> 
    </div>
  );
}