import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Box, TextField, Button, IconButton, Typography, Avatar, Link} from '@mui/material';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSmile} from '@fortawesome/free-solid-svg-icons';
import {RootState} from "../../redux/store/store";
import {addComment} from "../../redux/slice/commentsSlice";

const CommentBox: React.FC = () => {
    const comments = useSelector((state: RootState) => state.comments.comments);
    const [commentText, setCommentText] = useState('');
    const [username, setUsername] = useState('Đọc giả');
    const [isEditingUsername, setIsEditingUsername] = useState(false);
    const [isChangingUsername, setIsChangingUsername] = useState(false);
    const dispatch = useDispatch();

    const handleCommentSubmit = () => {
        if (commentText.trim() !== '') {
            const newComment = {
                id: comments.length + 1,
                username,
                text: commentText,
                time: new Date().toLocaleString(),
                articlePath: window.location.pathname,
            };
            dispatch(addComment(newComment));
            setCommentText('');
        }
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };


    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
       setIsChangingUsername(!isChangingUsername);
        if (!isChangingUsername) {
            setIsEditingUsername(true);
        } else {
            setIsEditingUsername(false);
        }
    };

    return (
        <Box sx={{border: '1px solid #ddd', borderRadius: '4px', p: 2, mx: 'auto', mt: 3}}>
            <Typography variant="h6" sx={{mb: 1}}>
                BÌNH LUẬN
            </Typography>
            <Box sx={{display: 'flex', alignItems: 'center', position: 'relative'}}>
                <TextField
                    placeholder="Bình luận của bạn..."
                    multiline
                    fullWidth
                    rows={3}
                    variant="outlined"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    sx={{flex: 1}}
                />
                <IconButton
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        color: 'inherit',
                    }}
                >
                    <FontAwesomeIcon icon={faSmile}/>
                </IconButton>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 1}}>
                <Avatar sx={{width: 24, height: 24, mr: 1}}>Đ</Avatar>
                <Box sx={{flex: 1}}>
                    {isEditingUsername ? (
                        <TextField
                            value={username}
                            onChange={handleUsernameChange}
                            autoFocus
                            size="small"
                        />
                    ) : (
                        <Typography
                            variant="body2"
                            sx={{fontWeight: 'bold'}}
                        >
                            {username}
                        </Typography>
                    )}
                    <Typography sx={{fontSize: 12, cursor: 'pointer', textDecoration: 'underline'}} onClick={handleLinkClick}>
                        {isChangingUsername ? 'Xác nhận tên hiển thị' : 'Sử dụng tên hiển thị khác?' }
                    </Typography>
                </Box>
                <Button variant="contained" color="info" onClick={handleCommentSubmit}>
                    Gửi
                </Button>
            </Box>
            <Box sx={{mt: 2}}>
                {comments
                    .filter((comment) => comment.articlePath === window.location.pathname)
                    .map((comment) => (
                        <Box key={comment.id} sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                            <Avatar sx={{width: 24, height: 24, mr: 1}}>
                                {comment.username.charAt(0)}
                            </Avatar>
                            <Box sx={{flex: 1}}>
                                <Typography
                                    variant="body2"
                                    sx={{fontWeight: 'bold', display: 'flex', justifyContent: 'space-between'}}
                                >
                                    {comment.username}
                                    <span
                                        style={{
                                            fontWeight: 'normal',
                                            fontSize: '0.8em',
                                            color: 'gray',
                                        }}
                                    >
                                        {comment.time}
                                    </span>
                                </Typography>
                                <Typography variant="body2">{comment.text}</Typography>
                            </Box>
                        </Box>
                    ))}
            </Box>
        </Box>
    );
};

export default CommentBox;
