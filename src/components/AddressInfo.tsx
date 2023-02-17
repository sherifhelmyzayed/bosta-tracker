import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const AddressInfo = () => {
    return (
        <Box>

            <Box bgcolor={"white"} padding={2} border={1} borderRadius={2}>
                <Typography color={"black"}>
                    here is a random address displayed here in along string length to test wrapping
                </Typography>
            </Box>
            <Box bgcolor={"white"} display="flex">
                <Box>Image Here</Box>
                <Box display="flex" flexDirection={"column"}>
                    <Typography>Do you have a proplem</Typography>
                    <Button>Contact US</Button>
                </Box>

            </Box>
        </Box>
    )
}

export default AddressInfo