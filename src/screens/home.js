import React from 'react';
import home from '../images/home.jpg';
import { Typography, Button } from '@mui/material';
import engraver from '../images/engraver.jpg';
import example from '../images/example.jpg';
import portrait from '../images/portrait.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='container'>
            <img src={home} alt="home" className='homeImage'/>
            <h1 className="centeredText">Welcome to Prometej</h1>
            <div className="padded-container">
            <Typography paragraph variant="h4" component="div" sx={{ flexGrow: 1, paddingTop: 5 }}>
                Ko smo mi?
            </Typography>
            
            <Typography variant="body1" component="div" sx={{ flexGrow: 1, paddingTop: 2, paddingBottom:2  }}>
        Id et Lorem quis adipisicing id qui excepteur aliqua amet deserunt amet nostrud consequat. Aliquip irure amet culpa eu ea sunt deserunt esse duis enim reprehenderit nostrud aliquip sunt. Duis commodo veniam pariatur adipisicing cupidatat aliqua fugiat do fugiat voluptate. Sint mollit sunt ipsum nostrud aute ex.

            
          </Typography>
          <Button variant="contained" component={Link} to="/proizvodi">Pogledaj proizvode</Button>
          <img src={engraver} alt="engraver" className='banner'/>
          

          <Typography paragraph variant="h4" component="div" sx={{ flexGrow: 1, paddingTop: 5 }}>
                Think of it some other time
            </Typography>
            
            <Typography variant="body1" component="div" sx={{ flexGrow: 1, paddingTop: 2 }}>
            In cillum pariatur occaecat elit excepteur. Eu occaecat anim qui esse sit in. Magna aliqua labore mollit quis ullamco pariatur dolor veniam sit magna tempor do eu laborum. Aute consequat reprehenderit non non elit non nisi commodo ex. Excepteur est aute fugiat magna cupidatat.

Aute cupidatat velit voluptate reprehenderit ad. Commodo elit eu consectetur occaecat labore nisi. Nostrud culpa dolore in laboris nisi nulla. Amet fugiat sunt magna dolore labore. Sunt enim exercitation cupidatat exercitation cupidatat consectetur ex irure sunt ad aliquip. Laborum proident sint consectetur nisi consectetur eiusmod qui dolor minim nisi aliquip elit laboris anim. Velit aliquip Lorem sint veniam.

Sit ad laboris aliquip labore dolor incididunt dolore ut eiusmod ex nulla esse. Tempor magna officia qui pariatur sint id fugiat adipisicing ipsum aliqua aliqua deserunt tempor ad. Ut enim consequat consectetur deserunt incididunt tempor occaecat laborum do pariatur. Ut aute do cupidatat sunt ea laboris id adipisicing culpa est deserunt tempor.
            
          </Typography>
          <Button variant="contained">Contained</Button>
          <img src={portrait} alt="engraver" className='banner'/>
          

          <Typography paragraph variant="h4" component="div" sx={{ flexGrow: 1, paddingTop: 5 }}>
                Not today mate
            </Typography>
            <Typography variant="body1" component="div" sx={{ flexGrow: 1, paddingTop: 2 }}>
            Amet esse Lorem irure nulla commodo laborum minim officia do qui. Magna ad eiusmod et irure officia eiusmod voluptate. Aliquip minim duis sunt in. Sint ea dolor culpa ad deserunt ut est sunt.

Quis quis labore officia amet minim id anim minim cillum. Sint non mollit aute occaecat amet elit eiusmod ullamco officia officia. Fugiat incididunt ad esse qui amet amet ex ex minim et. Consectetur id ut veniam fugiat consectetur voluptate mollit exercitation.

Labore consequat minim exercitation amet consequat sunt. Est Lorem quis sunt aliquip eu dolore aute reprehenderit amet cillum fugiat ipsum. Veniam enim ex nostrud officia aliqua commodo est officia. Consectetur fugiat veniam aliquip exercitation nulla consequat ipsum labore culpa. Incididunt culpa quis et consequat reprehenderit culpa id ut magna id.
            
          </Typography>
          <Button variant="contained">Contained</Button>
          <img src={example} alt="engraver" className='banner'/>
          

          </div>
        </div>
    );
}