import React, {useState, useContext} from "react"
import { Paper, Button, Grid } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { cartStoreContext } from "../states/cartState";


const CartItem = (props) => {
  const cartStore = useContext(cartStoreContext)
  const [ammount, setAmmount] = useState(1)
  const isName = (element) => element.title == props.title
  const indx = cartStore.products.findIndex(isName)
return(
    <Paper
            variant="outlined"
            elevation={10}
            sx={{
              height: 130,
              backgroundColor: "#262626",
              buttom: 5,
              marginBottom: 5,
              width: "95%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "10px",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src={props.image}
                  alt="example"
                  style={{ width: 100, height: 100}}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingLeft: "20px",
                  }}
                >
                  <b1 style={{ color: "white", fontSize:23, marginTop:20 }}>{props.title}</b1>
                  <Grid container>
                  <Grid item>
                    <Button variant="contained" style={{maxWidth: 27, maxHeight: 27, minWidth: '10px', minHeight: '10px', marginTop:24}} onClick={() => {
                        if (props.ammount>1){
                          cartStore.products[indx].ammount -= 1
                        }
                        
                    }}>-</Button>
                    </Grid>
                    <Grid item>
                    <h4 style={{ color: "white", borderColor:'#828282', borderStyle:'solid', marginLeft:7, marginRight:7, padding:2 }}>{props.ammount} kom</h4>
                    </Grid>
                    <Grid item>
                    <Button color="success" variant="contained" style={{maxWidth: 27, maxHeight: 27, minWidth: '10px', minHeight: '10px', marginTop:24}} onClick={() => {
                        cartStore.products[indx].ammount += 1}}>+</Button>
                    </Grid>
                    </Grid>
                </div>
              </div>
              
              <b1 style={{color:'white', borderStyle:'solid', borderWidth:1, borderColor:'red'}}>cena: {props.price}rsd</b1>
              <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2, ml: 2 }}
            onClick={()=>{
              cartStore.products.splice(indx, 1)
            }}
          >
            <DeleteIcon />
          </IconButton>
            </div>
          </Paper>
)
}


export default CartItem;