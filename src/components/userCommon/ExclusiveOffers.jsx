import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../../assets/assets'
import { Box , Button , Grid , Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const ExclusiveOffers = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 3, md: 8, lg: 12, xl: 16 },
        pt: 10,
        pb: 15,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Title
          align="left"
          title="Exclusive Offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        />

        <Button
          sx={{
            mt: { xs: 6, md: 0 },
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontWeight: 500,
            textTransform: "none",
            fontFamily: "inherit",
            color: "black",
            "&:hover .arrow": {
              transform: "translateX(4px)",
            },
          }}
        >
          View All Offers

          <ArrowForwardIcon
            className="arrow"
            sx={{
              transition: "all 0.3s ease",
            }}
          />
        </Button>
      </Box>

       <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        px: { xs: 3, md: 8, lg: 12, xl: 16 },
        mt: 12,
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: "1400px",
          justifyContent: "center", // <-- CENTER ROWS
        }}
      >
        {exclusiveOffers.map((item) => (
          <Grid item xs={12} md={6} lg={4} key={item._id}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                pt: { xs: 12, md: 18 },
                px: 4,
                pb: 5,
                borderRadius: 3,
                color: "white",
                backgroundImage: `url(${item.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "300px",
              }}
            >
              {/* Price badge */}
              <Typography
                sx={{
                  position: "absolute",
                  top: 4,
                  left: 4,
                  px: 1.5,
                  py: 0.5,
                  bgcolor: "white",
                  color: "#1f2937",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                  borderRadius: "9999px",
                }}
              >
                {item.priceOff}% OFF
              </Typography>

              {/* Content */}
              <Box>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    fontFamily: "Playfair Display",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography>{item.description}</Typography>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    mt: 1,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  Expires {item.expiryDate}
                </Typography>
              </Box>

              {/* Button */}
              <Button
                sx={{
                  mt: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontWeight: 500,
                  textTransform: "none",
                  color: "white",
                  "&:hover .arrow": {
                    transform: "translateX(4px)",
                  },
                }}
              >
                View Offers
                <ArrowForwardIcon
                  className="arrow"
                  sx={{
                    transition: "all 0.3s ease",
                    filter: "invert(1)",
                  }}
                />
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Box>
    )
}

export default ExclusiveOffers