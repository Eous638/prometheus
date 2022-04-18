import React, {useContext} from "react";
import ProductCard from "../components/productCard";
import CategoryCard from "../components/categoryCard";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { categoryStoreContext } from "../states/categoryState";
export default function Category() {
  const categoryStore = useContext(categoryStoreContext);
  let params = useParams();
  console.log(categoryStore.category);
 
  return (
    <div style={{ justifyContent: "center" }}>
      <Typography variant="h4" sx={{ paddingTop: 2 }}>
        {params.categoryName}
      </Typography>
      <Grid container spacing={3} sx={{ padding: 5 }}>
      {categoryStore.categories.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{marginLeft: 5}}>
          <CategoryCard
            name={product.title}
            description={product.description}
            image={product.image}
            products={product.product}
            key={product.id}
          />
        </Grid>))}
      </Grid>
    </div>
  );
}
