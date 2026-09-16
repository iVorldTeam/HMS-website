import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Stack,
  Checkbox,
  Radio,
  FormControlLabel,
  Divider,
} from "@mui/material";

import { facilityIcons, roomsDummyData, assets } from "../../assets/assets";
import StarRating from "../../components/userCommon/StarRating";

const CheckBox = ({ label }) => (
  <FormControlLabel
    control={<Checkbox size="small" />}
    label={<Typography fontSize="14px">{label}</Typography>}
  />
);

const RadioButton = ({ label }) => (
  <FormControlLabel
    control={<Radio size="small" />}
    label={<Typography fontSize="14px">{label}</Typography>}
  />
);

const Allrooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);

  const roomTypes = [
    "Single Bed",
    "Double Bed",
    "Luxury Room",
    "Family Suite",
  ];

  const priceRanges = [
    "0 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000",
  ];

  const sortOptions = [
    "Price Low to High",
    "Price High to Low",
    "Newest First",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", lg: "row" },
        justifyContent: "space-between",
        pt: { xs: "120px", md: "140px" },
        px: { xs: 2, md: 6, lg: 10, xl: 16 },
        gap: 4,
      }}
    >
      {/* LEFT SIDE */}
      <Box flex={1}>
        {/* Heading */}
        <Box mb={4}>
          <Typography fontSize={{ xs: 28, md: 40 }} fontWeight={600}>
            Hotel Rooms
          </Typography>
          <Typography color="gray" mt={1}>
            Take advantage of our limited-time offers and special packages to
            enhance your stay.
          </Typography>
        </Box>

        {/* Rooms */}
        {roomsDummyData.map((room) => (
          <Box key={room._id} py={4}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              borderBottom="1px solid #e5e7eb"
              pb={4}
            >
              {/* Image */}
              <Box
                component="img"
                src={room.images[0]}
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  window.scrollTo(0, 0);
                }}
                sx={{
                  width: { md: "50%" },
                  maxHeight: 260,
                  borderRadius: 2,
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />

              {/* Content */}
              <Box flex={1}>
                <Typography color="gray">{room.hotel.city}</Typography>

                <Typography
                  fontSize={24}
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/rooms/${room._id}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  {room.hotel.name}
                </Typography>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <StarRating />
                  <Typography>200+ reviews</Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1} mt={1}>
                  <Box
                    component="img"
                    src={assets.locationIcon}
                    sx={{ width: 16 }}
                  />
                  <Typography fontSize={14}>
                    {room.hotel.address}
                  </Typography>
                </Stack>

                {/* Amenities */}
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  gap={2}
                  mt={2}
                  mb={2}
                >
                  {room.amenities.map((item, index) => (
                    <Stack
                      key={index}
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      sx={{
                        px: 1.5,
                        py: 1,
                        borderRadius: 2,
                        backgroundColor: "#F5F5FF",
                      }}
                    >
                      <Box
                        component="img"
                        src={facilityIcons[item]}
                        sx={{ width: 20, height: 20 }}
                      />
                      <Typography fontSize={12}>{item}</Typography>
                    </Stack>
                  ))}
                </Stack>

                <Typography fontSize={18} fontWeight={500}>
                  ${room.pricePerNight} / night
                </Typography>
              </Box>
            </Stack>
          </Box>
        ))}
      </Box>

      {/* RIGHT SIDE (FILTERS) */}
      <Box
        sx={{
          width: 300,
          border: "1px solid #e5e7eb",
          backgroundColor: "white",
          mb: { xs: 4, lg: 0 },
          mt: { lg: 8 },
        }}
      >
        {/* Header */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          px={2}
          py={1.5}
          borderBottom="1px solid #e5e7eb"
        >
          <Typography fontWeight={600}>FILTERS</Typography>
          <Typography
            fontSize={12}
            sx={{ cursor: "pointer" }}
            onClick={() => setOpenFilters(!openFilters)}
          >
            {openFilters ? "HIDE" : "SHOW"}
          </Typography>
        </Stack>

        {/* Content */}
        <Box
          sx={{
            display: openFilters ? "block" : { xs: "none", lg: "block" },
            px: 2,
            py: 2,
          }}
        >
          {/* Room Types */}
          <Typography fontWeight={500}>Popular Filters</Typography>
          {roomTypes.map((item, i) => (
            <CheckBox key={i} label={item} />
          ))}

          <Divider sx={{ my: 2 }} />

          {/* Price */}
          <Typography fontWeight={500}>Price Range</Typography>
          {priceRanges.map((item, i) => (
            <CheckBox key={i} label={item} />
          ))}

          <Divider sx={{ my: 2 }} />

          {/* Sort */}
          <Typography fontWeight={500}>Sort By</Typography>
          {sortOptions.map((item, i) => (
            <RadioButton key={i} label={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Allrooms;