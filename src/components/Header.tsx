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



const pages = ['الرئيسية', 'الآسعار', 'كلم المبيعات'];
const menuElementsUser = ['تتبع شحنتك', 'تسجيل الدخول'];

const Header = () => {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" sx={{ width: '100vw' }}>
            <Container maxWidth="xl" sx={{
                width: '100%',
                display: 'flex',
                justifyContent: "space-around"
            }}>
                {/* WEb */}
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    LOGO
                </Typography>

                {/* WEb */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>

                <Box display="flex">
                    {menuElementsUser.map((item) => (
                        <Button
                            key={item}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {item}
                        </Button>
                    ))}
                    <Button
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        ENG
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
                                <Typography textAlign="center">{page}</Typography>
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