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
import React, { Component } from "react";

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
            flexDirection: { xs: "column", sm: "column", lg: "row" },
            alignItems: "center",
          }}
        >
          <Grid p={0.5}>
            <Button
              sx={{ bgcolor: "primary.light" }}
              startIcon={<HomeIcon />}
              size="small"
              variant="contained"
            >
              <Link fontWeight="bold" underline="none" color="#000000" href="/">
                Home
              </Link>
            </Button>
          </Grid>

          <Grid p={0.5}>
            <Button
              sx={{ bgcolor: "primary.light" }}
              startIcon={<LocalCarWashIcon />}
              size="small"
              variant="contained"
            >
              <Link
                fontWeight="bold"
                underline="none"
                color="#000000"
                href="/detailing-prices"
              >
                Detailing Prices
              </Link>
            </Button>
          </Grid>
          <Grid p={0.5}>
            <Button
              sx={{ bgcolor: "primary.light" }}
              startIcon={<CarRepairIcon />}
              size="small"
              variant="contained"
            >
              <Link
                fontWeight="bold"
                underline="none"
                color="#000000"
                href="/additional-services"
              >
                Additional Services
              </Link>
            </Button>
          </Grid>

          <Grid p={0.5}>
            <Button
              sx={{ bgcolor: "primary.light" }}
              startIcon={<AccessTimeIcon />}
              size="small"
              variant="contained"
            >
              <Link
                fontWeight="bold"
                underline="none"
                color="#000000"
                href="/business-hours"
              >
                Business Hours
              </Link>
            </Button>
          </Grid>
          <Grid p={0.5}>
            <Button
              sx={{ bgcolor: "primary.light" }}
              startIcon={<CalendarMonthIcon />}
              size="small"
              variant="contained"
            >
              <Link
                fontWeight="bold"
                underline="none"
                color="#000000"
                href="/schedule-appointment"
              >
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
