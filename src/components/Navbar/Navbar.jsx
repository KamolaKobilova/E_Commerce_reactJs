import React from "react";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from '../Navbar/styles'
import useStyles from '../Navbar/styles'

const Navbar = (totalItem) => {
    const classes = useStyles()
  return (
  <>
    <AppBar position="fixed" className="{classes.appBar}" color="inherit">
     <Toolbar>
        <Typography variant="h6" className="classes.title" color="inherit" >
            <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
        </Typography>
        <div className={classes.grow}/>
        <div className={classes.button}>
           <IconButton aria-label="Show card items" color="inherit">
                <Badge badgeContent={2} color="secondary"></Badge>
                <ShoppingCart/>
           </IconButton>
        </div>
     </Toolbar>
    </AppBar>
  </>
  )
}

export default Navbar