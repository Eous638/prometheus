import React, { useState, useEffect } from "react";
import ProductCard from "../components/productCard";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://192.168.0.23:8000/api/supercategories/");
      setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div style={{ justifyContent: "center" }}>
      <Typography variant="h4" sx={{ paddingTop: 2, color: "#ba0000" }}>
        Nasi proizvodi
      </Typography>
      <Grid container spacing={3} sx={{ padding: 5 }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} style={{paddingLeft: 50}}>
        <ProductCard
            name={product.title}
            description={product.description}
            image={product.image}
            categories={product.category}
            key={product.id}
            link={`/proizvodi/${product.title}`}
          />
        </Grid> 
      ))}</Grid>
    </div>
  );
}
