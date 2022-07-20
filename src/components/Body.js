// *****************************************************************************
// This component displays the Images for Body
// Goes to ==> App.js Component
// *****************************************************************************

import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "mui-image";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class Body extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {/*//=========== GRID BOX START =================================> */}
          <Grid item xs={11} md={4.6} xl={2.1}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image src={require("../images/headlight.webp")} />
            </Item>
          </Grid>
          {/*//=========== GRID END =======================================> */}
          {/*//=========== GRID BOX START =================================> */}
          <Grid item xs={11} md={6} xl={2.7}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image src={require("../images/Polishing Car Tire.webp")} />
            </Item>
          </Grid>
      
          {/*//=========== GRID END =======================================> */}
        </Grid>

      </Box>
    );
  }
}
export default Body;
