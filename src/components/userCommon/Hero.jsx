import React from 'react'
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Autocomplete
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";
import { MenuItem } from "@mui/material";
const cities = [
    "Dubai",
    "Singapore",
    "New York",
    "London",
];

const Hero = () => {
  return (
    <>
    <Box sx={{position: "relative"}}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        px: { xs: 3, md: 8, lg: 12, xl: 16 },
        color: "white",
        height: "100vh",
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/src/assets/heroimg.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        sx={{
          backgroundColor: "rgba(73,185,255,0.5)",
          px: 2,
          py: 0.5,
          borderRadius: "999px",
          mt: 0,
          fontSize: "14px",
        }}
      >
        The Ultimate Hotel Experience
      </Typography>

      <Typography
        sx={{
          fontFamily: "Playfair Display",
          fontSize: { xs: "32px", md: "56px" },
          lineHeight: { md: "56px" },
          fontWeight: 800,
          maxWidth: "600px",
          mt: 2,
        }}
      >
        Discover Your Perfect Gateway Destination
      </Typography>

      <Typography
        sx={{
          maxWidth: "520px",
          mt: 1,
          fontSize: { xs: "14px", md: "16px" },
        }}
      >
        Unparalleled luxury and comfort await at the world's most exclusive
        hotels and resorts. Start your journey today.
      </Typography>
    </Box>

    <Box
      component="form"
      sx={{
        display: { xs: "none", md: "flex" },
        position: "absolute",
        bottom: "40px",
        left: "7%",
        background: "rgba(145,180,251,0.15)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(145,180,251,0.15)",
        borderRadius: 3,
        px: 3,
        py: 2,
        gap: 2,
        boxShadow: "0 20px 50px rgba(0,0,0,0.25)"
      }}
    >
      <Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <LocationOnIcon fontSize="small" sx={{ color: "#e0dada" }} />
          <Typography variant="caption" sx={{ color: "#e0dada" }}>
            Destination
          </Typography>
        </Stack>
        <Autocomplete
          options={cities}
          size="small"
          sx={{
            width: 220,
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": {
                borderColor: "rgba(255,255,255,0.4)"
              },
              "&:hover fieldset": {
                borderColor: "white"
              }
            },
            "& .MuiSvgIcon-root": {
              color: "white"
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Type here"
              InputProps={{
                ...params.InputProps,
                style: { color: "white" }
              }}
            />
          )}
        />
      </Stack>

      <Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <CalendarMonthIcon fontSize="small" sx={{ color: "#e0dada" }} />
          <Typography variant="caption" sx={{ color: "#e0dada" }}>
            Check In
          </Typography>
        </Stack>
        <TextField
          type="date"
          size="small"
          InputLabelProps={{ shrink: true }}
           sx={{
            "& input": { color: "rgba(255,255,255,0.4)" },
            "& fieldset": { borderColor: "rgba(255,255,255,0.4)" }
          }}
        />
      </Stack>

      <Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <CalendarMonthIcon fontSize="small" sx={{ color: "#e0dada" }} />
          <Typography variant="caption" sx={{ color: "#e0dada" }}>
            Check Out
          </Typography>
        </Stack>
        <TextField
          type="date"
          size="small"
          InputLabelProps={{ shrink: true }}
           sx={{
            "& input": { color: "rgba(255,255,255,0.4)" },
            "& fieldset": { borderColor: "rgba(255,255,255,0.4)" }
          }}
        />
      </Stack>

      <Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <PeopleIcon fontSize="small" sx={{ color: "#e0dada" }} />
          <Typography variant="caption" sx={{ color: "#e0dada" }}>
            Guests
          </Typography>
        </Stack>
        <TextField
          type="number"
          inputProps={{ min: 1, max: 6 }}
          size="small"
          sx={{
            "& input": { color: "rgba(255,255,255,0.4)" },
            "& fieldset": { borderColor: "rgba(255,255,255,0.4)" },
            width : 90
          }}
        />
      </Stack>

      <Button
        variant="contained"
        startIcon={<SearchIcon />}
        sx={{
          backgroundColor: "rgba(73,185,255,0.5)",
          height: "40px",
          px: 3,
          "&:hover": {
            backgroundColor: "rgba(94, 192, 252, 0.55)"
          }
        }}
      >
        Search
      </Button>
    </Box>
    </Box>

    {/* <Box
      sx={{
        height: 450,
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(16, 123, 185, 0.25) 100%)"
      }}
    /> */}

    <Box
      sx={{
        display: { xs: "block", md: "none" }, // mobile only
        px: 2,
        pb: 4
      }}
    >
      <Box
        sx={{
        mt: "40px",
        position: "relative",
        zIndex: 2,
        p: 3,
        borderRadius: 4,
        background: "rgb(17, 24, 39)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.2)",
        color: "white",
        boxShadow: "0 20px 40px rgba(0,0,0,0.25)"
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            fontWeight: 600,
            color: "white"
          }}
        >
          Find Your Stay
        </Typography>

        <Stack spacing={2}>
            <Autocomplete
              options={cities}
              sx={{
                "& .MuiInputBase-root": {
                  color: "black",          // text color
                  backgroundColor: "white", // input background
                  borderRadius: 1
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0,0,0,0.2)" // optional border
                }
              }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Destination" />
              )}
            />

            <Stack direction="row" spacing={2}>
              <TextField 
              sx={{
                input: { color: "black" },
                backgroundColor: "white",
                borderRadius: 1,
              }}
              type="date" fullWidth />
              <TextField 
              sx={{
                input: { color: "black" },
                backgroundColor: "white",
                borderRadius: 1,
              }}
              type="date" fullWidth />
            </Stack>

            <Button
             sx={{
                backgroundColor: "black",
                color: "white",
                "&:hover": { backgroundColor: "#222" },
              }}
              startIcon={<SearchIcon />}
              fullWidth
            >
              Search Hotels
            </Button>
          </Stack>
      </Box>
    </Box>






    {/* <Box
      sx={{
        display: { xs: "block", md: "none" },
        mt: 6,
        mx: 2,
        p: 3,
        borderRadius: 3,
        background: "rgba(145,180,251,0.15)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 15px 40px rgba(0,0,0,0.3)"
      }}
    >
      <Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: 600 }}
      >
        Find Your Stay
      </Typography>
      <Stack spacing={2}>
        <Autocomplete
          options={cities}
          renderInput={(params) => (
            <TextField {...params} placeholder="Destination" />
          )}
        />

        <Stack direction="row" spacing={2}>
          <TextField type="date" fullWidth />
          <TextField type="date" fullWidth />
        </Stack>

        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          fullWidth
          sx={{
            backgroundColor: "rgba(73,185,255,0.6)"
          }}
        >
          Search Hotels
        </Button>
      </Stack>
    </Box> */}
    </>
  );
};
export default Hero