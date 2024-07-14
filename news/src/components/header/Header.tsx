import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {
    alpha,
    Box,
    Button,
    Container,
    InputAdornment,
    InputBase,
    styled,
    TextField,
    Toolbar,
    Typography,
    useTheme
} from "@mui/material";
import {MAIN_CONCEPT} from "../theme/theme";
import {useNavigate} from "react-router-dom";
import axios from "axios";

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
                // '&::placeholder': {
                //     color: MAIN_CONCEPT.main
                // }
            },
        },
    },
}));

const Header: React.FC = () => {

    const theme = useTheme();
    const navi = useNavigate();
    const handleSearchSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            navi(`/tim-kiem/${(event.target as HTMLInputElement).value}`);
        }
    }
    useEffect(() => {
        //get locate
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
        })
    },[])
    // useEffect(() => {
    //     console.log(456)
    //     const fetchDate = async () => {
    //         console.log(123)
    //         try {
    //             console.log(345)
    //             const response = await axios
    //                 .get('http://localhost:5000/weather');
    //
    //             console.log(response);
    //             // setData(result);
    //         } catch (error: any) {
    //             console.log(error.message)
    //             // setError(error.message);
    //         } finally {
    //             console.log('final')
    //             // setLoading(false);
    //         }
    //     }
    //     fetchDate();
    // }, []);
    return (
        <>
            <Box position="static" sx={{
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                paddingY: 2
            }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{flex: 'initial', justifyContent: 'space-around'}}>
                        {/*<Avatar alt="logo" src={`${process.env.PUBLIC_URL}/logo.png`} variant={"rounded"}/>*/}
                        <Box>
                            <Box component="img" src={`${process.env.PUBLIC_URL}/logo.png`}
                                 sx={{flexGrow: 1, maxWidth: 100}}/>
                        </Box>

                        <Box sx={{flexGrow: 0, display: 'flex', width: {xs: {width: '100%'}, md: {width: 'auto'}}}}>
                            <Button sx={{":hover": {color: MAIN_CONCEPT.main}}}>
                                <Typography variant="body1"
                                            sx={{
                                                color: 'inherit',
                                                fontWeight: 600,
                                                display: {xs: 'none', md: 'flex'}
                                            }}>
                                    Đăng nhập
                                </Typography>
                                <FontAwesomeIcon style={{
                                    color: "inherit",
                                    margin: '0 5 0 5',
                                }} size={'2x'} icon={faCircleUser}/>
                            </Button>
                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-small"
                                placeholder="Tìm kiếm"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                        </InputAdornment>
                                    ),
                                    onKeyDown: handleSearchSubmit,
                                }}
                                size={'small'}
                                // onChange={handleSearchSubmit}
                                sx={{
                                    width: 'wrap-content',
                                    minWidth: '8rem',
                                    '& .Mui-focused': {
                                        '& .MuiInputBase-input': {
                                            width: '12rem',
                                            transition: theme.transitions.create('width', {duration: 500}),
                                        },
                                    },
                                    '& .MuiInputBase-input': {
                                        width: '8rem',
                                        transition: theme.transitions.create('width', {duration: 500}),
                                    }
                                }}
                            />
                        </Box>
                    </Toolbar>
                </Container>
            </Box>
        </>

    );
}
export default Header;