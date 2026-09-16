import React from 'react'
import Title from './Title'
import { testimonials } from '../../assets/assets'
import StarRating from './StarRating'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const Testimonial = () => {
  return (
    <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 3, md: 8, lg: 12 },
          backgroundColor: "#f8fafc",
          pt: 10,
          pb: 15
        }}
      >
        <Title title="What our Guests Say" subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodtions around the world."/>
       
       <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
        mt: 10,
        mb: 5
      }}
    >
      {testimonials.map((testimonial) => (
        <Card
          key={testimonial.id}
          sx={{
            maxWidth: 300,
            borderRadius: 3,
            boxShadow: 3
          }}
        >
          <CardContent>
            {/* Top Section */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{ width: 48, height: 48 }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontFamily: "Playfair Display" }}
                >
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.address}
                </Typography>
              </Box>
            </Stack>

            {/* Stars */}
            <StarRating/>

            {/* Review */}
            <Typography
              variant="body2"
              color="text.secondary"
              mt={2}
            >
              "{testimonial.review}"
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
    </Box>
  )
}

export default Testimonial