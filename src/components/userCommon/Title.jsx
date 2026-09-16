import React from "react";
import { Box, Typography } from "@mui/material";

const Title = ({ title, subTitle, align = "center", font }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems={align === "left" ? "flex-start" : "center"}
      textAlign={align === "left" ? "left" : "center"}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "28px", md: "40px" },
          fontFamily: font || "Playfair Display",
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "rgb(113, 113, 113)",
          mt: 1,
          maxWidth: "700px",
          fontSize: { xs: "14px", md: "16px" },
        }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Title;