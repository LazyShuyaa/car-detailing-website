// *****************************************************************************
// This component displays the Contact info section and links
// Goes to ==> App.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import FollowUs from "../components/FollowUs";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#c2c2c2" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicTable() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid color="#475762" mt={5} id="contact"></Grid>
      <Grid mt={5}></Grid>
      <Divider>
        <Paper
          sx={{
            p: ".2rem",
            pr: "1.3rem",
            pl: "1.3rem",
            borderRadius: "65px",
            bgcolor: "primary.main",
            margin: "auto",
            display: "flex",
          }}
          elevation={3}
        >
          <Typography
            sx={{
              fontWeight: "400",
              display: { xs: "none", sm: "none", md: "flex" },
            }}
            variant="h2"
          >
            Contact Info
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              display: { xs: "none", sm: "flex", md: "none", xl: "none" },
            }}
            variant="h4"
          >
            Contact Info
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              display: { xs: "flex", sm: "none", md: "none" },
              fontSize: { xs: "2rem" },
            }}
            variant="h6"
          >
            Contact Info
          </Typography>
        </Paper>
      </Divider>
      <br />
      {/*//=========== GRID BOX START =================================> */}

      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={11} sm={10} md={10} lg={6} xl={5}>
          <Item
            elevation={4}
            sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
          >
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                bgcolor: "primary.light",
              }}
            >
              <Paper sx={{ bgcolor: "secondary.dark" }} elevation={4}>
                <Paper sx={{ bgcolor: "primary.light" }}>
                  <Divider variant="middle">
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: "1rem", md: "1.5rem" },
                        fontWeight: 700,
                      }}
                    >
                      Call To Make An Appointment
                    </Typography>
                  </Divider>
                </Paper>
                <Divider variant="middle">
                  <Typography pt={2} variant="h5" sx={{ fontWeight: "500" }}>
                    Business Address:
                  </Typography>
                </Divider>
                <Typography variant="h6">43 Dallas Nebo Rd</Typography>
                <Typography variant="h6">Dallas, GA 30157</Typography>
                <Button
                  color="info"
                  href="https://goo.gl/maps/6q4FmJJ5FE8rK8f87"
                  startIcon={<LocationOnIcon />}
                  variant="contained"
                >
                  Directions
                </Button>
                <br />
                <Divider variant="middle">
                  <Typography pt={2} variant="h6">
                    Call Anytime
                  </Typography>
                </Divider>
                <Typography variant="h6">678-558-4991</Typography>
                <Button
                  color="info"
                  href="tel:678-558-4991"
                  startIcon={<CallIcon />}
                  variant="contained"
                >
                  Call Now!
                </Button>
                <br />
                <br />
                <Paper sx={{ bgcolor: "primary.light", color: "white" }}>
                  <Divider variant="middle">.</Divider>
                </Paper>
              </Paper>
            </Grid>
          </Item>
        </Grid>
        {/*//=============== GRID END GOES TO BOTTOM  =====================> */}
      </Grid>
      <br />
      <FollowUs />
      <br />
    </Box>
  );
}
