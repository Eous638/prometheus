import React from "react";
import { Paper } from "@mui/material";
export default function Basket() {
    return (
        <div>
        <h1 style={{color:'#ba0000'}}>Vasa korpa</h1>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>
        <div style={{ 
             display: 'flex',
             flexDirection: 'column',
            width: '80%',
            backgroundColor: '#131313',
            borderColor: '#8c0b0b',
            borderWidth: '1px',
            borderStyle: 'solid',
            minHeight: '70vh',
            alignItems: 'center',
            marginBottom: '5%',
            
        }}>
            <h1 style={{ color: '#8c0b0b',marginBottom: '5vh',}}>
            proizvodi
            </h1>
            <Paper variant="outlined" elevation={10} sx={{height:110, backgroundColor:'#262626',  buttom:5, marginBottom:5 ,width:"80%" }} >
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    padding: '10px',
                    alignItems: 'start',
                    width: '100%',
                    height: '100%',
                }}>
                    <h3 style={{color:'#fff'}}>
                        ime proizvoda
                    </h3>
                    </div>
                
            </Paper>
           
            </div>
        </div>
        </div>
    );
    }