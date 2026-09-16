import React from 'react'
import {roomsDummyData , assets} from '../../assets/assets'
import HotelCard from './HotelCard'
import { Button , Box } from "@mui/material";
import Title from './Title';
import { useNavigate } from 'react-router-dom';

const FeaturedDestination = () => {
  const navigate = useNavigate()
  return (
    <Box
  sx={{
    px: { xs: 3, md: 8, lg: 12 },
    py: 10,
    backgroundColor: "#f8fafc",
  }}
>

    <Title title='Featured Destination' subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'></Title>


  <Box
    sx={{
      maxWidth: "1200px",
      mt: 6,
      mx: "auto",
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "1fr 1fr",
        md: "1fr 1fr 1fr",
        lg: "1fr 1fr 1fr 1fr", // ✅ FORCES 4
      },
      gap: 3,
    }}
  >
    {roomsDummyData.slice(0, 4).map((room, index) => (
      <HotelCard
        key={room._id}
        room={room}
        index={index}
        assets={assets}
      />
    ))}
  </Box>

  <Box display="flex" justifyContent="center">
      <Button
        onClick={() => {
          navigate("/Allrooms");
          window.scrollTo(0, 0);
        }}
        variant="outlined"
        sx={{
          my: 8, // matches my-16 (approx)
          px: 2,
          py: 1,
          fontSize: "14px",
          fontWeight: 500,
          textTransform: "none",
          fontFamily: "inherit", // 🔥 THIS fixes the font mismatch
          border: "1px solid #d1d5db",
          borderRadius: "6px",
          color: "#111",
          backgroundColor: "#fff",
          "&:hover": {
            backgroundColor: "#f9fafb",
            border: "1px solid #d1d5db",
          },
        }}
      >
        View All Destinations
      </Button>
    </Box>

</Box>
  )
}

export default FeaturedDestination