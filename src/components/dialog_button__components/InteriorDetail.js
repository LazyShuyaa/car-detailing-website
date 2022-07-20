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
        Interior Detail
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Interior Detailing"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <List>

            <ListItem disablePadding>

                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Dress Dashboard/ Plastic" />
              </ListItem>

                <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Dress Door Panels" />
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
                <ListItemText primary="Vacuum" />
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
                <ListItemText primary="Spot Clean Leather and/or Fabric Vinyl" />
              </ListItem>

              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Spot Clean Carpets and/or Upholstery" />
              </ListItem>

              <Divider variant="middle"/>

              <ListItem disablePadding>
                <ListItemIcon>
                  <DirectionsCarIcon />
                </ListItemIcon>
                <ListItemText primary="Air Fragrance" />
              </ListItem>
              

            </List>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
