import React from "react";
import { Box, Typography, Stack, Link, TextField, Button } from "@mui/material";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F6F9FC",
        color: "rgba(107,114,128,0.8)",
        pt: 6,
        px: { xs: 3, md: 8, lg: 12, xl: 16 },
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: { xs: 6, md: 3 },
        }}
      >
        {/* Logo + About */}
        <Box sx={{ maxWidth: "320px" }}>
          <Box
            component="img"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
            alt="logo"
            sx={{ mb: 2, height: { xs: 32, md: 36 } }}
          />

          <Typography variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </Typography>

          <Stack direction="row" spacing={1.5} mt={2}>
            <Box component="img" src={assets.instagramIcon} sx={{ width: 24 }} />
            <Box component="img" src={assets.facebookIcon} sx={{ width: 24 }} />
            <Box component="img" src={assets.twitterIcon} sx={{ width: 24 }} />
            <Box component="img" src={assets.linkendinIcon} sx={{ width: 24 }} />
          </Stack>
        </Box>

        {/* Company */}
        <Box>
          <Typography sx={{ fontWeight: 600, color: "#1f2937", mb: 1 }}>
            COMPANY
          </Typography>
          <Stack spacing={1}>
            {["About", "Careers", "Press", "Blog", "Partners"].map((item) => (
              <Link key={item} href="#" underline="none" color="inherit" fontSize="14px">
                {item}
              </Link>
            ))}
          </Stack>
        </Box>

        {/* Support */}
        <Box>
          <Typography sx={{ fontWeight: 600, color: "#1f2937", mb: 1 }}>
            SUPPORT
          </Typography>
          <Stack spacing={1}>
            {[
              "Help Center",
              "Safety Information",
              "Cancellation Options",
              "Contact Us",
              "Accessibility",
            ].map((item) => (
              <Link key={item} href="#" underline="none" color="inherit" fontSize="14px">
                {item}
              </Link>
            ))}
          </Stack>
        </Box>

        {/* Newsletter */}
        <Box sx={{ maxWidth: "320px" }}>
          <Typography sx={{ fontWeight: 600, color: "#1f2937" }}>
            STAY UPDATED
          </Typography>

          <Typography variant="body2" mt={1.5}>
            Subscribe to our newsletter for inspiration and special offers.
          </Typography>

          <Stack direction="row" mt={2}>
            <TextField
              placeholder="Your email"
              size="small"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "4px 0 0 4px",
                  backgroundColor: "white",
                },
              }}
            />

            <Button
              sx={{
                minWidth: "36px",
                borderRadius: "0 4px 4px 0",
                backgroundColor: "black",
                "&:hover": {
                  backgroundColor: "#222",
                },
              }}
            >
              <Box
                component="img"
                src={assets.arrowIcon}
                sx={{
                  width: "14px",
                  filter: "invert(1)",
                }}
              />
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          borderTop: "1px solid #d1d5db",
          mt: 5,
        }}
      />

      {/* Bottom */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        py={3}
        spacing={1}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} HMS. All rights reserved.
        </Typography>

        <Stack direction="row" spacing={2}>
          {["Privacy", "Terms", "Sitemap"].map((item) => (
            <Link key={item} href="#" underline="none" color="inherit" fontSize="14px">
              {item}
            </Link>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;