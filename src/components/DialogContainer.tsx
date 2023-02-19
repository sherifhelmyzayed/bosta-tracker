import { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../slices/dataSlice';
import translate from '../utils/translate';

const DialogContainer = (props: { modelOpen: any, setModelOpen: any }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const textRef = useRef<any>(null);

    const language = useSelector(((state: any) => state.languageReducer)).language
    const dispatch = useDispatch()


    const handleClose = () => {
        setError(false);
        setLoading(true);

        setTimeout(() => {
            axios.get(`https://tracking.bosta.co/shipments/track/${textRef.current.value}`).then((response) => {
                const data = response.data;
                dispatch(fetchData({ url: textRef.current.value, data: data }))
                setLoading(false);
                props.setModelOpen(false);
            }).catch((error) => {
                setError(true);
                setLoading(false);
            })
        }, 500)

    };

    return (
        <div dir={`${language.language === 'eng' ? 'ltr' : 'rtl'}`}>
            <Dialog open={props.modelOpen} >
                <DialogTitle>
                    {translate("Tracker", language.language)}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {translate("To proceed in the app add a tracking number. You can use one of the following to test", language.language)}
                        <br />
                        <br />
                        {translate("ex: 6636234, 7234258, 9442984,1094442", language.language)}
                        <br />

                        {error ? (
                            <Typography color="primary.main">
                                Try another code
                            </Typography>
                        ) : null}

                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="رقم الشحنة"
                        type="text"
                        fullWidth
                        variant="standard"
                        inputRef={textRef}
                    />
                </DialogContent>
                <DialogActions>
                    <Button disabled={loading} variant='contained' onClick={handleClose}>
                        {loading ? (
                            <CircularProgress sx={{ width: 5, height: 5 }} color="primary" />
                        ) : (
                            translate("TRACK", language.language)
                        )}

                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DialogContainer