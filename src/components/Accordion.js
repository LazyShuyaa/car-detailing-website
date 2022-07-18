// *****************************************************************************
// This component has the accordion section that holds the section components
// Goes to ==> Portfolio.js Component
// *****************************************************************************

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TerminalIcon from "@mui/icons-material/Terminal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {/* =============== === ACCORDIAN START === ===========================*/}
        {/* === Detailing Prices === */}
        <Accordion
          sx={{
            bgcolor: "primary.dark",
            color: "primary.contrastText",
          }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            sx={{ borderRadius: "22px 22px 22px 22px" }}
            expandIcon={
              <ExpandMoreIcon sx={{ color: "primary.contrastText" }} />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontWeight: "bold",
                margin: { md: "auto", lg: "auto", sm: "auto" },
              }}
            >
              Detailing Prices
            </Typography>
            {/* </Box> */}
          </AccordionSummary>
          <AccordionDetails
            sx={{ bgcolor: "secondary.main", color: "primary.contrastText" }}
          >
            <Typography>
              In dolore nisi mollit consectetur culpa sint commodo. Tempor velit
              ut ea amet Lorem proident adipisicing. Magna deserunt consectetur
              aliqua veniam ut qui cupidatat do excepteur duis ipsum. Et duis
              occaecat est occaecat duis aliquip. Nulla quis ipsum aliquip non
              ipsum eu. Amet excepteur deserunt est magna. In dolore nisi mollit
              consectetur culpa sint commodo. Tempor velit ut ea amet Lorem
              proident adipisicing. Magna deserunt consectetur aliqua veniam ut
              qui cupidatat do excepteur duis ipsum. Et duis occaecat est
              occaecat duis aliquip. Nulla quis ipsum aliquip non ipsum eu. Amet
              excepteur deserunt est magna. In dolore nisi mollit consectetur
              culpa sint commodo. Tempor velit ut ea amet Lorem proident
              adipisicing. Magna deserunt consectetur aliqua veniam ut qui
              cupidatat do excepteur duis ipsum. Et duis occaecat est occaecat
              duis aliquip. Nulla quis ipsum aliquip non ipsum eu. Amet
              excepteur deserunt est magna.
            </Typography>
            {/* <=={COMPONENT} */}
          </AccordionDetails>
        </Accordion>
        {/* =============== === ACCORDIAN END === =============================*/}
        <br />
        {/* =============== === ACCORDIAN START === ===========================*/}
        {/* === Additional Services=== */}
        <Accordion
          sx={{
            bgcolor: "primary.dark",
            color: "primary.contrastText",
          }}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: "primary.contrastText" }} />
            }
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontWeight: "bold",
                margin: { md: "auto", lg: "auto", sm: "auto" },
              }}
            >
              Additional Services
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ bgcolor: "secondary.main", color: "primary.contrastText" }}
          >
            <Typography variant="h6" sx={{ paddingBottom: 2, paddingTop: 2 }}>
              <TerminalIcon
                sx={{ verticalAlign: "center", fontSize: "small" }}
              />
              &nbsp; Languages and Technologies Used
            </Typography>
            <Typography>
              In dolore nisi mollit consectetur culpa sint commodo. Tempor velit
              ut ea amet Lorem proident adipisicing. Magna deserunt consectetur
              aliqua veniam ut qui cupidatat do excepteur duis ipsum. Et duis
              occaecat est occaecat duis aliquip. Nulla quis ipsum aliquip non
              ipsum eu. Amet excepteur deserunt est magna. In dolore nisi mollit
              consectetur culpa sint commodo. Tempor velit ut ea amet Lorem
              proident adipisicing. Magna deserunt consectetur aliqua veniam ut
              qui cupidatat do excepteur duis ipsum. Et duis occaecat est
              occaecat duis aliquip. Nulla quis ipsum aliquip non ipsum eu. Amet
              excepteur deserunt est magna. In dolore nisi mollit consectetur
              culpa sint commodo. Tempor velit ut ea amet Lorem proident
              adipisicing. Magna deserunt consectetur aliqua veniam ut qui
              cupidatat do excepteur duis ipsum. Et duis occaecat est occaecat
              duis aliquip. Nulla quis ipsum aliquip non ipsum eu. Amet
              excepteur deserunt est magna.
            </Typography>
            {/* <=={COMPONENT} */}
          </AccordionDetails>
        </Accordion>
        {/* =============== === ACCORDIAN END === =============================*/}
        {/* =============== === ACCORDIAN START === ===========================*/}
        {/* === COLLEGE EDUCATION SECTION === */}
        <Accordion
          sx={{
            bgcolor: "primary.dark",
            color: "primary.contrastText",
          }}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: "primary.contrastText" }} />
            }
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontWeight: "bold",
                margin: { md: "auto", lg: "auto", sm: "auto" },
              }}
            >
              College Education
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ bgcolor: "secondary.main", color: "primary.contrastText" }}
          >
            <Typography>
              In dolore nisi mollit consectetur culpa sint commodo. Tempor velit
              ut ea amet Lorem proident adipisicing. Magna deserunt consectetur
              aliqua veniam ut qui cupidatat do excepteur duis ipsum. Et duis
              occaecat est occaecat duis aliquip. Nulla quis ipsum aliquip non
              ipsum eu. Amet excepteur deserunt est magna. In dolore nisi mollit
              consectetur culpa sint commodo. Tempor velit ut ea amet Lorem
              proident adipisicing. Magna deserunt consectetur aliqua veniam ut
              qui cupidatat do excepteur duis ipsum. Et duis occaecat est
              occaecat duis aliquip. Nulla quis ipsum aliquip non ipsum eu. Amet
              excepteur deserunt est magna. In dolore nisi mollit consectetur
              culpa sint commodo. Tempor velit ut ea amet Lorem proident
              adipisicing. Magna deserunt consectetur aliqua veniam ut qui
              cupidatat do excepteur duis ipsum. Et duis occaecat est occaecat
              duis aliquip. Nulla quis ipsum aliquip non ipsum eu. Amet
              excepteur deserunt est magna.
            </Typography>
            {/* <=={COMPONENT} */}
          </AccordionDetails>
        </Accordion>
        {/* =============== === ACCORDIAN END === =============================*/}
        {/* =============== === ACCORDIAN START === ===========================*/}
        {/* === MILITARY EXPERIENCE SECTION === */}
        <Accordion
          sx={{
            bgcolor: "primary.dark",
            color: "primary.contrastText",
          }}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: "primary.contrastText" }} />
            }
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontWeight: "bold",
                margin: { md: "auto", lg: "auto", sm: "auto" },
              }}
            >
              Military Experience
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ bgcolor: "secondary.main", color: "primary.contrastText" }}
          >
            <Typography>
              In dolore nisi mollit consectetur culpa sint commodo. Tempor velit
              ut ea amet Lorem proident adipisicing. Magna deserunt consectetur
              aliqua veniam ut qui cupidatat do excepteur duis ipsum. Et duis
              occaecat est occaecat duis aliquip. Nulla quis ipsum aliquip non
              ipsum eu. Amet excepteur deserunt est magna. In dolore nisi mollit
              consectetur culpa sint commodo. Tempor velit ut ea amet Lorem
              proident adipisicing. Magna deserunt consectetur aliqua veniam ut
              qui cupidatat do excepteur duis ipsum. Et duis occaecat est
              occaecat duis aliquip. Nulla quis ipsum aliquip non ipsum eu. Amet
              excepteur deserunt est magna. In dolore nisi mollit consectetur
              culpa sint commodo. Tempor velit ut ea amet Lorem proident
              adipisicing. Magna deserunt consectetur aliqua veniam ut qui
              cupidatat do excepteur duis ipsum. Et duis occaecat est occaecat
              duis aliquip. Nulla quis ipsum aliquip non ipsum eu. Amet
              excepteur deserunt est magna.
            </Typography>
            {/* <=={COMPONENT} */}
          </AccordionDetails>
        </Accordion>
        {/* =============== === ACCORDIAN END === =============================*/}
        {/* =============== === ACCORDIAN START === ===========================*/}
        {/* === PORTFOLIO SECTION === */}
        <Accordion
          sx={{
            bgcolor: "primary.dark",
            color: "primary.contrastText",
          }}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: "primary.contrastText" }} />
            }
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                fontWeight: "bold",
                margin: { md: "auto", lg: "auto", sm: "auto" },
              }}
            >
              My Portfolio Projects
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ bgcolor: "secondary.main", color: "primary.contrastText" }}
          >
            <Typography sx={{ paddingBottom: 2 }}>
              These are some of my projects.
            </Typography>
            <Typography>
              In dolore nisi mollit consectetur culpa sint commodo. Tempor velit
              ut ea amet Lorem proident adipisicing. Magna deserunt consectetur
              aliqua veniam ut qui cupidatat do excepteur duis ipsum. Et duis
              occaecat est occaecat duis aliquip. Nulla quis ipsum aliquip non
              ipsum eu. Amet excepteur deserunt est magna. In dolore nisi mollit
              consectetur culpa sint commodo. Tempor velit ut ea amet Lorem
              proident adipisicing. Magna deserunt consectetur aliqua veniam ut
              qui cupidatat do excepteur duis ipsum. Et duis occaecat est
              occaecat duis aliquip. Nulla quis ipsum aliquip non ipsum eu. Amet
              excepteur deserunt est magna. In dolore nisi mollit consectetur
              culpa sint commodo. Tempor velit ut ea amet Lorem proident
              adipisicing. Magna deserunt consectetur aliqua veniam ut qui
              cupidatat do excepteur duis ipsum. Et duis occaecat est occaecat
              duis aliquip. Nulla quis ipsum aliquip non ipsum eu. Amet
              excepteur deserunt est magna.
            </Typography>
            {/* <=={COMPONENT} */}
          </AccordionDetails>
        </Accordion>
        {/* =============== === ACCORDIAN END === =============================*/}
      </Grid>
    </Box>
  );
}
