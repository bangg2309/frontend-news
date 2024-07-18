import React from "react";
import {Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import {getUser, UserSavePost} from "../../../interfaces/User";
import {NavLink} from "react-router-dom";
import NewsType from "../../post/category-new";
import TitlePage from "../../post/TitlePage";

const SavePost: React.FC = () => {
    const user = getUser();
    const allSaveLists = JSON.parse(localStorage.getItem('saveLists') || '{}');
    const userSaveList: UserSavePost[] = allSaveLists[user?.email || ''] || [];
    return (
        <><Stack sx={{ml: 3,maxWidth: '760px'}}>
            {userSaveList.map((post, index) => {
                return (
                    <Card sx={{boxShadow: 'unset', height: 'fit-content'}} className={"mb-2"} component={NavLink}
                          to={post.link}>
                        <CardActionArea>
                            <Stack direction={'row'}>
                                <CardMedia
                                    sx={{width: 220, margin: "16px"}}
                                    component="img"
                                    image={post.thumb === "" ? "https://image.tienphong.vn/w890/Uploaded/2024/nophoto.jpg" : post.thumb}
                                    alt={post.title}
                                />
                                <CardContent>
                                    <NewsType category={post.category}
                                              variant={"subtitle1"}/>
                                    <TitlePage title={post.title} size={"h6"} url={`/bai-viet/${post.link}`}/>
                                    {/*<Typography variant="body2" color="text.secondary">*/}
                                    {/*    {props.NewsView.description.replace(/<[^>]*>/g, '')}*/}
                                    {/*</Typography>*/}
                                </CardContent>
                            </Stack>
                        </CardActionArea>
                    </Card>)

            })}
        </Stack>
        </>
    )
}
export default SavePost;