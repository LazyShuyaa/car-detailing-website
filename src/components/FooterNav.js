// *****************************************************************************
// This component displays the Fine Print section
// Imported to App.js Component ==>
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
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { Component } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class Footer extends Component {
  render() {
    return (
      <Box
        sx={{ flexGrow: 0, display: "flex", flexDirection: "column" }}
        container
        spacing={2}
        alignItems="center"
        pb={1}
      >
        <Grid
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Grid p={0.5}>
            <Button startIcon={<HomeIcon />} size="small" variant="contained">
              <Link fontWeight="bold" underline="none" color="#000000" href="/">
                Home
              </Link>
            </Button>
          </Grid>

          <Grid p={0.5}>
            <Button
              startIcon={<LocalCarWashIcon />}
              size="small"
              variant="contained"
            >
              <Link fontWeight="bold" underline="none" color="#000000" href="/">
                Detailing Prices
              </Link>
            </Button>
          </Grid>
          <Grid p={0.5}>
            <Button
              startIcon={<CarRepairIcon />}
              size="small"
              variant="contained"
            >
              <Link fontWeight="bold" underline="none" color="#000000" href="/">
                Additional Services
              </Link>
            </Button>
          </Grid>

          <Grid p={0.5}>
            <Button
              startIcon={<AccessTimeIcon />}
              size="small"
              variant="contained"
            >
              <Link fontWeight="bold" underline="none" color="#000000" href="/">
                Business Hours
              </Link>
            </Button>
          </Grid>
          <Grid p={0.5}>
            <Button
              startIcon={<CalendarMonthIcon />}
              size="small"
              variant="contained"
            >
              <Link fontWeight="bold" underline="none" color="#000000" href="/">
                Schedule Appointment
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
export default Footer;
