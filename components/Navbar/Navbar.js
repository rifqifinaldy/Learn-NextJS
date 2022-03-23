import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import VolcanoIcon from '@mui/icons-material/Volcano';
import { Box, Container } from "@mui/material";
import { menus } from "./NavbarData";
import Link from "next/link";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar color="secondary">
          <Container>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="dark"
                aria-label="menu"
                sx={{ mr: 1 }}
              >
                <VolcanoIcon fontSize="large"/>
              </IconButton>
              <Typography color="whitesmoke" variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Pre-Storic
              </Typography>
              {menus.map((menu) => (
                <Link
                  href={menu.target}
                  key={menu.name}
                  sx={{ my: 2, display: "block" }}
                >
                  <Button color="info">{menu.name}</Button>
                </Link>
              ))}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
