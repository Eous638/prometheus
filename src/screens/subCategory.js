import React, { useEffect, useState} from "react";
import ProductCard from "../components/productCard";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
export default function SubCategory() {
  let params = useParams();
  const [products, setProducts] = useState([]);
  const url = 'http://192.168.0.23:8000/api/categories/' + params.subCategoryName

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setProducts(result.data.product);
      console.log(result.data)
    };
    fetchData();
  }, []);
 
  return (
    <div style={{ justifyContent: "center", alignItems: "center" }}>
      <Typography variant="h4" sx={{ paddingTop: 2 }}>
        {params.subCategoryName}
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
            link={`/proizvodi/${params.categoryName}/${params.subCategoryName}/${product.title}`}
          />
        </Grid> 
      ))}
      </Grid>
    </div>
  );
}
