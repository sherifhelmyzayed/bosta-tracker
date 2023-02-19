import { Box, Container, Grid, Typography, Stepper, Step, StepLabel, StepIconProps, useMediaQuery } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import SaveIcon from '@mui/icons-material/Save';
import TaskIcon from '@mui/icons-material/Task';
import DoneIcon from '@mui/icons-material/Done';
import { useSelector } from 'react-redux';
import dateTimeParser from '../utils/dateParser';
import translate from '../utils/translate';
import stageDetect from '../utils/stageNum';
import { useEffect, useState } from 'react';



const PackageInfo = () => {
    const [delStatus, setDelStatus] = useState("red")

    // detect language change
    const language = useSelector(((state: any) => state.languageReducer)).language

    // main data object
    const data = useSelector((state: any) => state.dataReducer).data;

    // parsing data 
    const promisedDate = dateTimeParser(data.PromisedDate, language)
    const lastUpdateTime = dateTimeParser(data.TransitEvents[data.TransitEvents.length - 1].timestamp, language);

    // translation
    const statusText = translate(data.CurrentStatus.state, language)

    // detect stage Number
    const stageNum = stageDetect(data.CurrentStatus.state);

    // detect small screen fror style configurations
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));


    const steps = [
        'Ticket created',
        'Package received',
        'Out for delivery',
        'Package delivered'
    ];

    console.log(data.CurrentStatus.state);
    
    useEffect(() => {
        if (data.CurrentStatus.state === "DELIVERED") {
            setDelStatus("green")
        } else if (data.CurrentStatus.state === "NOT_YET_SHIPPED") {
            setDelStatus("yellow")
        } else {
            setDelStatus("red")
        }
    }, [])




    // change here from arabic to english
    const QontoConnector = styled(StepConnector)(({ theme }) => ({

        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 20,
            left: language == "eng" ? 'calc(-50% + 8px)' : 'calc(50% + 8px)',
            right: language == "eng" ? 'calc(50% + 8px)' : 'calc(-50% + 8px)',
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: delStatus,
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: delStatus,
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
            borderTopWidth: 8,
            borderRadius: 1,
        },
    }));

    const ColorlibStepIconRoot = styled('div')<{
        ownerState: { completed?: boolean; active?: boolean };
    }>(({ theme, ownerState }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? "rba(0,0,0,0)" : '#f8f8f8',
        zIndex: 1,
        color: "white",
        width: 50,
        height: 50,
        display: 'flex',
        border: "2px solid",
        borderRadius: '50%',
        justifyContent: 'center',
        borderColor: "#e8e8e8",
        alignItems: 'center',
        ...(ownerState.active && {
            backgroundColor: delStatus,
            border: 'none'
        }),
        ...(ownerState.completed && {
            backgroundColor: delStatus,
            width: 1,
            height: 1,
            padding: 10,
            marginTop: 13,
            border: 'none'
        }),
    }));


    function ColorlibStepIcon(props: StepIconProps) {
        const { active, completed, className } = props;

        const icons: { [index: string]: React.ReactElement } = {
            1: <TaskIcon />,
            2: <WarehouseIcon />,
            3: <LocalShippingIcon />,
            4: <SaveIcon />,
        };

        return (
            <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
                {completed ? (
                    <DoneIcon sx={{ width: "15px" }} />
                ) : (
                    icons[String(props.icon)]
                )}

            </ColorlibStepIconRoot>
        );
    }




    return (
        <Container sx={{ mt: 8, my: 4 }}>
            <Box display={"flex"} flexDirection={"column"} borderRadius={3} sx={{ border: "1px solid #e8e8e8" }}>
                {/* first row */}
                <Grid container py={4} px={2} borderBottom={1}>
                    <Grid item xs={12} md={3} display="flex" alignItems={"start"} flexDirection="column" mb={isSmall ? 3 : 0}>
                        <Box display="flex">
                            <Typography variant='packageDetailTitle' component="h3" color="secondary.dark">
                                {translate("Package number", language)}
                            </Typography>
                            <Typography mx={1} variant='packageDetailTitle' component="h3" color="secondary.dark">
                                {data.TrackingNumber}
                            </Typography>
                        </Box>
                        <Typography mt={2} variant='packageInfoDesc' component="h3" sx={{color: delStatus}}>
                            {statusText}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={4} display="flex" alignItems={"start"} flexDirection="column" mb={isSmall ? 3 : 0}>
                        <Typography variant='packageDetailTitle' component="h3" color="secondary.dark">
                            {translate("Last update", language)}
                        </Typography>
                        <Box display="flex" mt={2} >
                            <Typography variant='packageInfoDesc' component="h3" color="dark.main">
                                {lastUpdateTime.dayInWeek}
                            </Typography>
                            <Typography mx={0.5} variant='packageInfoDesc' component="h3" color="dark.main">
                                {lastUpdateTime.date}
                            </Typography>
                            <Typography mx={0.5} variant='packageInfoDesc' component="h3" color="dark.main">
                                {lastUpdateTime.time}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={3} display="flex" alignItems={"start"} flexDirection="column" mb={isSmall ? 3 : 0}>
                        <Typography variant='packageDetailTitle' component="h3" color="secondary.dark">
                            {translate("Seller", language)}
                        </Typography>
                        <Typography mt={2} variant='packageInfoDesc' component="h3" color="dark.main">
                            {data.provider}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={2} display="flex" alignItems={"start"} flexDirection="column" mb={isSmall ? 3 : 0}>
                        <Typography variant='packageDetailTitle' component="h3" color="secondary.dark">
                            {translate("Delivery Date", language)}
                        </Typography>
                        <Box display="flex" mt={2} >
                            <Typography variant='packageInfoDesc' component="h3" color="dark.main">
                                {promisedDate.dayInMonth}
                            </Typography>
                            <Typography mx={0.5} variant='packageInfoDesc' component="h3" color="dark.main">
                                {promisedDate.month}
                            </Typography>
                            <Typography mx={0.5} variant='packageInfoDesc' component="h3" color="dark.main">
                                {promisedDate.year}
                            </Typography>
                        </Box>

                    </Grid>

                </Grid>
                <Box borderBottom={2} borderColor={"secondary.main"} />
                <Grid container py={4} px={2}>
                    <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={stageNum} alternativeLabel connector={<QontoConnector />} >
                            {steps.map((label, key) => (
                                <Step key={label} sx={{}} >
                                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                                        <Typography mt={key < stageNum ? 4 : 0} variant='stepperTitle' component="h3" color="dark.main">
                                            {translate(label, language)}
                                        </Typography>
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                </Grid>
            </Box>
        </Container >
    )
}

export default PackageInfo