import React from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import Title from "./Title";
import {assets} from "../../assets/assets";

const Newsletter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1024px",
        width: "100%",
        mx: "auto",
        my: "120px",
        px: 2,
        py: { xs: 6, md: 8 },
        borderRadius: "16px",
        backgroundColor: "#111827",
        color: "white",
      }}
    >
      <Title
        title="Stay Inspired"
        subTitle="Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration."
      />

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems="center"
        justifyContent="center"
        mt={3}
        width="100%"
      >
        <TextField
          placeholder="Enter your email"
          variant="outlined"
          fullWidth
          sx={{
            maxWidth: "260px",
            input: { color: "white" },
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "6px",
              "& fieldset": {
                borderColor: "rgba(255,255,255,0.2)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(255,255,255,0.4)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
        />

        <Button
          variant="contained"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: { xs: 2, md: 4 },
            py: 1.2,
            borderRadius: "6px",
            backgroundColor: "black",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#222",
            },
            "&:active": {
              transform: "scale(0.95)",
            },
          }}
        >
          Subscribe
          <Box
            component="img"
            src={assets.arrowIcon}
            alt="arrow-icon"
            sx={{
              width: "14px",
              filter: "invert(1)",
              transition: "0.3s",
              ml: 0.5,
              "&:hover": {
                transform: "translateX(4px)",
              },
            }}
          />
        </Button>
      </Stack>

      <Typography
        variant="caption"
        sx={{
          color: "gray",
          mt: 3,
          textAlign: "center",
        }}
      >
        By subscribing, you agree to our Privacy Policy and consent to receive
        updates.
      </Typography>
    </Box>
  );
};

export default Newsletter;