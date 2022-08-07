// *****************************************************************************
// This component displays the Detailing Price section
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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Image from "mui-image";
import * as React from "react";
import AppointmentButton from "../components/AppointmentButton";
import DeluxeButton from "../components/dialog_button__components/DeluxeDetail";
import ExteriorDetailButton from "../components/dialog_button__components/ExteriorDetail";
import HandWashButton from "../components/dialog_button__components/HandWash";
import InteriorDetailButton from "../components/dialog_button__components/InteriorDetail";

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
const truckRows = [createData("$20", "$40", "$45", "$140")];
const extTruckRows = [createData("$30", "$60", "$65", "$180")];
const vanRows = [createData("$40", "$80", "$85", "$250")];
const smallSuvRows = [createData("$25", "$40", "$45", "$140")];
const midSuvRows = [createData("$35", "$60", "$70", "$180")];
const fullSuvRows = [createData("$40", "$70", "$75", "$200")];

export default function BasicTable() {
  return (
    <Box sx={{ flexGrow: 1, color: "primary.contrastText" }}>
      <Grid color="#475762" mt={5} id="price"></Grid>
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
            Detailing Prices
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              display: { xs: "none", sm: "flex", md: "none", xl: "none" },
            }}
            variant="h4"
          >
            Detailing Prices
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              display: { xs: "flex", sm: "none", md: "none" },
              fontSize: "2rem",
            }}
            variant="h6"
          >
            Detailing Prices
          </Typography>
        </Paper>
      </Divider>
      <br />
      <br />

      {/* === === === === === DETAIL BUTTONS === === === === === === === ===*/}
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ display: "flex", gap: "25px", pl: "1.5rem", pr: ".5rem" }}
      >
        <Paper
          sx={{
            bgcolor: "primary.dark",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            p: ".5rem",
          }}
        >
          <Image src={require("../images/info_images/hand_wash.webp")} />
          <HandWashButton />
        </Paper>
        <Paper
          sx={{
            bgcolor: "primary.dark",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            p: ".5rem",
          }}
        >
          <Image src={require("../images/info_images/interior_detail.webp")} />
          <InteriorDetailButton />
        </Paper>
        <Paper
          sx={{
            bgcolor: "primary.dark",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            p: ".5rem",
          }}
        >
          <Image src={require("../images/info_images/exterior_detail.webp")} />
          <ExteriorDetailButton />
        </Paper>
        <Paper
          sx={{
            bgcolor: "primary.dark",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            p: ".5rem",
          }}
        >
          <Image src={require("../images/info_images/deluxe_detail.webp")} />
          <DeluxeButton />
        </Paper>
      </Grid>
      <br />
      <Grid
        container
        spacing={5}
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
                    fontWeight: 700,
                  }}
                >
                  Car
                </Typography>
              </Divider>
            </Paper>

            {/* === === === === === CAR TABLE CONTAINER === === === === ===  */}
            <TableContainer component={Paper}>
              <Table
                sx={
                  {
                    /*INSERT CSS  */
                  }
                }
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow sx={{ bgcolor: "primary.main" }}>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Hand Wash
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Interior Detail
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Exterior Detail
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Deluxe Detail**
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {carRows.map((row) => (
                    <TableRow
                      bgColor="#b0bec9"
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.handWash}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.exterior}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.interior}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.deluxe}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
                  Regular Cab Truck
                </Typography>
              </Divider>
            </Paper>

            {/* === === === === === === TABLE CONTAINER === === === === === === ===  */}
            <TableContainer component={Paper}>
              <Table
                sx={
                  {
                    /*INSERT CSS  */
                  }
                }
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow sx={{ bgcolor: "primary.main" }}>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Hand Wash
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Interior Detail
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Exterior Detail
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Deluxe Detail**
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {truckRows.map((row) => (
                    <TableRow
                      bgColor="#b0bec9"
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.handWash}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.exterior}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.interior}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.deluxe}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
                  Extended Cab Truck
                </Typography>
              </Divider>
            </Paper>

            {/* === === === === === === TABLE CONTAINER === === === === === === ===  */}
            <TableContainer component={Paper}>
              <Table
                sx={
                  {
                    /*INSERT CSS  */
                  }
                }
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow sx={{ bgcolor: "primary.main" }}>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Hand Wash
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Interior Detail
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Exterior Detail
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Deluxe Detail**
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {extTruckRows.map((row) => (
                    <TableRow
                      bgColor="#b0bec9"
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.handWash}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.exterior}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.interior}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.deluxe}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
                  Van
                </Typography>
              </Divider>
            </Paper>

            {/* === === === === === === TABLE CONTAINER === === === === === === ===  */}
            <TableContainer component={Paper}>
              <Table
                sx={
                  {
                    /*INSERT CSS  */
                  }
                }
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow sx={{ bgcolor: "primary.main" }}>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Hand Wash
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Interior Detail
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Exterior Detail
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Deluxe Detail**
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {vanRows.map((row) => (
                    <TableRow
                      bgColor="#b0bec9"
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.handWash}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.exterior}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.interior}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.deluxe}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
                  Small SUV
                </Typography>
              </Divider>
            </Paper>

            {/* === === === === === === TABLE CONTAINER === === === === === === ===  */}
            <TableContainer component={Paper}>
              <Table
                sx={
                  {
                    /*INSERT CSS  */
                  }
                }
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow sx={{ bgcolor: "primary.main" }}>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Hand Wash
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Interior Detail
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Exterior Detail
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Deluxe Detail**
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {smallSuvRows.map((row) => (
                    <TableRow
                      bgColor="#b0bec9"
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.handWash}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.exterior}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.interior}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.deluxe}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
                  Mid-Size SUV
                </Typography>
              </Divider>
            </Paper>

            {/* === === === === === === TABLE CONTAINER === === === === === === ===  */}
            <TableContainer component={Paper}>
              <Table
                sx={
                  {
                    /*INSERT CSS  */
                  }
                }
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow sx={{ bgcolor: "primary.main" }}>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Hand Wash
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Interior Detail
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Exterior Detail
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Deluxe Detail**
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {midSuvRows.map((row) => (
                    <TableRow
                      bgColor="#b0bec9"
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.handWash}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.exterior}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.interior}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.deluxe}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
                  Full-Size SUV
                </Typography>
              </Divider>
            </Paper>

            {/* === === === === === === TABLE CONTAINER === === === === === === ===  */}
            <TableContainer component={Paper}>
              <Table
                sx={
                  {
                    /*INSERT CSS  */
                  }
                }
                aria-label="#b0bec9"
              >
                <TableHead>
                  <TableRow sx={{ bgcolor: "primary.main" }}>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Hand Wash
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Interior Detail
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Exterior Detail
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }} align="center">
                      Deluxe Detail**
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fullSuvRows.map((row) => (
                    <TableRow
                      bgColor="#b0bec9"
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.handWash}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.exterior}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.interior}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "700" }} align="center">
                        {row.deluxe}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Item>
        </Grid>

        {/*//=============== GRID END GOES TO BOTTOM  =====================> */}
      </Grid>
      <AppointmentButton />
    </Box>
  );
}
