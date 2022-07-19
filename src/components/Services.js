// *****************************************************************************
// This component displays the Additional Service Price section
// Goes to ==> App.js Component
// *****************************************************************************

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#c2c2c2" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicTable() {
  return (
    <Box id="services" sx={{ flexGrow: 1 }}>
      <Grid color="#8aa3b4;" mt={5} id="service">
        .
      </Grid>
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
            Other Services
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              display: { xs: "none", sm: "flex", md: "none", xl: "none" },
            }}
            variant="h4"
          >
            Other Services
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              display: { xs: "flex", sm: "none", md: "none" },
              fontSize: { xs: "2rem" },
            }}
            variant="h6"
          >
            Add-On Services
          </Typography>
        </Paper>
      </Divider>
      <br />
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/*//=========== GRID BOX START =================================> */}
        <Grid item xs={11.6} sm={11} md={5.5} lg={3.7} xl={3.7}>
          <Item
            elevation={4}
            sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
          >
            <Paper sx={{ bgcolor: "primary.light" }}>
              <Divider variant="middle">
                <Typography
                  variant="h6"
                  sx={{
                    pl: "0px",
                    fontWeight: 700,
                  }}
                >
                  Headlight Restoration
                </Typography>
              </Divider>
            </Paper>
            <Grid>
              <Paper elevation={4}>
                <Typography
                  variant="h6"
                  bgcolor="secondary.dark"
                  color="primary.contrastText"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  $80
                </Typography>
              </Paper>
            </Grid>
          </Item>
        </Grid>

        {/*//=========== GRID BOX START =================================> */}
        <Grid item xs={11.6} sm={11} md={5.5} lg={3.7} xl={3.7}>
          <Item
            elevation={4}
            sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
          >
            <Paper sx={{ bgcolor: "primary.light" }}>
              <Divider variant="middle">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Clean Engine Compartment
                </Typography>
              </Divider>
            </Paper>
            <Grid sx={{ bgcolor: "primary.light" }}>
              <Paper elevation={4}>
                <Typography
                  variant="h6"
                  bgcolor="secondary.dark"
                  color="primary.contrastText"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  $25
                </Typography>
              </Paper>
            </Grid>
          </Item>
        </Grid>

        {/*//=========== GRID BOX START =================================> */}
        <Grid item xs={11.6} sm={11} md={5.5} lg={3.7} xl={3.7}>
          <Item
            elevation={4}
            sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
          >
            <Paper sx={{ bgcolor: "primary.light" }}>
              <Divider variant="middle">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Interior Stain Removal
                </Typography>
              </Divider>
            </Paper>
            <Grid sx={{ bgcolor: "primary.light" }}>
              <Paper elevation={4}>
                <Typography
                  variant="h6"
                  bgcolor="secondary.dark"
                  color="primary.contrastText"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  $35
                </Typography>
              </Paper>
            </Grid>
          </Item>
        </Grid>

        {/*//=========== GRID BOX START =================================> */}
        <Grid item xs={11.6} sm={11} md={5.5} lg={3.7} xl={3.7}>
          <Item
            elevation={4}
            sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
          >
            <Paper sx={{ bgcolor: "primary.light" }}>
              <Divider variant="middle">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Clay Bar*
                </Typography>
              </Divider>
            </Paper>
            <Grid sx={{ bgcolor: "primary.light" }}>
              <Paper elevation={4}>
                <Typography
                  variant="h6"
                  bgcolor="secondary.dark"
                  color="primary.contrastText"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  $25
                </Typography>
              </Paper>
            </Grid>
          </Item>
        </Grid>

        {/*//=========== GRID BOX START =================================> */}
        <Grid item xs={11.6} sm={11} md={5.5} lg={3.7} xl={3.7}>
          <Item
            elevation={4}
            sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
          >
            <Paper sx={{ bgcolor: "primary.light" }}>
              <Divider variant="middle">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Pet Hair Removal
                </Typography>
              </Divider>
            </Paper>
            <Grid sx={{ bgcolor: "primary.light" }}>
              <Paper elevation={4}>
                <Typography
                  variant="h6"
                  bgcolor="secondary.dark"
                  color="primary.contrastText"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  $49.99
                </Typography>
              </Paper>
            </Grid>
          </Item>
        </Grid>
      </Grid>
      <br />
      {/*//=========== GRID BOX START =================================> */}

      <Grid
        container
        spacing={5}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={11.6} sm={11} md={5.5} lg={3.7} xl={3.7}>
          <Item
            elevation={4}
            sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
          >
            <Paper sx={{ bgcolor: "primary.light" }}>
              <Divider variant="middle">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Ceramic Coating
                </Typography>
              </Divider>
            </Paper>
            <Grid sx={{ bgcolor: "primary.light" }}>
              <Paper elevation={4}>
                <Typography
                  variant="h6"
                  bgcolor="secondary.dark"
                  color="primary.contrastText"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Cars − $400
                </Typography>
                <Typography
                  variant="h6"
                  bgcolor="secondary.dark"
                  color="primary.contrastText"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Trucks − $575
                </Typography>
                <Typography
                  variant="h6"
                  bgcolor="secondary.dark"
                  color="primary.contrastText"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Large SUV/Trucks − $650
                </Typography>
              </Paper>
            </Grid>
          </Item>
        </Grid>
        {/*//=============== GRID END GOES TO BOTTOM  =====================> */}
      </Grid>
    </Box>
  );
}
