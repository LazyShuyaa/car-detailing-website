// *****************************************************************************
// This component displays the Detailing Price section
// Goes to ==> App.js Component
// *****************************************************************************

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
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
       <Grid  color="#8aa3b4;" mt={5}  id="price">
       .
        </Grid>
      <Grid  mt={5} >
      
      </Grid>
      <br />

      <Divider>
        <Typography
          sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          variant="h2"
        >
          Detailing Prices
        </Typography>
        <Typography
          sx={{ display: { xs: "none", sm: "flex", md: "none", xl: "none" } }}
          variant="h4"
        >
          Detailing Prices
        </Typography>
        <Typography
          sx={{
            display: { xs: "flex", sm: "none", md: "none" },
            fontSize: "2rem",
          }}
          variant="h6"
        >
          Detailing Prices
        </Typography>
      </Divider>
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
                      <TableCell
                
                        sx={{ fontWeight: "700" }}
                        align="center"
                      >
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
    </Box>
  );
}
