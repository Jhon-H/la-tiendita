import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./StyleNav";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBarBackg}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            La Tiendita
          </Typography>
          <Button color="inherit" className={classes.Button}>
            Administracion
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
