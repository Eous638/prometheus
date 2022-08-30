import React, { useEffect, useState} from "react";
import ProductCard from "../components/productCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid, Typography } from "@mui/material";
export default function Category() {
  let params = useParams();
  const [products, setProducts] = useState([]);
  const url = 'http://192.168.0.23:8000/api/supercategories/' + params.categoryName

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setProducts(result.data.category);
      console.log(result.data.category)
    };
    fetchData();
  }, []);
 
  return (
    <div style={{ justifyContent: "center" }}>
      <Typography variant="h4" sx={{ paddingTop: 2 }}>
        {params.categoryName}
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
            link={`/proizvodi/${params.categoryName}/${product.title}`}
          />
        </Grid> 
      ))}
      </Grid>
    </div>
  );
}

/*{products.category.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{marginLeft: 5}}>
          <CategoryCard
            name={product.title}
            description={product.description}
            image={product.image}
            categories={product.category}
            key={product.id}
          />
        </Grid> 
      ))}*/