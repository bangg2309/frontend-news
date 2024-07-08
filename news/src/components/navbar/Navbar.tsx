import React from 'react';
import {AppBar, Box, Toolbar, Typography, useTheme} from "@mui/material";
import {MAIN_CONCEPT} from "../theme/theme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHouse,
} from "@fortawesome/free-solid-svg-icons";
const Navbar: React.FC = () => {
    const theme = useTheme();
    return (
        <>
            <AppBar  position="sticky" sx={{
                bgcolor: theme.palette.mode === 'dark' ? MAIN_CONCEPT.darkNav : MAIN_CONCEPT.lightNav,
                margin:'auto',
                border: '1px solid #ccc'
            }}>
                <Toolbar >
                    <FontAwesomeIcon icon={faHouse} color={theme.palette.primary.main} />
                </Toolbar>
            </AppBar>
        </>
        // <div className="navigation sticky top-0 z-50 bg-white shadow-md">
        //     <nav>
        //         <div className="container1">
        //             <ul className="navbar">
        //                 <li className="dropdown is-first"><a href="https://tienphong.vn"
        //                                                      title="Trang chủ"><FontAwesomeIcon icon={faHouse}
        //                                                                                         className="home text-sm w-7 h-7"/></a>
        //                 </li>
        //                 <li data-id="2" className="dropdown "><a href="https://tienphong.vn/xa-hoi/"
        //                                                          title="Xã hội"><span>Xã hội</span></a>
        //                     <ul className="dropdown-content">
        //                         <li data-id="308"><a href="https://tienphong.vn/chinh-tri/"
        //                                              title="Chính trị"><span>Chính trị</span></a>
        //                         </li>
        //                         <li data-id="104"><a href="https://tienphong.vn/xa-hoi-tin-tuc/"
        //                                              title="Tin tức"><span>Tin tức</span></a></li>
        //                         <li data-id="18"><a href="https://tienphong.vn/xa-hoi-chuyen-hom-nay/"
        //                                             title="Chuyện hôm nay"><span>Chuyện hôm nay</span></a>
        //                         </li>
        //                         <li data-id="13"><a href="https://tienphong.vn/xa-hoi-phong-su/"
        //                                             title="Phóng sự"><span>Phóng sự</span></a>
        //                         </li>
        //                     </ul>
        //                 </li>
        //                 <li data-id="3" className="dropdown "><a href="https://tienphong.vn/kinh-te/"
        //                                                          title="Kinh tế"><span>Kinh tế</span></a>
        //                     <ul className="dropdown-content">
        //                         <li data-id="24"><a href="https://tienphong.vn/kinh-te-thi-truong/"
        //                                             title="Thị trường"><span>Thị trường</span></a></li>
        //                         <li data-id="22"><a href="https://tienphong.vn/doanh-nghiep/"
        //                                             title="Doanh nghiệp"><span>Doanh nghiệp</span></a></li>
        //                         <li data-id="165"><a href="https://tienphong.vn/dau-tu/"
        //                                              title="Đầu tư"><span>Đầu tư</span></a>
        //                         </li>
        //                         <li data-id="105"><a href="https://tienphong.vn/tai-chinh-chung-khoan/"
        //                                              title="Tài chính - Chứng khoán"><span>Tài chính - Chứng khoán</span></a>
        //                         </li>
        //                         <li data-id="413"><a href="https://tienphong.vn/giam-ngheo-ben-vung/"
        //                                              title="Giảm nghèo bền vững"><span>Giảm nghèo bền vững</span></a>
        //                         </li>
        //                     </ul>
        //                 </li>
        //                 <li data-id="166" className="dropdown "><a href="https://tienphong.vn/dia-oc/"
        //                                                            title="Địa ốc"><span>Địa ốc</span></a>
        //                     <ul className="dropdown-content">
        //                         <li data-id="269"><a href="https://tienphong.vn/do-thi-du-an/"
        //                                              title="Đô thị - Dự án"><span>Đô thị - Dự án</span></a>
        //                         </li>
        //                         <li data-id="270"><a href="https://tienphong.vn/thi-truong-doanh-nghiep/"
        //                                              title="Thị trường - Doanh nghiệp"><span>Thị trường - Doanh nghiệp</span></a>
        //                         </li>
        //                         <li data-id="271"><a href="https://tienphong.vn/nha-dep-kien-truc/"
        //                                              title="Nhà đẹp - Kiến trúc"><span>Nhà đẹp - Kiến trúc</span></a>
        //                         </li>
        //                         <li data-id="272"><a href="https://tienphong.vn/chuyen-gia-tu-van/"
        //                                              title="Chuyên gia - Tư vấn"><span>Chuyên gia - Tư vấn</span></a>
        //                         </li>
        //                         <li data-id="169"><a href="https://tienphong.vn/media-dia-oc/"
        //                                              title="Media Địa ốc"><span>Media Địa ốc</span></a></li>
        //                     </ul>
        //                 </li>
        //                 <li data-id="210" className="dropdown "><a href="https://tienphong.vn/suc-khoe/"
        //                                                            title="Sức khỏe"><span>Sức khỏe</span></a>
        //                     <ul className="dropdown-content">
        //                         <li data-id="304"><a href="https://tienphong.vn/bac-si-online/"
        //                                              title="Bác sĩ online"><span>Bác sĩ online</span></a>
        //                         </li>
        //                         <li data-id="305"><a href="https://tienphong.vn/thuoc-dung-thuoc-tot/"
        //                                              title="Thuốc đúng - Thuốc tốt"><span>Thuốc đúng - Thuốc tốt</span></a>
        //                         </li>
        //                         <li data-id="306"><a href="https://tienphong.vn/lam-dep-moi-ngay/"
        //                                              title="Làm đẹp mỗi ngày"><span>Làm đẹp mỗi ngày</span></a>
        //                         </li>
        //                         <li data-id="144"><a href="https://tienphong.vn/suc-khoe-thi-tham-ben-goi/"
        //                                              title="Thì thầm bên gối"><span>Thì thầm bên gối</span></a></li>
        //                     </ul>
        //                 </li>
        //                 <li data-id="5" className="dropdown "><a href="https://tienphong.vn/the-gioi/"
        //                                                          title="Thế giới"><span>Thế giới</span></a>
        //                     <ul className="dropdown-content">
        //                         <li data-id="31"><a href="https://tienphong.vn/the-gioi-phan-tich-binh-luan/"
        //                                             title="Phân tích - Bình luận"><span>Phân tích - Bình luận</span></a>
        //                         </li>
        //                         <li data-id="32"><a href="https://tienphong.vn/chuyen-la/"
        //                                             title="Chuyện lạ"><span>Chuyện lạ</span></a>
        //                         </li>
        //                     </ul>
        //                 </li>
        //                 <li data-id="4" className="dropdown "><a href="https://tienphong.vn/gioi-tre/"
        //                                                          title="Giới trẻ"><span>Giới trẻ</span></a>
        //                     <ul className="dropdown-content">
        //                         <li data-id="27"><a href="https://tienphong.vn/gioi-tre-nhip-song/"
        //                                             title="Nhịp sống"><span>Nhịp sống</span></a></li>
        //                         <li data-id="26"><a href="https://tienphong.vn/cong-dong-mang/"
        //                                             title="Cộng đồng mạng"><span>Cộng đồng mạng</span></a>
        //                         </li>
        //                         <li data-id="295"><a href="https://tienphong.vn/tai-nang-tre/"
        //                                              title="Tài năng trẻ"><span>Tài năng trẻ</span></a></li>
        //                     </ul>
        //                 </li>
        //                 <li data-id="12" className="dropdown "><a href="https://tienphong.vn/phap-luat/"
        //                                                           title="Pháp luật"><span>Pháp luật</span></a>
        //                     <ul className="dropdown-content">
        //                         <li data-id="231"><a href="https://tienphong.vn/ban-tin-113/"
        //                                              title="Bản tin 113"><span>Bản tin 113</span></a></li>
        //                         <li data-id="173"><a href="https://tienphong.vn/phap-luat-chuyen-toa/"
        //                                              title="Pháp đình"><span>Pháp đình</span></a></li>
        //                     </ul>
        //                 </li>
        //                 <li data-id="11" className="dropdown "><a href="https://tienphong.vn/the-thao/"
        //                                                           title="Thể thao"><span>Thể thao</span></a>
        //                     <ul className="dropdown-content">
        //                         <li data-id="49"><a href="https://tienphong.vn/the-thao-bong-da/"
        //                                             title="Bóng đá"><span>Bóng đá</span></a></li>
        //                         <li data-id="111"><a href="https://tienphong.vn/the-thao-hau-truong/"
        //                                              title="Hậu trường thể thao"><span>Hậu trường thể thao</span></a>
        //                         </li>
        //                         <li data-id="280"><a href="https://tienphong.vn/the-thao-golf/"
        //                                              title="Golf"><span>Golf</span></a></li>
        //                     </ul>
        //                 </li>
        //                 <li data-id="182" className="dropdown "><a href="https://tienphong.vn/hanh-trang-nguoi-linh/"
        //                                                            title="Người lính"><span>Người lính</span></a>
        //                 </li>
        //                 <li data-id="113" className="dropdown "><a href="https://tienphong.vn/xe/"
        //                                                            title="Xe"><span>Xe</span></a>
        //                     <ul className="dropdown-content">
        //                         <li data-id="276"><a href="https://tienphong.vn/thi-truong-xe/"
        //                                              title="Thị trường xe"><span>Thị trường xe</span></a>
        //                         </li>
        //                         <li data-id="277"><a href="https://tienphong.vn/danh-gia-xe/"
        //                                              title="Đánh giá xe"><span>Đánh giá xe</span></a></li>
        //                         <li data-id="278"><a href="https://tienphong.vn/cong-dong-xe/"
        //                                              title="Cộng đồng xe"><span>Cộng đồng xe</span></a></li>
        //                         <li data-id="279"><a href="https://tienphong.vn/xe-tu-van/"
        //                                              title="Tư vấn"><span>Tư vấn</span></a></li>
        //                     </ul>
        //                 </li>
        //                 <li data-id="7" className="dropdown "><a href="https://tienphong.vn/van-hoa/"
        //                                                          title="Văn hóa"><span>Văn hóa</span></a>
        //                     <ul className="dropdown-content">
        //                         <li data-id="309"><a href="https://tienphong.vn/tin-van-hoa/"
        //                                              title="Tin văn hóa"><span>Tin văn hóa</span></a></li>
        //                         <li data-id="264"><a href="https://tienphong.vn/cau-chuyen-van-hoa/"
        //                                              title="Câu chuyện văn hóa"><span>Câu chuyện văn hóa</span></a>
        //                         </li>
        //                         <li data-id="429"><a href="https://tienphong.vn/sach/"
        //                                              title="Sách"><span>Sách</span></a></li>
        //                         <li data-id="262"><a href="https://tienphong.vn/so-bui/"
        //                                              title="Sổ bụi"><span>Sổ bụi</span></a>
        //                         </li>
        //                     </ul>
        //                 </li>
        //                 <li data-id="36" className="dropdown "><a href="https://tienphong.vn/giai-tri/"
        //                                                           title="Giải trí"><span>Giải trí</span></a>
        //                     <ul className="dropdown-content">
        //                         <li data-id="35"><a href="https://tienphong.vn/sao/" title="Sao"><span>Sao</span></a>
        //                         </li>
        //                         <li data-id="168"><a href="https://tienphong.vn/giai-tri-hau-truong/"
        //                                              title="Hậu trường sao"><span>Hậu trường sao</span></a>
        //                         </li>
        //                         <li data-id="153"><a href="https://tienphong.vn/giai-tri-video/"
        //                                              title="Video"><span>Video</span></a>
        //                         </li>
        //                         <li data-id="213"><a href="https://tienphong.vn/lam-dep/"
        //                                              title="Đẹp"><span>Đẹp</span></a></li>
        //                     </ul>
        //                 </li>
        //                 <li data-id="71" className="dropdown "><a href="https://tienphong.vn/giao-duc/"
        //                                                           title="Giáo dục"><span>Giáo dục</span></a>
        //                     <ul className="dropdown-content">
        //                         <li data-id="310"><a href="https://tienphong.vn/cong-truong/"
        //                                              title="Cổng trường"><span>Cổng trường</span></a></li>
        //                         <li data-id="163"><a href="https://tienphong.vn/tuyen-sinh2011/"
        //                                              title="Tuyển sinh"><span>Tuyển sinh</span></a></li>
        //                         <li data-id="40"><a href="https://tienphong.vn/giao-duc-du-hoc/"
        //                                             title="Du học"><span>Du học</span></a>
        //                         </li>
        //                     </ul>
        //                 </li>
        //                 <li data-id="45" className="dropdown "><a href="https://tienphong.vn/cong-nghe/"
        //                                                           title="Khoa học"><span>Khoa học</span></a>
        //                     <ul className="dropdown-content">
        //                         <li data-id="46"><a href="https://tienphong.vn/cong-nghe-khoa-hoc/"
        //                                             title="Công nghệ"><span>Công nghệ</span></a></li>
        //                         <li data-id="170"><a href="https://tienphong.vn/cong-nghe-vi-tinh/"
        //                                              title="Vi tính"><span>Vi tính</span></a>
        //                         </li>
        //                         <li data-id="171"><a href="https://tienphong.vn/cong-nghe-dien-thoai/"
        //                                              title="Điện thoại"><span>Điện thoại</span></a>
        //                         </li>
        //                     </ul>
        //                 </li>
        //                 <li data-id="253" className="dropdown "><a href="https://tienphong.vn/hoa-hau/" title="Hoa hậu"><span>Hoa hậu</span></a>
        //                     <ul className="dropdown-content">
        //                         <li data-id="255"><a href="https://tienphong.vn/hh-tin-tuc/"
        //                                              title="Tin tức"><span>Tin tức</span></a>
        //                         </li>
        //                         <li data-id="257"><a href="https://tienphong.vn/hh-anh/"
        //                                              title="Ảnh"><span>Ảnh</span></a></li>
        //                         <li data-id="258"><a href="https://tienphong.vn/hh-video/"
        //                                              title="Video"><span>Video</span></a>
        //                         </li>
        //                         <li data-id="265"><a href="https://tienphong.vn/hau-truong/" title="Hậu trường hoa hậu"><span>Hậu trường hoa hậu</span></a>
        //                         </li>
        //                     </ul>
        //                 </li>
        //                 <li data-id="15" className="dropdown "><a href="https://tienphong.vn/ban-doc/"
        //                                                           title="Bạn đọc"><span>Bạn đọc</span></a>
        //                     <ul className="dropdown-content">
        //                         <li data-id="300"><a href="https://tienphong.vn/ban-doc-dieu-tra/"
        //                                              title="Điều tra"><span>Điều tra</span></a></li>
        //                         <li data-id="301"><a href="https://tienphong.vn/ban-doc-dien-dan/"
        //                                              title="Diễn đàn"><span>Diễn đàn</span></a></li>
        //                         <li data-id="302"><a href="https://tienphong.vn/ban-doc-hoi-am/"
        //                                              title="Hồi âm"><span>Hồi âm</span></a>
        //                         </li>
        //                         <li data-id="303"><a href="https://tienphong.vn/ban-doc-nhan-ai/"
        //                                              title="Nhân ái"><span>Nhân ái</span></a></li>
        //                     </ul>
        //                 </li>
        //                 <li data-id="115" className="dropdown "><a href="https://tienphong.vn/video-clip/"
        //                                                            title="Video"><span>Video</span></a>
        //                     <ul className="dropdown-content">
        //                         <li data-id="421"><a href="https://tienphong.vn/thoi-su/"
        //                                              title="Thời sự"><span>Thời sự</span></a></li>
        //                         <li data-id="422"><a href="https://tienphong.vn/showbiz-tv/"
        //                                              title="Showbiz-TV"><span>Showbiz-TV</span></a>
        //                         </li>
        //                         <li data-id="423"><a href="https://tienphong.vn/thoi-tiet/"
        //                                              title="Thời tiết"><span>Thời tiết</span></a>
        //                         </li>
        //                         <li data-id="424"><a href="https://tienphong.vn/video-thi-truong/"
        //                                              title="Thị trường"><span>Thị trường</span></a></li>
        //                         <li data-id="425"><a href="https://tienphong.vn/video-the-thao/"
        //                                              title="Thể thao"><span>Thể thao</span></a>
        //                         </li>
        //                         <li data-id="426"><a href="https://tienphong.vn/quan-su/"
        //                                              title="Quân sự"><span>Quân sự</span></a></li>
        //                         <li data-id="427"><a href="https://tienphong.vn/mutex/" title="Mutex"><span>Mutex</span></a>
        //                         </li>
        //                     </ul>
        //                 </li>
        //                 <li data-id="433" className="dropdown "><a href="https://tienphong.vn/nhat-bao/"
        //                                                            title="Nhật báo"><span>Nhật báo</span></a>
        //                 </li>
        //                 <li className="dropdown is-last"><a href="javascript:void(0);"
        //                                                     title="Các chuyên mục khác"><FontAwesomeIcon
        //                     icon={faBars} className="bars text-sm w-8 h-8"></FontAwesomeIcon></a>
        //                     <ul className="dropdown-content">
        //                         <li data-id="220" className=""><a href="https://tienphong.vn/hang-khong-du-lich/"
        //                                                           title="Hàng không - Du lịch"><span>Hàng không - Du lịch</span></a>
        //                         </li>
        //                         <li data-id="235" className=""><a href="https://tienphong.vn/photo/"
        //                                                           title="Ảnh"><span>Ảnh</span></a></li>
        //                         <li data-id="428" className=""><a href="https://tienphong.vn/podcast/"
        //                                                           title="Podcast"><span>Podcast</span></a>
        //                         </li>
        //                         <li data-id="311" className=""><a href="https://tienphong.vn/longform/"
        //                                                           title="Longform"><span>Longform</span></a></li>
        //                         <li data-id="287" className=""><a href="https://tienphong.vn/infographics/"
        //                                                           title="Infographics"><span>Infographics</span></a>
        //                         </li>
        //                         <li data-id="312" className=""><a href="https://tienphong.vn/quizz/"
        //                                                           title="Quizz"><span>Quizz</span></a>
        //                         </li>
        //                         <li data-id="400" className=""><a href="https://tamviet.tienphong.vn/" title="TÂM VIỆT"
        //                                                           target="_blank"><span>TÂM VIỆT</span></a></li>
        //                         <li data-id="408" className=""><a href="https://tienphong.vn/nhip-song-phuong-nam/"
        //                                                           title="Nhịp sống phương Nam"><span>Nhịp sống phương Nam</span></a>
        //                         </li>
        //                         <li data-id="242" className=""><a href="https://tienphong.vn/nhip-song-thu-do/"
        //                                                           title="Nhịp sống Thủ đô"><span>Nhịp sống Thủ đô</span></a>
        //                         </li>
        //                         <li data-id="273" className=""><a href="https://tienphong.vn/toi-nghi/"
        //                                                           title="Tôi nghĩ"><span>Tôi nghĩ</span></a></li>
        //                         <li data-id="416" className=""><a href="https://tienphong.vn/tet-viet/"
        //                                                           title="Tết Việt"><span>Tết Việt</span></a></li>
        //                     </ul>
        //                 </li>
        //             </ul>
        //         </div>
        //     </nav>
        // </div>
    )
}
export default Navbar;