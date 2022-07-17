// *****************************************************************************
// This component displays the Footer section
// Imported to App.js Component ==>
// *****************************************************************************

import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class Footer extends Component {
  render(){
    return(
      <Box 
        sx={{ flexGrow: 1}}
        container 
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
          <Grid item xs={12}>
            <Item sx={{ bgcolor: 'primary.main', color: 'white'}}>
              <Typography sx={{fontSize: ".8rem"}}>
                I created this site with
                <Link
                  color="text.secondary"
                  underline="none"
                  target="_blank"
                  rel="noopener"
                  href="https://reactjs.org/">
                    &nbsp; React &nbsp;
                </Link>
                and &nbsp;
                <Link
                  color="text.secondary"
                  underline="none"
                  target="_blank"
                  rel="noopener"
                  href="https://mui.com/material-ui/getting-started/overview/">
                    Material UI
                </Link>
                .
              </Typography>
              <Typography>
                Jeremy Duncan &copy; 2022
              </Typography>
            </Item>
          </Grid>
      </Box>
    )
  }
}
export default Footer;