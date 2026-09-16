import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
  Stack
} from "@mui/material";

const HotelCard = ({ room, index, assets }) => {
  return (
    <Card
      component={Link}
      to={`/rooms/${room._id}`}
      onClick={() => scrollTo(0, 0)}
      sx={{
        width: "100%",
        display: "block",
        textDecoration: "none",
        borderRadius: 3,
        boxShadow: "0px 4px 4px rgba(0,0,0,0.05)",
        position: "relative",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
        }
      }}
    >
      {/* Image */}
      <Box sx={{ 
        borderRadius: 3,
        overflow: "hidden",
        position: "relative" 
      }}>
        <CardMedia
          component="img"
          image={room.images[0]}
          alt="room-image"
          sx={{
            height: 180,
            width: "100%",
            objectFit: "cover",
          }}
        />
        {index % 2 === 0 && (
          <Chip
            label="Best Seller"
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              backgroundColor: "white",
              fontWeight: 500,
            }}
          />
        )}
      </Box>

      <CardContent>
        {/* Hotel name + rating */}
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            {room.hotel.name}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Box
              component="img"
              src={assets.starIconFilled}
              alt="star"
              sx={{ width: 16 }}
            />
            <Typography variant="body2">4.5</Typography>
          </Stack>
        </Stack>

        {/* Location */}
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
          <Box
            component="img"
            src={assets.locationIcon}
            alt="location"
            sx={{ width: 16 }}
          />
          <Typography variant="body2" color="text.secondary">
            {room.hotel.address}
          </Typography>
        </Stack>

        {/* Price + Button */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 2 }}
        >
          <Typography variant="body1">
            <span style={{ fontSize: "20px", fontWeight: 600 }}>
              ${room.pricePerNight}
            </span>{" "}
            /night
          </Typography>

          <Button
            variant="outlined"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Book Now
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default HotelCard;