import { Grid, Typography, Container } from '@mui/material';
import { useSelector } from 'react-redux';

import AddressInfo from './AddressInfo';
import Header from './Header';
import PackageInfo from './PackageInfo';
import PackageHistory from './PackageHistory';
import translate from '../utils/translate';

const TrackerLayouts = (props: { setModelOpen: any }) => {

    const language = useSelector(((state: any) => state.languageReducer))

    return (
        <div dir={`${language.language === 'eng' ? 'ltr' : 'rtl'}`}>
            <Header setModelOpen={props.setModelOpen} />
            <PackageInfo />
            <Container>
                <Grid container spacing={5} mb={5}>
                    <Grid item md={8}>
                        <Typography variant={'titleSub'} component="h2" color="dark.main" pb={3}>
                            {translate("shipping details", language.language)}
                        </Typography>
                        <PackageHistory />
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant={'titleSub'} component="h2" color="dark.main" pb={3}>
                            {translate("shipping address", language.language)}
                        </Typography>
                        <AddressInfo />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default TrackerLayouts