// *****************************************************************************
// This component displays the Details when clicked
// Goes to ==> Prices.js Component
// *****************************************************************************

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";

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
      <Button
        size="large"
        variant="contained"
        color="info"
        onClick={handleClickOpen}
        sx={{
          p: { xs: ".5rem", sm: ".4rem", md: "inital" },

          width: { xs: "150px", sm: "initial", md: "220px" },
        }}
      >
        Exterior Detail
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Exterior Detailing"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <List>
              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Exterior Hand Wash" />
              </ListItem>
              <Divider variant="middle" />

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Exterior-Window Cleaning" />
              </ListItem>
              <Divider variant="middle" />

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Towel Dry" />
              </ListItem>
              <Divider variant="middle" />

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Wheel/ Fender Well Cleaning" />
              </ListItem>
              <Divider variant="middle" />

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Tire Dressing" />
              </ListItem>
              <Divider variant="middle" />

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Hand Applied Extra-Shine Polymer Wax" />
              </ListItem>
              <Divider variant="middle" />

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Bug/Tar Removal" />
              </ListItem>
            </List>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
