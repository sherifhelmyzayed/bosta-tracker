import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import { useSelector } from 'react-redux';
import dateTimeParser from '../utils/dateParser';
import translate from '../utils/translate';



const PackageHistory = () => {
    // detect language change
    const language = useSelector(((state: any) => state.languageReducer)).language

    // main data object
    const data = useSelector((state: any) => state.dataReducer).data;

    return (
        <TableContainer >
            <Table sx={{ minWidth: 50, width: '100%', border: "1px solid #e8e8e8", borderRadius: 50 }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#e1e1e1" }}>
                    <TableRow >
                        <TableCell align="right">
                            <Typography variant='tableHeader' component="h3" color="secondary.dark">
                                {translate("branch", language)}
                            </Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant='tableHeader' component="h3" color="secondary.dark">
                                {translate("date", language)}
                            </Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant='tableHeader' component="h3" color="secondary.dark">
                                {translate("time", language)}
                            </Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant='tableHeader' component="h3" color="secondary.dark">
                                {translate("details", language)}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.TransitEvents.map((row: any, key: number) => {
                            const lastUpdateTime = dateTimeParser(row.timestamp, language);
                            return (
                                <TableRow
                                    key={key}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right" component="th" scope="row" sx={{ p: 0 }}>
                                        {translate("Nasr city", language)}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography variant='tableRow' component="h3" color="dark.main">
                                            {translate(lastUpdateTime.date, language)}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography variant='tableRow' component="h3" color="dark.main">
                                            {translate(lastUpdateTime.time, language)}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography variant='tableRow' component="h3" color="dark.main">
                                            {translate(row.state, language)}
                                        </Typography>
                                        <Typography mt={1} variant='tableRowDetail' component="h3" color="primary.main">
                                            {translate(row.reason, language)}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default PackageHistory