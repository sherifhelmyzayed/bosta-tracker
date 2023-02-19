import { Box, Button, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import translate from '../utils/translate'

const AddressInfo = () => {
    const language = useSelector(((state: any) => state.languageReducer)).language
    return (
        <Box>
            <Box bgcolor={"white"} padding={2} border={1} borderRadius={2}>
                <Typography color={"black"}>
                </Typography>
            </Box>
            <Box bgcolor={"white"} display="flex">
                <Box display="flex" flexDirection={"column"}>
                    <Typography variant='contactTitle' component="p" color="dark.main" mb={3}>
                        {translate("Do you have a proplem in your shipment", language)}
                    </Typography>
                    <Button variant='contained' sx={{ borderRadius: 3 }}>
                        <Typography variant='contactButton' component="p" color="dark.light">
                            {translate("Contact Us", language)}
                        </Typography>
                    </Button>
                </Box>

            </Box>
        </Box>
    )
}

export default AddressInfo