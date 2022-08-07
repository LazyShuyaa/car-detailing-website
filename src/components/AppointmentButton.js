// *****************************************************************************
// This component displays the Business Hours section and links
// Goes to ==> App.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CallIcon from "@mui/icons-material/Call";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import * as React from "react";

export default function BasicTable() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <br />

      <Grid color="#475762" mt={5} id="hours"></Grid>
      <Grid mt={5}></Grid>
      {/* === === === === === DETAIL BUTTONS === === === === === === === ===*/}
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ display: "flex", gap: "5px", pl: "1.5rem", pr: ".5rem" }}
      >
        <Paper
          sx={{
            bgcolor: "primary.dark",
            display: "flex",
            gap: "25px",
            p: ".5rem",
          }}
        >
          <Button
            color="info"
            href="/schedule-appointment"
            startIcon={<CallIcon />}
            variant="contained"
          >
            Schedule An Appointment!
          </Button>
        </Paper>
      </Grid>
      <br />
    </Box>
  );
}
