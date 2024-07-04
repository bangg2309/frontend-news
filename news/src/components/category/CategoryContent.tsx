import React from "react";
import {Button, Grid, StyledEngineProvider} from "@mui/material";
import TitlePage from "../post/TitlePage";
import NewsType from "../post/category-new";
import HorizonePost from "../post/HorizonePost";
import BoxRemaker from "../subgest/boxRemaker";
import Breedcrumb from "../breedcrumb/breedcrumb";
import TopStory from "../top-story/TopStory";
import ModeToggle from "../theme/toggleTheme";


const CategoryContent: React.FC = () => {
    return (
        <>
            <Breedcrumb title={"THỜI SỰ"}/>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <TopStory item={{}}/>
                    <HorizonePost title={"Ô tô khách bị lật xuống rìa quốc lộ sau tai nạn chết người"} size={"lg"}
                                  description={"Sau khi va chạm với xe máy, ô tô khách bị lật xuống rìa QL15A (địa phận xã Hà Linh, huyện Hương Khê, tỉnh Hà Tĩnh). Vụ tai nạn khiến người phụ nữ điều khiển xe máy tử vong tại chỗ."}
                                  type={"THỜI SỰ"} url={"#"}/>
                    <HorizonePost title={"Ô tô khách bị lật xuống rìa quốc lộ sau tai nạn chết người"} size={"lg"}
                                  description={"Sau khi va chạm với xe máy, ô tô khách bị lật xuống rìa QL15A (địa phận xã Hà Linh, huyện Hương Khê, tỉnh Hà Tĩnh). Vụ tai nạn khiến người phụ nữ điều khiển xe máy tử vong tại chỗ."}
                                  type={"THỜI SỰ"} url={"#"}/>
                    <HorizonePost title={"Ô tô khách bị lật xuống rìa quốc lộ sau tai nạn chết người"} size={"lg"}
                                  description={"Sau khi va chạm với xe máy, ô tô khách bị lật xuống rìa QL15A (địa phận xã Hà Linh, huyện Hương Khê, tỉnh Hà Tĩnh). Vụ tai nạn khiến người phụ nữ điều khiển xe máy tử vong tại chỗ."}
                                  type={"THỜI SỰ"} url={"#"}/>
                    <HorizonePost title={"Ô tô khách bị lật xuống rìa quốc lộ sau tai nạn chết người"} size={"lg"}
                                  description={"Sau khi va chạm với xe máy, ô tô khách bị lật xuống rìa QL15A (địa phận xã Hà Linh, huyện Hương Khê, tỉnh Hà Tĩnh). Vụ tai nạn khiến người phụ nữ điều khiển xe máy tử vong tại chỗ."}
                                  type={"THỜI SỰ"} url={"#"}/>
                    <BoxRemaker/>
                    <HorizonePost title={"Ô tô khách bị lật xuống rìa quốc lộ sau tai nạn chết người"} size={"lg"}
                                  description={"Sau khi va chạm với xe máy, ô tô khách bị lật xuống rìa QL15A (địa phận xã Hà Linh, huyện Hương Khê, tỉnh Hà Tĩnh). Vụ tai nạn khiến người phụ nữ điều khiển xe máy tử vong tại chỗ."}
                                  type={"THỜI SỰ"} url={"#"}/>
                    <HorizonePost title={"Ô tô khách bị lật xuống rìa quốc lộ sau tai nạn chết người"} size={"lg"}
                                  description={"Sau khi va chạm với xe máy, ô tô khách bị lật xuống rìa QL15A (địa phận xã Hà Linh, huyện Hương Khê, tỉnh Hà Tĩnh). Vụ tai nạn khiến người phụ nữ điều khiển xe máy tử vong tại chỗ."}
                                  type={"THỜI SỰ"} url={"#"}/>
                    <HorizonePost title={"Ô tô khách bị lật xuống rìa quốc lộ sau tai nạn chết người"} size={"lg"}
                                  description={"Sau khi va chạm với xe máy, ô tô khách bị lật xuống rìa QL15A (địa phận xã Hà Linh, huyện Hương Khê, tỉnh Hà Tĩnh). Vụ tai nạn khiến người phụ nữ điều khiển xe máy tử vong tại chỗ."}
                                  type={"THỜI SỰ"} url={"#"}/>
                    <HorizonePost title={"Ô tô khách bị lật xuống rìa quốc lộ sau tai nạn chết người"} size={"lg"}
                                  description={"Sau khi va chạm với xe máy, ô tô khách bị lật xuống rìa QL15A (địa phận xã Hà Linh, huyện Hương Khê, tỉnh Hà Tĩnh). Vụ tai nạn khiến người phụ nữ điều khiển xe máy tử vong tại chỗ."}
                                  type={"THỜI SỰ"} url={"#"}/>
                </Grid>
                <Grid item xs={3}>
                    <ModeToggle/>
                </Grid>
            </Grid>
        </>
    );
}
export default CategoryContent;