import React, {useEffect, useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {
    alpha, Autocomplete,
    Box,
    Button,
    Container, Divider,
    InputAdornment,
    InputBase, Select, Stack,
    styled,
    TextField,
    Toolbar,
    Typography,
    useTheme
} from "@mui/material";
import {MAIN_CONCEPT} from "../theme/theme";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {fetchLocate, fetchWeather} from "../../services/WeatherServices";
import {Weather} from "../../interfaces/Weather";
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
                // '&::placeholder': {
                //     color: MAIN_CONCEPT.main
                // }
            },
        },
    },
}));

const Header: React.FC = () => {
    const [weathers, setWeathers] = React.useState<Weather[]>([]); // [weather, setWeather
    const [locate, setLocate] = React.useState<string>('');

    const theme = useTheme();
    const navi = useNavigate();

    const handleSearchSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            navi(`/tim-kiem/${(event.target as HTMLInputElement).value}`);
        }
    }
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
        if (locate === '')
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    console.log(position.coords.latitude.toString(), position.coords.longitude.toString());
                    fetchLocate(position.coords.latitude.toString(), position.coords.longitude.toString()).then((data) => {
                        setLocate(() => {
                            return data;
                        });
                    });
                })
            }
    }, []);
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            //reset list of weather

            fetchWeather().then((data) => {
                setWeathers(data);
            })

        }, 3000);
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
        //get locate

    }, [])
    return (
        <>
            <Box position="static" sx={{
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                paddingY: 2
            }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{flex: 'initial', justifyContent: 'space-around'}}>
                        {/*<Avatar alt="logo" src={`${process.env.PUBLIC_URL}/logo.png`} variant={"rounded"}/>*/}
                        <Stack direction={'row'}>
                            <Box component="img" src={`${process.env.PUBLIC_URL}/logo.png`}
                                 sx={{flexGrow: 1, maxWidth: 100}}/>
                            <Divider orientation="vertical" sx={{mx: 1, borderColor: "#27272727"}} variant="fullWidth"
                                     flexItem/>

                            {/*<Select*/}
                            {/*    value={locate}*/}
                            {/*    onChange={(event) => {*/}
                            {/*        setLocate(event.target.value as string);*/}
                            {/*    }}*/}
                            {/*>*/}
                            <Autocomplete
                                freeSolo
                                size={'small'}
                                sx={{minWidth: '10rem'}}
                                disableClearable
                                value={locate}
                                onChange={(event, value) => {
                                    setLocate(value as string);
                                }}
                                options={weathers.map((option) => option.province)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        InputProps={{
                                            ...params.InputProps,
                                            type: 'search',
                                        }}
                                    />
                                )}
                            />
                            <Divider orientation="vertical" sx={{mx: 1, borderColor: "#27272727"}} variant="fullWidth"
                                     flexItem/>
                            <Typography variant="subtitle1" sx={{flexGrow: 1, fontWeight: 400,display:'flex', alignItems:'center'}}>
                                {weathers.map((weather) => {
                                    if (locate.includes(weather.province)) {
                                        return `${weather.temperature.trim()}C`
                                    }
                                })
                                }
                            </Typography>
                        </Stack>

                        <Box sx={{flexGrow: 0, display: 'flex', width: {xs: {width: '100%'}, md: {width: 'auto'}}}}>

                           <Login/>
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