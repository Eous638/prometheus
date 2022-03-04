import React from "react";
import ProductCard from "../components/productCard";
import { Grid, Typography } from "@mui/material";
export default function Products() {
    return (
        <div style={{justifyContent:'center'}}>
            <Typography variant="h4" sx={{paddingTop: 2}} >
                Nasi proizvodi
            </Typography>
            <Grid container spacing={3} sx={{padding:5}}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard />
                </Grid>
                
            </Grid>
            
        </div>
    );
}