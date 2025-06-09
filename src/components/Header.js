// *****************************************************************************
// This component displays the Header section and links
// Goes to ==> App.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import HomeIcon from "@mui/icons-material/Home";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

const pages = [
  <Link
    sx={{
      pr: { xs: "initial", md: ".6rem" },
      pl: { xs: "initial", md: ".6rem" },
    }}
    color="#000000"
    underline="none"
    href="/"
  >
    <HomeIcon
      sx={{
        display: "inline-flex",
        verticalAlign: "text-bottom",
        textAlign: "center",
        fontSize: "medium",
        pr: { xs: ".5rem", md: "initial" },
      }}
    />
    Home
  </Link>,
  <Link
    sx={{
      pr: { xs: "initial", md: ".4rem" },
      pl: { xs: "initial", md: ".4rem" },
    }}
    color="#000000"
    underline="none"
    href="/detailing-prices"
  >
    <LocalCarWashIcon
      sx={{
        display: "inline-flex",
        verticalAlign: "text-bottom",
        textAlign: "center",
        fontSize: "medium",
        pr: { xs: ".5rem", md: "initial" },
      }}
    />
    Detailing
  </Link>,
  <Link
    sx={{
      pr: { xs: "initial", md: ".4rem" },
      pl: { xs: "initial", md: ".4rem" },
    }}
    color="#000000"
    underline="none"
    href="/additional-services"
  >
    <CarRepairIcon
      sx={{
        display: "inline-flex",
        verticalAlign: "text-bottom",
        textAlign: "center",
        fontSize: "medium",
        pr: { xs: ".5rem", md: "initial" },
      }}
    />
    Services
  </Link>,
  <Link
    sx={{
      pr: { xs: "initial", md: ".4rem" },
      pl: { xs: "initial", md: ".4rem" },
    }}
    color="#000000"
    underline="none"
    href="/business-hours"
  >
    <AccessTimeIcon
      sx={{
        display: "inline-flex",
        verticalAlign: "text-bottom",
        textAlign: "center",
        fontSize: "medium",
        pr: { xs: ".5rem", md: "initial" },
      }}
    />
    Hours
  </Link>,
  <Link color="#000000" underline="none" href="/schedule-appointment">
    <CalendarMonthIcon
      sx={{
        display: "inline-flex",
        verticalAlign: "text-bottom",
        textAlign: "center",
        fontSize: "medium",
        pr: { xs: ".5rem", md: "initial" },
      }}
    />
    Appointments
  </Link>,
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container
        sx={{
          justifyContent: { xs: "space-evenly", lg: "space-around" },
        }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-start",
              color: "inherit",
              textDecoration: "none",
              textAlign: "bottom",
              fontWeight: 700,
              fontSize: "1.25rem",
              textTransform: "uppercase",
              letterSpacing: ".1rem",
            }}
          >
            {/* Desktop View */}
            Shree Car Bike and Car Coating
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ color: "black" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "1rem",
              textTransform: "uppercase",
            }}
          >
            {/* Mobile View */}
            Shree Car Bike and Car Coating
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                size="small"
                variant="contained"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  bgcolor: "primary.main",
                  display: "flex",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
