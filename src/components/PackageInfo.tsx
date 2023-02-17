import { Box, Container, Grid, Typography, Stepper, Step, StepLabel } from '@mui/material'

const steps = [
    'Package initialized',
    'Package delivered from sellet',
    'Seller name',
    'Delivery date'
];

const PackageInfo = () => {
    return (
        <Container sx={{ my: 8 }}>
            <Box display={"flex"} flexDirection={"column"} borderRadius={3} border={1}>
                {/* first row */}
                <Grid container py={4} px={2} borderBottom={1}>
                    <Grid item md={3}>
                        <Typography>
                            Shippment number
                        </Typography>
                        <Typography>
                            Shipping status
                        </Typography>
                    </Grid>

                    <Grid item md={3}>
                        <Typography>
                            Shippment number
                        </Typography>
                        <Typography>
                            Shipping status
                        </Typography>
                    </Grid>

                    <Grid item md={3}>
                        <Typography>
                            Shippment number
                        </Typography>
                        <Typography>
                            Shipping status
                        </Typography>
                    </Grid>

                    <Grid item md={3}>
                        <Typography>
                            Shippment number
                        </Typography>
                        <Typography>
                            Shipping status
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container py={4} px={2} borderBottom={1}>
                    <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={2} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                </Grid>
            </Box>
        </Container>
    )
}

export default PackageInfo