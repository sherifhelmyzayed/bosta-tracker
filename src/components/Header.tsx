import { useState } from 'react';
import {
    AppBar,
    Box,
    IconButton,
    Typography,
    Menu,
    Container,
    Button,
    MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../slices/languageSlice';
import translate from '../utils/translate';



const pages = ['Home', "Pricing", "Contact Sales"];
const menuElementsUser = ["Track Shipment", 'Login'];

const Header = (props: { setModelOpen: any }) => {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const language = useSelector(((state: any) => state.languageReducer))

    const dispatch = useDispatch()




    return (
        <AppBar position="static" sx={{ width: '100vw', backgroundColor: "#f8f8f8", boxShadow: "none", borderBottom: "1px solid #e8e8e8" }}>
            <Container maxWidth="xl" sx={{
                width: '100%',
                display: 'flex',
                justifyContent: "space-around",
                borderBottom: ''
            }}>
                {/* WEb */}
                {/* <Typography component="p" color="dark.main"> */}

                    <Typography
                        variant='headerMenu'
                        component="a"
                        color="primary.main"
                        href="/"
                        pt={3}
                        sx={{

                            display: { xs: 'none', md: 'flex' },
                            textDecoration: 'none',
                        }}
                    >
                        {translate("Bosta", language.language)}


                    </Typography>

                    {/* WEb */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                // @ts-ignore
                                color={"dark"}
                                sx={{ my: 2, mx: 3, color: 'white', display: 'block' }}
                            >
                                <Typography variant='headerMenu' component="p" color="dark.main">
                                    {translate(page, language.language)}
                                </Typography>
                            </Button>
                        ))}
                    </Box>

                    <Box display="flex">
                        {menuElementsUser.map((item, key) => (
                            <Button
                                key={item}
                                sx={{ my: 2, color: 'white', display: 'block' }}

                                onClick={() => {
                                    console.log("test");
                                    if (key === 0) {
                                        props.setModelOpen(true)
                                    }
                                }}
                            >
                                <Typography mx={2} variant='headerMenu' component="p" color="dark.main">
                                    {translate(item, language.language)}
                                </Typography>
                            </Button>
                        ))}
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Typography variant='headerMenu' component="p" color="primary.main" onClick={() => {
                                if (language.language == "eng") {
                                    dispatch(changeLanguage({ language: "ar" }))
                                } else {
                                    dispatch(changeLanguage({ language: "eng" }))
                                }
                            }}>
                                {language.language == "eng" ? "ع" : "ENG"}
                            </Typography>

                        </Button>
                    </Box>

                    {/* Mobile */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        {translate(page, language.language)}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Mobile */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
            </Container>
        </AppBar>
    )
}

export default Header