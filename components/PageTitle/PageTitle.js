import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const PageTitle = ( {title, subtitle} ) => {
  return (
    <Box sx={{ py: 2 }}>
        <Typography variant="h4">
            {title}
        </Typography>
        <Typography variant="subtitle1" color='secondary'>
            {subtitle}
        </Typography>
        <hr />
    </Box>
  )
}

export default PageTitle