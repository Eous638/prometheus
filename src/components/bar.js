import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function ButtonAppBar() {

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const toolbarStyle = {
    minHeight: '5vh',
    justifyContent: 'space-between'
  };
const drawerClosed = () =>
{setAnchorEl2(false);}

const drawerOpen = () =>
{setAnchorEl2(true);}
  return (
      <AppBar position="sticky">
        <Toolbar style={toolbarStyle}>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={drawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <MuiDrawer
            variant='temporary'
            open={anchorEl2}
            onClose={drawerClosed}
            anchor='left'
            
            sx={{
              width: '20%',
              flexShrink: 0,
              color: 'primary',
              background: '#8c0b0b',
              '& .MuiDrawer-paper': {
                width: '20%',
                minWidth: '200px',
                background: '#8c0b0b',
              },
            }}
          >
            <List>
              <ListItem button component={Link} to="/proizvodi" onClick={drawerClosed}>
                <Typography variant="h6">
                  Proizvodi
                </Typography>
              </ListItem>
              <Divider />
              <ListItem button component={Link} to="/usluge" onClick={drawerClosed}>
                <Typography variant="h6" color="white">
                  Narudzbine
                </Typography>
              </ListItem>
              <Divider />
              <ListItem button component={Link} to="/kontakt" onClick={drawerClosed}>
                <Typography variant="h6">
                  Kontakt
                </Typography>
              </ListItem>
              <Divider />
             
            </List>
            
          </MuiDrawer>
          <Link to="/">
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, padding: 2 }}>
            Prometej
          </Typography>
          </Link>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    
  );
}
