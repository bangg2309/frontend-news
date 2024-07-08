import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {alpha, Box, Button, Container, InputBase, styled, Toolbar, Typography, useTheme} from "@mui/material";
import {MAIN_CONCEPT} from "../theme/theme";
import Login from "../login/Login";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.grey["500"], 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.grey["700"], 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: theme.palette.text.primary,
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Header: React.FC = () => {
    const theme = useTheme();
    return (
        <>
            <Box position="static" sx={{
                // bgcolor: theme.palette.mode === 'light' ? theme.palette.common.white : 'rgba(27,27,27,1)',
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                paddingY: 2
            }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{flex: 'initial', justifyContent: 'space-around'}}>
                        {/*<Avatar alt="logo" src={`${process.env.PUBLIC_URL}/logo.png`} variant={"rounded"}/>*/}
                        <Box component="img" src={`${process.env.PUBLIC_URL}/logo.png`}
                             sx={{flexGrow: 1, maxWidth: 100}}/>

                        <Box sx={{flexGrow: 0, display: 'flex', width: {xs: {width: '100%'}, md: {width: 'auto'}}}}>
                            <Login/>
                            <Search>
                                <SearchIconWrapper>
                                    <FontAwesomeIcon style={{color: theme.palette.text.primary}}
                                                     icon={faMagnifyingGlass}/>
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{'aria-label': 'search'}}
                                />
                            </Search>
                        </Box>
                        {/*<Typography*/}
                        {/*    variant="h6"*/}
                        {/*    noWrap*/}
                        {/*    component="a"*/}
                        {/*    href="#app-bar-with-responsive-menu"*/}
                        {/*    sx={{*/}
                        {/*        mr: 2,*/}
                        {/*        display: { xs: 'none', md: 'flex' },*/}
                        {/*        fontFamily: 'monospace',*/}
                        {/*        fontWeight: 700,*/}
                        {/*        letterSpacing: '.3rem',*/}
                        {/*        // color: 'inherit',*/}
                        {/*        color:theme.palette.text.primary,*/}
                        {/*        textDecoration: 'none',*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    LOGO*/}
                        {/*</Typography>*/}

                        {/*<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>*/}
                        {/*    <IconButton*/}
                        {/*        size="large"*/}
                        {/*        aria-label="account of current user"*/}
                        {/*        aria-controls="menu-appbar"*/}
                        {/*        aria-haspopup="true"*/}
                        {/*        onClick={handleOpenNavMenu}*/}
                        {/*        // color={theme.palette.text.primary}*/}
                        {/*    >*/}
                        {/*        <FontAwesomeIcon icon={faBars} />*/}
                        {/*    </IconButton>*/}
                        {/*    <Menu*/}
                        {/*        id="menu-appbar"*/}
                        {/*        anchorEl={anchorElNav}*/}
                        {/*        anchorOrigin={{*/}
                        {/*            vertical: 'bottom',*/}
                        {/*            horizontal: 'left',*/}
                        {/*        }}*/}
                        {/*        keepMounted*/}
                        {/*        transformOrigin={{*/}
                        {/*            vertical: 'top',*/}
                        {/*            horizontal: 'left',*/}
                        {/*        }}*/}
                        {/*        open={Boolean(anchorElNav)}*/}
                        {/*        onClose={handleCloseNavMenu}*/}
                        {/*        sx={{*/}
                        {/*            display: { xs: 'block', md: 'none' },*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        {pages.map((page) => (*/}
                        {/*            <MenuItem key={page} onClick={handleCloseNavMenu}>*/}
                        {/*                <Typography textAlign="center">{page}</Typography>*/}
                        {/*            </MenuItem>*/}
                        {/*        ))}*/}
                        {/*    </Menu>*/}
                        {/*</Box>*/}
                        {/*/!*icon logo*!/*/}
                        {/*<Typography*/}
                        {/*    variant="h5"*/}
                        {/*    noWrap*/}
                        {/*    component="a"*/}
                        {/*    href="#app-bar-with-responsive-menu"*/}
                        {/*    sx={{*/}
                        {/*        mr: 2,*/}
                        {/*        display: { xs: 'flex', md: 'none' },*/}
                        {/*        flexGrow: 1,*/}
                        {/*        fontFamily: 'monospace',*/}
                        {/*        fontWeight: 700,*/}
                        {/*        letterSpacing: '.3rem',*/}
                        {/*        color: theme.palette.text.primary,*/}
                        {/*        // color 'inherit',*/}
                        {/*        textDecoration: 'none',*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    LOGO*/}
                        {/*</Typography>*/}
                        {/*<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>*/}
                        {/*    {pages.map((page) => (*/}
                        {/*        <Button*/}
                        {/*            key={page}*/}
                        {/*            onClick={handleCloseNavMenu}*/}
                        {/*            sx={{ my: 2,*/}
                        {/*                color: theme.palette.text.primary , display: 'block' }}*/}
                        {/*        >*/}
                        {/*            {page}*/}
                        {/*        </Button>*/}
                        {/*    ))}*/}
                        {/*</Box>*/}

                        {/*<Box sx={{ flexGrow: 0 }}>*/}
                        {/*    <Tooltip title="Open settings">*/}
                        {/*        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>*/}
                        {/*            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />*/}
                        {/*        </IconButton>*/}
                        {/*    </Tooltip>*/}
                        {/*    <Menu*/}
                        {/*        sx={{ mt: '45px' }}*/}
                        {/*        id="menu-appbar"*/}
                        {/*        anchorEl={anchorElUser}*/}
                        {/*        anchorOrigin={{*/}
                        {/*            vertical: 'top',*/}
                        {/*            horizontal: 'right',*/}
                        {/*        }}*/}
                        {/*        keepMounted*/}
                        {/*        transformOrigin={{*/}
                        {/*            vertical: 'top',*/}
                        {/*            horizontal: 'right',*/}
                        {/*        }}*/}
                        {/*        open={Boolean(anchorElUser)}*/}
                        {/*        onClose={handleCloseUserMenu}*/}
                        {/*    >*/}
                        {/*        {settings.map((setting) => (*/}
                        {/*            <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
                        {/*                <Typography textAlign="center">{setting}</Typography>*/}
                        {/*            </MenuItem>*/}
                        {/*        ))}*/}
                        {/*    </Menu>*/}
                        {/*</Box>*/}
                    </Toolbar>
                </Container>
            </Box>
        </>

    );
}
export default Header;