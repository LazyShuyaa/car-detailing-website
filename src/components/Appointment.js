// *****************************************************************************
// This component displays the Appointment section and links
// Goes to ==> App.js Component
// *****************************************************************************

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "mui-image";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#c2c2c2" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AboutUs() {
  return (
    <Box
      id="appointment"
      sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
    >
      {/*//=========== GRID BOX START =================================> */}
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/*//=========== GRID BOX START =================================> */}
        <Grid
          sx={{ display: "flex", flexDirection: "column" }}
          item
          xs={11}
          md={6}
        >
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/Screen Shot 2022-06-03 at 1.09.01 PM.webp")}
            />
          </Item>
          <Button
            color="info"
            href="https://www.facebook.com/WillisDeluxeDetailing"
            startIcon={<FacebookIcon />}
            variant="contained"
          >
            Folow Us
          </Button>
        </Grid>
        {/*//=========== GRID END =======================================> */}

        {/*//=============== GRID END GOES TO BOTTOM  =====================> */}
      </Grid>

      <br />
    </Box>
  );
}
