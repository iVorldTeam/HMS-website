import React from 'react'
import { assets } from '../../assets/assets'
import { Stack } from '@mui/material'

const StarRating = ({rating = 4}) => {
  return (
    <div>
         <Stack direction="row" spacing={0.5} mt={2}>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img src={rating > index ? assets.starIconFilled : assets.starIconOutlined} alt="star-icon" sx={{ width: 18, height: 18 }} />
                ))}
            </Stack>
    </div>
  )
}

export default StarRating