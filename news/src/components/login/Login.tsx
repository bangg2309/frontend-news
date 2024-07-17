import React, {useEffect, useState, useCallback} from 'react';
import {
    Box,
    Button,
    Modal,
    TextField,
    Typography,
    Checkbox,
    FormControlLabel,
    IconButton,
    InputAdornment,
    Menu,
    MenuItem
} from '@mui/material';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser, faEye, faEyeSlash, faXmark} from '@fortawesome/free-solid-svg-icons';
import {faGoogle, faApple} from '@fortawesome/free-brands-svg-icons';
import {RootState} from '../../redux/store/store';
import {useDispatch, useSelector} from "react-redux";
import {login, logout} from "../../redux/slice/authSlice";
import {useNavigate} from "react-router-dom";

const Login: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [credentials, setCredentials] = useState({email: '', password: ''});
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const dispatch = useDispatch();
    const {user, error} = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setIsLogin(true); // Reset to login form when closing
        setAnchorEl(null); // Reset the anchorEl when modal is closed
    };
    const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(login(credentials));
    };

    const handleLogout = () => {
        dispatch(logout());
        handleMenuClose(); // Close the menu when user logs out
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleProfileRedirect = () => {
        navigate('/tai-khoan');
        handleMenuClose();
    };

    useEffect(() => {
        if (user) {
            setOpen(false); // Close the modal when login is successful
            setCredentials({email: '', password: ''}); // Optionally clear credentials
        }
    }, [user]);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        maxWidth: 800,
        bgcolor: 'background.paper',
        borderRadius: '10px',
        boxShadow: 24,
        p: 4,
    };

    const popupStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: 'rgba(221, 221, 221, 0.6) 0 5px',
        padding: '12px'
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    };

    const rightSectionStyle = {
        display: 'none',
        '@media (min-width:600px)': {
            display: 'block',
            marginLeft: 2,
            flex: 1,
            backgroundImage: `url(${process.env.PUBLIC_URL}/background-login.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        },
    };

    return (
        <div>
            {!user ? (
                <Button sx={{":hover": {color: '#2d67ad'}}} onClick={handleOpen}>
                    <Typography variant="body1"
                                sx={{color: 'inherit', fontWeight: 600, display: {xs: 'none', md: 'flex'}}}>
                        Đăng nhập
                    </Typography>
                    <FontAwesomeIcon style={{color: "inherit", margin: '0 5px'}} size={'2x'} icon={faCircleUser}/>
                </Button>
            ) : (
                <div>
                    <Button sx={{":hover": {color: '#2d67ad'}}} onClick={handleMenuOpen}>
                        <FontAwesomeIcon style={{color: "inherit", margin: '0 5px'}} size={'2x'} icon={faCircleUser}/>
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        MenuListProps={{onClick: handleMenuClose}}
                    >
                        <MenuItem sx={{":hover": {color: (theme) => theme.palette.grey[500]}}}
                                  onClick={handleProfileRedirect}>Thông tin
                            chung</MenuItem>
                        <MenuItem sx={{":hover": {color: (theme) => theme.palette.grey[500]}}}
                                  onClick={handleMenuClose}>Tin đã lưu</MenuItem>
                        <MenuItem sx={{":hover": {color: (theme) => theme.palette.grey[500]}}} onClick={handleLogout}>Đăng
                            xuất</MenuItem>
                    </Menu>
                </div>
            )}
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <FontAwesomeIcon icon={faXmark} style={{color: "inherit"}}/>
                    </IconButton>
                    <Box sx={popupStyle}>
                        <Box sx={formStyle}>
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2}}>
                                <Typography variant="h6" component="h2">
                                    {isLogin ? 'Đăng nhập' : 'Đăng ký'}
                                </Typography>
                            </Box>
                            {isLogin ? (
                                <React.Fragment>
                                    <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 2}}>
                                        <Button sx={{
                                            mr: 1,
                                            width: '48%',
                                            bgcolor: '#db4437',
                                            color: 'white',
                                            '&:hover': {bgcolor: '#c23321'}
                                        }}>
                                            <FontAwesomeIcon icon={faGoogle} style={{marginRight: 8}}/>
                                            Google
                                        </Button>
                                        <Button sx={{
                                            width: '48%',
                                            bgcolor: '#000000',
                                            color: 'white',
                                            '&:hover': {bgcolor: '#333333'}
                                        }}>
                                            <FontAwesomeIcon icon={faApple} style={{marginRight: 8}}/>
                                            Apple
                                        </Button>
                                    </Box>
                                    <Typography variant="body2" align="center" sx={{mb: 2}}>
                                        Hoặc
                                    </Typography>
                                    <form onSubmit={handleSubmit}>
                                        <TextField
                                            label="Email / Số điện thoại"
                                            type="email"
                                            name="email"
                                            fullWidth
                                            margin="normal"
                                            onChange={handleChange}
                                            value={credentials.email}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <FontAwesomeIcon icon={faCircleUser}/>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <TextField
                                            label="Mật khẩu"
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            fullWidth
                                            margin="normal"
                                            onChange={handleChange}
                                            value={credentials.password}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={handleTogglePasswordVisibility}>
                                                            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash}
                                                                             size={"xs"}/>
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        {error && (
                                            <Typography color="error" align="center" sx={{mb: 2}}>
                                                {error}
                                            </Typography>
                                        )}
                                        <FormControlLabel control={<Checkbox/>} label="Ghi nhớ đăng nhập"/>
                                        <Button type="submit" variant="contained" color="primary" fullWidth
                                                sx={{mt: 2}}>
                                            Đăng nhập
                                        </Button>
                                        <Typography variant="body2" align="center" sx={{mt: 2}}>
                                            Chưa có tài khoản? <a href="#" style={{
                                            textDecoration: 'underline',
                                            color: '#2d67ad'
                                        }} onClick={() => setIsLogin(false)}>Đăng ký</a>
                                        </Typography>
                                    </form>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <form>
                                        <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 2}}>
                                            <Button sx={{
                                                mr: 1,
                                                width: '48%',
                                                bgcolor: '#db4437',
                                                color: 'white',
                                                '&:hover': {bgcolor: '#c23321'}
                                            }}>
                                                <FontAwesomeIcon icon={faGoogle} style={{marginRight: 8}}/>
                                                Google
                                            </Button>
                                            <Button sx={{
                                                width: '48%',
                                                bgcolor: '#000000',
                                                color: 'white',
                                                '&:hover': {bgcolor: '#333333'}
                                            }}>
                                                <FontAwesomeIcon icon={faApple} style={{marginRight: 8}}/>
                                                Apple
                                            </Button>
                                        </Box>
                                        <Typography variant="body2" align="center" sx={{mb: 2}}>
                                            Hoặc
                                        </Typography>
                                        <TextField
                                            label="Họ và tên"
                                            type="text"
                                            name="fullname"
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            label="Email"
                                            type="email"
                                            name="email"
                                            fullWidth
                                            margin="normal"
                                        />
                                        <TextField
                                            label="Mật khẩu"
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            fullWidth
                                            margin="normal"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={handleTogglePasswordVisibility}>
                                                            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash}
                                                                             size={"xs"}/>
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <FormControlLabel control={<Checkbox/>} label="Tôi đồng ý với các điều khoản"/>
                                        <Button type="submit" variant="contained" color="primary" fullWidth
                                                sx={{mt: 2}}>
                                            Đăng ký
                                        </Button>
                                        <Typography variant="body2" align="center" sx={{mt: 2}}>
                                            Đã có tài khoản? <a href="#"
                                                                style={{textDecoration: 'underline', color: '#2d67ad'}}
                                                                onClick={() => setIsLogin(true)}>Đăng nhập</a>
                                        </Typography>
                                    </form>
                                </React.Fragment>
                            )}
                        </Box>
                        <Box sx={rightSectionStyle}>
                            <img src={`${process.env.PUBLIC_URL}/background-login.jpg`} alt="Login illustration"
                                 style={{width: '100%', borderRadius: '0 10px 10px 0'}}/>
                        </Box>
                        <Box component="img" src={`${process.env.PUBLIC_URL}/background-login.jpg`}
                             sx={{width: '100%', borderRadius: '0 10px 10px 0'}}/>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
};

export default Login;