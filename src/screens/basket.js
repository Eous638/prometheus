import React, {useContext} from "react";
import CartItem from "../components/cartItem";
import { cartStoreContext } from "../states/cartState";
import { observer } from "mobx-react-lite";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Basket =observer(() =>{
  const cartStore = useContext(cartStoreContext)
  return (
    <div>
      <h1 style={{ color: "#ba0000" }}>Vasa korpa</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            
            backgroundColor: "#131313",
            borderColor: "#8c0b0b",
            borderWidth: "1px",
            borderStyle: "solid",
            minHeight: "80vh",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <h1 style={{ color: "#8c0b0b", marginBottom: "5vh" }}>proizvodi</h1>
          {cartStore.products.map((product) => (
          <CartItem
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            ammount={product.ammount}
          />
      ))}
        </div>
      </div>
      <Button color="success" variant="contained" component={Link} to="/kasa">Nastavi na kasu</Button>
    </div>
  );
})

export default Basket