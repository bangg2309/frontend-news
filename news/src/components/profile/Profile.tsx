import React, {useEffect} from 'react';
import {Avatar, Box, Container, Divider, Link, List, ListItem, ListItemText, Typography} from '@mui/material';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "../../redux/store/store";
import {logout} from "../../redux/slice/authSlice";
import {Outlet} from "react-router-dom";

const Profile = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state: RootState) => state.auth);
    const handleLogout = () => {
        dispatch(logout());
    };
    const menuItems = [
        { text: "Thông tin chung" },
        { text: "Ý kiến của bạn (0)" },
        { text: "Tin đã lưu" },
        { text: "Thoát", icon: <FontAwesomeIcon icon={faSignOutAlt} />, action: 'logout' }
    ];

    const MenuItem = ({ text, icon, onClick }: { text: string, icon?: React.ReactNode, onClick?: () => void }) => (
        <ListItem
            sx={{
                '&:hover': {
                    color: '#2d67ad',
                    cursor: 'pointer'
                },
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
            onClick={onClick}
        >
            <ListItemText primary={text} />
            {icon}
        </ListItem>
    );


    if (!user) return (
        <Container maxWidth={'md'}>
            <Typography variant="h4" align="center" sx={{mt: 10}}>Vui lòng đăng nhập để xem thông tin cá nhân</Typography>
        </Container>
    );

    return (
        <Container maxWidth={'md'}>
            <Box sx={{display: 'flex', p: 2}}>
                <Box sx={{
                    width: '25%',
                    position: 'sticky',
                    top: '5rem',
                    p: 2,
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    boxShadow: 'rgba(221, 221, 221, 0.6) 0 5px',
                    height: 'fit-content', // Ensures it doesn't take full height
                }}>
                    <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                        <Avatar src={user.avatar} sx={{width: 56, height: 56}}/>
                        <Box ml={2}>
                            <Typography variant="h6">{user.name || user.email.split('@')[0]}</Typography>
                        </Box>
                    </Box>
                    <List component="nav" aria-label="main mailbox folders">
                        {menuItems.map((item, index) => (
                            <React.Fragment key={index}>
                                <MenuItem
                                    text={item.text}
                                    icon={item.icon}
                                    onClick={item.action === 'logout' ? handleLogout : undefined}
                                />
                                {index === menuItems.length - 2 && <Divider />}
                            </React.Fragment>
                        ))}
                    </List>
                    <Box mt={2}>
                        <Typography variant="body2">
                            Cần hỗ trợ, vui lòng liên hệ: <Link
                            href="mailto:bangg2309@gmail.com">bangg2309@gmail.com</Link>
                        </Typography>
                    </Box>
                </Box>
                <Outlet/>
                {/*<ProfileDetail user={user}/>*/}
            </Box>
        </Container>
    );
};

export default Profile;