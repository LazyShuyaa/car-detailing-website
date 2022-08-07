// *****************************************************************************
// This component displays the Business Hours section and links
// Goes to ==> App.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import AppointmentButton from "./AppointmentButton";

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
      <Grid color="#475762" mt={5} id="hours"></Grid>
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
            Business Hours
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              display: { xs: "none", sm: "flex", md: "none", xl: "none" },
            }}
            variant="h4"
          >
            Business Hours
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              display: { xs: "flex", sm: "none", md: "none" },
              fontSize: { xs: "2rem" },
            }}
            variant="h6"
          >
            Business Hours
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
        <Grid item xs={11} sm={10} md={10} lg={10} xl={7}>
          <Item
            elevation={4}
            sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
          >
            <Paper sx={{ bgcolor: "primary.light" }}>
              <Divider variant="middle">
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.5rem" },
                    fontWeight: 700,
                  }}
                >
                  Hours
                </Typography>
              </Divider>
            </Paper>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                bgcolor: "primary.light",
              }}
            >
              <Paper elevation={4}>
                {/* === === === === === SUNDAY === === === === === */}
                <Grid
                  sx={{
                    display: "flex",
                    margin: "auto",
                    justifyContent: "space-between",
                    bgcolor: "secondary.dark",
                    pl: { xs: 2, md: 4 },
                    pr: { xs: 2, md: 4 },
                  }}
                >
                  <Typography
                    variant="h6"
                    bgcolor="secondary.dark"
                    color="primary.contrastText"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.5rem" },
                      fontWeight: 700,
                    }}
                  >
                    Sunday
                  </Typography>
                  <Typography
                    variant="h6"
                    bgcolor="secondary.dark"
                    color="primary.contrastText"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.5rem" },
                      fontWeight: 700,
                    }}
                  >
                    Closed
                  </Typography>
                </Grid>
                <Divider />

                {/* === === === === === MONDAY === === === === === */}
                <Grid
                  sx={{
                    display: "flex",
                    margin: "auto",
                    justifyContent: "space-between",
                    bgcolor: "secondary.dark",
                    pl: { xs: 2, md: 4 },
                    pr: { xs: 2, md: 4 },
                  }}
                >
                  <Typography
                    variant="h6"
                    bgcolor="secondary.dark"
                    color="primary.contrastText"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.5rem" },
                      fontWeight: 700,
                    }}
                  >
                    Monday
                  </Typography>
                  <Typography
                    variant="h6"
                    bgcolor="secondary.dark"
                    color="primary.contrastText"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.5rem" },
                      fontWeight: 700,
                    }}
                  >
                    Closed
                  </Typography>
                </Grid>
                <Divider />

                {/* === === === === === TUESDAY === === === === === */}
                <Grid
                  sx={{
                    display: "flex",
                    margin: "auto",
                    justifyContent: "space-between",
                    bgcolor: "secondary.dark",
                    pl: { xs: 2, md: 4 },
                    pr: { xs: 2, md: 4 },
                  }}
                >
                  <Typography
                    variant="h6"
                    bgcolor="secondary.dark"
                    color="primary.contrastText"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.5rem" },
                      fontWeight: 700,
                    }}
                  >
                    Tuesday
                  </Typography>
                  <Typography
                    variant="h6"
                    bgcolor="secondary.dark"
                    color="primary.contrastText"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.5rem" },
                      fontWeight: 700,
                    }}
                  >
                    7:00 AM - 3:00 PM
                  </Typography>
                </Grid>
                <Divider />

                {/* === === === === === WEDNESDAY === === === === === */}
                <Grid
                  sx={{
                    display: "flex",
                    margin: "auto",
                    justifyContent: "space-between",
                    bgcolor: "secondary.dark",
                    pl: { xs: 2, md: 4 },
                    pr: { xs: 2, md: 4 },
                  }}
                >
                  <Typography
                    variant="h6"
                    bgcolor="secondary.dark"
                    color="primary.contrastText"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.5rem" },
                      fontWeight: 700,
                    }}
                  >
                    Wednesday
                  </Typography>
                  <Typography
                    variant="h6"
                    bgcolor="secondary.dark"
                    color="primary.contrastText"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.5rem" },
                      fontWeight: 700,
                    }}
                  >
                    7:00 AM - 3:00 PM
                  </Typography>
                </Grid>
                <Divider />

                {/* === === === === === THURSDAY === === === === === */}
                <Grid
                  sx={{
                    display: "flex",
                    margin: "auto",
                    justifyContent: "space-between",
                    bgcolor: "secondary.dark",
                    pl: { xs: 2, md: 4 },
                    pr: { xs: 2, md: 4 },
                  }}
                >
                  <Typography
                    variant="h6"
                    bgcolor="secondary.dark"
                    color="primary.contrastText"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.5rem" },
                      fontWeight: 700,
                    }}
                  >
                    Thursday
                  </Typography>
                  <Typography
                    variant="h6"
                    bgcolor="secondary.dark"
                    color="primary.contrastText"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.5rem" },
                      fontWeight: 700,
                    }}
                  >
                    7:00 AM - 3:00 PM
                  </Typography>
                </Grid>
                <Divider />

                {/* === === === === === FRIDAY === === === === === */}
                <Grid
                  sx={{
                    display: "flex",
                    margin: "auto",
                    justifyContent: "space-between",
                    bgcolor: "secondary.dark",
                    pl: { xs: 2, md: 4 },
                    pr: { xs: 2, md: 4 },
                  }}
                >
                  <Typography
                    variant="h6"
                    bgcolor="secondary.dark"
                    color="primary.contrastText"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.5rem" },
                      fontWeight: 700,
                    }}
                  >
                    Friday
                  </Typography>
                  <Typography
                    variant="h6"
                    bgcolor="secondary.dark"
                    color="primary.contrastText"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.5rem" },
                      fontWeight: 700,
                    }}
                  >
                    7:00 AM - 3:00 PM
                  </Typography>
                </Grid>
                <Divider />

                {/* === === === === === SATURDAY === === === === === */}
                <Grid
                  sx={{
                    display: "flex",
                    margin: "auto",
                    justifyContent: "space-between",
                    bgcolor: "secondary.dark",
                    pl: { xs: 2, md: 4 },
                    pr: { xs: 2, md: 4 },
                  }}
                >
                  <Typography
                    variant="h6"
                    bgcolor="secondary.dark"
                    color="primary.contrastText"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.5rem" },
                      fontWeight: 700,
                    }}
                  >
                    Saturday
                  </Typography>
                  <Typography
                    variant="h6"
                    bgcolor="secondary.dark"
                    color="primary.contrastText"
                    sx={{
                      fontSize: { xs: "1rem", md: "1.5rem" },
                      fontWeight: 700,
                    }}
                  >
                    9:00 AM - 3:00 PM
                  </Typography>
                </Grid>

                <Divider variant="middle">
                  <Typography
                    pt={3}
                    variant="h5"
                    sx={{ fontWeight: "500" }}
                  ></Typography>
                </Divider>
              </Paper>
            </Grid>
          </Item>
        </Grid>
        {/*//=============== GRID END GOES TO BOTTOM  =====================> */}
      </Grid>
      <AppointmentButton />
    </Box>
  );
}
