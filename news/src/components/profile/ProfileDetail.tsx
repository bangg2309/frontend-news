import {Avatar, Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {User} from "../../interfaces/User";
import {useDispatch} from "react-redux";
import {updateUser} from "../../redux/slice/authSlice";

const ProfileDetail = ({user}: { user: User }) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState<{ [key: string]: boolean }>({});
    const [editedUser, setEditedUser] = useState<User>(user);
    const handleEdit = (field: string) => {
        setEditMode({...editMode, [field]: true});
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        setEditedUser({...editedUser, [field]: e.target.value});
    };

    const handleSave = (field: string) => {
        setEditMode({...editMode, [field]: false});
        dispatch(updateUser(editedUser));
    };

    const renderField = (label: string, field: string, type: string = 'text') => {
        const isPasswordField = field === 'password';
        return (
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <Typography variant="body1" sx={{ mb: 1 }}>{label}</Typography>
                    {editMode[field] ? (
                        <TextField
                            type={isPasswordField ? 'password' : type}
                            value={(editedUser as any)[field]}
                            onChange={(e) => handleChange(e, field)}
                            size="small"
                        />
                    ) : (
                        <Typography variant="body2" color="textSecondary">
                            {isPasswordField ? '**********' : (editedUser as any)[field] || 'Chưa có dữ liệu'}
                        </Typography>
                    )}
                </Box>
                {editMode[field] ? (
                    <Button variant="text" sx={{ textTransform: 'none' }} onClick={() => handleSave(field)}>Lưu</Button>
                ) : (
                    <Button variant="text" sx={{ textTransform: 'none' }} onClick={() => handleEdit(field)}>Thay đổi</Button>
                )}
            </Box>
        );
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{flexGrow: 1, ml: 3}}>
                <Box sx={{p: 2, borderRadius: '10px'}}>
                    <Typography variant="h5" gutterBottom sx={{fontWeight: '700'}}>Thông tin tài khoản</Typography>
                    <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                        <Avatar src={editedUser.avatar} sx={{width: 56, height: 56, mr: 2}}/>
                        <Link href="#" underline="hover">Thay ảnh đại diện</Link>
                    </Box>
                    {renderField('Họ tên', 'name')}
                    {renderField('Email', 'email', 'email')}
                    {renderField('Mật khẩu', 'password', 'password')}
                    {renderField('Số điện thoại', 'phone')}
                    {renderField('Địa chỉ', 'address')}
                </Box>
            </Box>
        </Container>
    );
};

export default ProfileDetail;