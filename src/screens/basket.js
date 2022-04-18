import React from "react";
import { Paper } from "@mui/material";
export default function Basket() {
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
            width: "80%",
            backgroundColor: "#131313",
            borderColor: "#8c0b0b",
            borderWidth: "1px",
            borderStyle: "solid",
            minHeight: "70vh",
            alignItems: "center",
            marginBottom: "5%",
          }}
        >
          <h1 style={{ color: "#8c0b0b", marginBottom: "5vh" }}>proizvodi</h1>
          <Paper
            variant="outlined"
            elevation={10}
            sx={{
              height: 130,
              backgroundColor: "#262626",
              buttom: 5,
              marginBottom: 5,
              width: "80%",
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
                  src={"https://picsum.photos/200/300"}
                  alt="example"
                  style={{ width: "100px", height: "100px" }}
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
                  <b1 style={{ color: "white", fontSize:23, marginTop:20 }}>irvas podmetac</b1>
                  <b2 style={{ color: "white" }}>velicina: 230x256</b2>
                    <h4 style={{ color: "white", borderColor:'#828282', borderStyle:'solid', marginRight: 5, padding:3 }}>5kom</h4>
                </div>
              </div>
              <b1 style={{color:'white'}}>cena: 1450rsd</b1>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}
