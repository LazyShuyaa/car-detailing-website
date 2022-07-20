import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button sx={{width: "300px"}} endIcon={<InfoOutlinedIcon/>} size="large" variant="contained"  color="info" onClick={handleClickOpen}>
        Deluxe Detail
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Deluxe Detailing**"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <List>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Exterior Wash/ Minor Road Tar Removal" />
              </ListItem>
              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Engine and Gas Compartment" />
              </ListItem>
              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Window Cleaning" />
              </ListItem>
              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Vacuuming/ Blow-out Under and Between Seats" />
              </ListItem>
              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Clean Vents/Cup-Holders and Open Compartments" />
              </ListItem>
              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Towel Dry" />
              </ListItem>
              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Clean Door Jams and Weather Seals" />
              </ListItem>
              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Leather Conditioning/ Fabric Cleaning" />
              </ListItem>
              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Wheel/ Fender Wells Cleaning" />
              </ListItem>
              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Minor Scratch Removal" />
              </ListItem>
              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Tire Dressing" />
              </ListItem>
              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Clean Floor Matts" />
              </ListItem>
              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Clean/ Dress Door Panels and Plastic" />
              </ListItem>
              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Dress Dashboard" />
              </ListItem>
              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Hand Applied Extra-Shine Polymer Wax" />
              </ListItem>
              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Minor Stain Removal" />
              </ListItem>
              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Air Fragrance" />
              </ListItem>
              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Plastic Restoration (Bumber, Trim, Rearview Mirrors)" />
              </ListItem>
              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="** Expect 2 - 3 Hours" />
              </ListItem>

            </List>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
