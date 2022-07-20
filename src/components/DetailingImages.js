import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <ImageList
      sx={{
        height: { xs: "300px", sm: "500px", md: "750px", lg: "800px" },
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: "translateZ(0)",
      }}
      gap={5}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />

            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: "white" }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://raw.githubusercontent.com/JeremyDuncan/car-detailing-website/main/src/images/work_images/interior_clean3_result.webp",
    title: "Interior Detailing Results",
    author: "@JasonW",
    featured: true,
  },
  {
    img: "https://raw.githubusercontent.com/JeremyDuncan/car-detailing-website/main/src/images/work_images/before_interior2_result.webp",
    title: "Before",
    author: "@JasonW",
    featured: true,
  },
  {
    img: "https://raw.githubusercontent.com/JeremyDuncan/car-detailing-website/main/src/images/work_images/after_interior2_result.webp",
    title: "After",
    author: "@JasonW",
    featured: true,
  },
  {
    img: "https://raw.githubusercontent.com/JeremyDuncan/car-detailing-website/main/src/images/work_images/before_interior_result.webp",
    title: "Before",
    author: "@JasonW",
    featured: true,
  },
  {
    img: "https://raw.githubusercontent.com/JeremyDuncan/car-detailing-website/main/src/images/work_images/after_interior_result.webp",
    title: "After",
    author: "@JasonW",
    featured: true,
  },
  {
    img: "https://raw.githubusercontent.com/JeremyDuncan/car-detailing-website/main/src/images/work_images/bumber_before_result.webp",
    title: "Before",
    author: "@JasonW",
  },
  {
    img: "https://raw.githubusercontent.com/JeremyDuncan/car-detailing-website/main/src/images/work_images/bumper_after_result.webp",
    title: "After",
    author: "@JasonW",
  },
  {
    img: "https://raw.githubusercontent.com/JeremyDuncan/car-detailing-website/main/src/images/work_images/exterior_clean2_result.webp",
    title: "Deluxe Detail",
    author: "@JasonW",
    featured: true,
  },
  {
    img: "https://raw.githubusercontent.com/JeremyDuncan/car-detailing-website/main/src/images/work_images/exterior_clean_result.webp",
    title: "After",
    author: "@JasonW",
  },
  {
    img: "https://raw.githubusercontent.com/JeremyDuncan/car-detailing-website/main/src/images/work_images/interior_clean2_result.webp",
    title: "After",
    author: "@JasonW",
  },
  {
    img: "https://raw.githubusercontent.com/JeremyDuncan/car-detailing-website/main/src/images/work_images/headlight_before_result.webp",
    title: "Before",
    author: "@JasonW",
  },
  {
    img: "https://raw.githubusercontent.com/JeremyDuncan/car-detailing-website/main/src/images/work_images/headlight_after_result.webp",
    title: "After",
    author: "@JasonW",
  },
  {
    img: "https://raw.githubusercontent.com/JeremyDuncan/car-detailing-website/main/src/images/work_images/interior_clean4_result.webp",
    title: "After",
    author: "@JasonW",
  },
  {
    img: "https://raw.githubusercontent.com/JeremyDuncan/car-detailing-website/main/src/images/work_images/interior_clean_result.webp",
    title: "After",
    author: "@JasonW",
  },
  {
    img: "https://raw.githubusercontent.com/JeremyDuncan/car-detailing-website/main/src/images/work_images/interior_clean5_result.webp",
    title: "Interior Detail",
    author: "@JasonW",
    featured: true,
  },
  {
    img: "https://raw.githubusercontent.com/JeremyDuncan/car-detailing-website/main/src/images/work_images/wheels_before_after_result.webp",
    title: "Exterior Detail",
    author: "@JasonW",
    featured: true,
  },
  {
    img: "https://raw.githubusercontent.com/JeremyDuncan/car-detailing-website/main/src/images/work_images/scratch_before_result.webp",
    title: "Before",
    author: "@JasonW",
  },
  {
    img: "https://raw.githubusercontent.com/JeremyDuncan/car-detailing-website/main/src/images/work_images/scratch_after_result.webp",
    title: "After",
    author: "@JasonW",
  },
];
