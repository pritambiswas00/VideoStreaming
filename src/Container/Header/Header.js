import * as React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { MenuOpen } from "@material-ui/icons";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <AppBar position="fixed" className={Styles.header}>
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuOpen />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
