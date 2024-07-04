import React from "react";
import {ListProps} from "@mui/material";
import RemakerItem from "./remakerItem";


const BoxRemaker: React.FC = (props) => {
    return (
        <div>
            <p style={style} className={"uppercase border-b"}>Đáng chú ý</p>
            <div className={"flex flex-row"}>
                <RemakerItem remaker={{
                    url: "#",
                    title: "Tài xế ô tô Land Cruiser bị dừng xe ở trạm thu phí, lộ việc gắn biển 80B giả",

                    type: {
                        name: "Thời sự",
                        url: "#",
                    },
                    src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/6/30/tai-xe-o-to-land-cruiser-bi-dung-xe-o-tram-thu-phi-lo-viec-gan-bien-80b-gia-1531.jpg?width=360&s=cPfVOYi4wKME8oZ0mDA_lg"
                }
                }/>
                <RemakerItem remaker={{
                    url: "#",
                    title: "Tài xế ô tô Land Cruiser bị dừng xe ở trạm thu phí, lộ việc gắn biển 80B giả",

                    type: {
                        name: "Thời sự",
                        url: "#",
                    },
                    src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/6/30/tai-xe-o-to-land-cruiser-bi-dung-xe-o-tram-thu-phi-lo-viec-gan-bien-80b-gia-1531.jpg?width=360&s=cPfVOYi4wKME8oZ0mDA_lg"
                }
                }/>
                <RemakerItem remaker={{
                    url: "#",
                    title: "Tài xế ô tô Land Cruiser bị dừng xe ở trạm thu phí, lộ việc gắn biển 80B giả",

                    type: {
                        name: "Thời sự",
                        url: "#",
                    },
                    src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/6/30/tai-xe-o-to-land-cruiser-bi-dung-xe-o-tram-thu-phi-lo-viec-gan-bien-80b-gia-1531.jpg?width=360&s=cPfVOYi4wKME8oZ0mDA_lg"
                }
                }/>
                <RemakerItem remaker={{
                    url: "#",
                    title: "Tài xế ô tô Land Cruiser bị dừng xe ở trạm thu phí, lộ việc gắn biển 80B giả",
                    type: {
                        name: "Thời sự",
                        url: "#",
                    },
                    src: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/6/30/tai-xe-o-to-land-cruiser-bi-dung-xe-o-tram-thu-phi-lo-viec-gan-bien-80b-gia-1531.jpg?width=360&s=cPfVOYi4wKME8oZ0mDA_lg"
                }
                }/>
            </div>
        </div>

    )
}
const style = {
    color: "#2d67ad",
    fontWeight: 600,
    fontSize: "1.5rem"

}
export default BoxRemaker;