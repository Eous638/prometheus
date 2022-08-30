import react, { useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345, backgroundColor: "#1f1f1f" }}>
        <CardMedia
          component="img"
          height="240"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              component={Link}
              to={props.link}
              key={props.name}
            >
              Vise
            </Button>
          </CardActions>
        </Box>
      </Card>
    </div>
  );
};

export default ProductCard;
