import * as React from "react";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#c2c2c2" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function createData(handWash, exterior, interior, deluxe) {
  return { handWash, exterior, interior, deluxe };
}

const carRows = [createData("$15", "$30", "$35", "$130")];
const truckRows = [createData("$15", "$30", "$35", "$130")];
const extTruckRows = [createData("$15", "$30", "$35", "$130")];
const vanRows = [createData("$15", "$30", "$35", "$130")];
const smallSuvRows = [createData("$15", "$30", "$35", "$130")];
const midSuvRows = [createData("$15", "$30", "$35", "$130")];
const fullSuvRows = [createData("$15", "$30", "$35", "$130")];

export default function BasicTable() {
  return (
    <Box id="hours" sx={{ flexGrow: 1 }}>
      <br />
      <Divider>
        <Typography
          sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          variant="h2"
        >
          Hours of Operation
        </Typography>
        <Typography
          sx={{ display: { xs: "none", sm: "flex", md: "none", xl: "none" } }}
          variant="h4"
        >
          Hours of Operation
        </Typography>
        <Typography
          sx={{
            display: { xs: "flex", sm: "none", md: "none" },
            fontSize: { xs: "2rem" },
          }}
          variant="h6"
        >
          Hours of Operation
        </Typography>
      </Divider>
          <br/>
      {/*//=========== GRID BOX START =================================> */}

      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={10} md={10} lg={10} xl={7}>
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
                      bgcolor: "primary.main",
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
                    pl: { xs: 2, md: 4},
                    pr: { xs: 2, md: 4},
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
              </Paper>
            </Grid>
          </Item>
        </Grid>

        {/*//=============== GRID END GOES TO BOTTOM  =====================> */}
      </Grid>
      <br />
    </Box>
  );
}
