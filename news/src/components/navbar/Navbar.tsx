import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFax, faHouse, faLocationDot, faPhone, faShareNodes} from "@fortawesome/free-solid-svg-icons";
import './navbar.css';

const Navbar: React.FC = () => {
    function click_on_off_menu_trai_header() {
        return undefined;
    }

    function showHideMenuHorizontalHeader(num: number, num2: number, id: string) {
        // when num 1 then show, when num 0 then hide
        // num2 show the director of the menu horizontal header
        // id is the id of the div

        // const menuDiv = document.getElementById(id);
        // if (!menuDiv) return;
        //
        // if (num === 1) {
        //     menuDiv.style
        // } else if (num === 0) {
        //     menuDiv.style.display = 'none';
        // }
        return undefined;
    }

    return (
        <nav className="menu-24h-main" id="menu-24h-main-2023">
            <div className="container m-auto">
                <ul className="flex items-center justify-between">
                    <div className="icon-actions flex items-center">
                        <li className="click-slide-menu24h cursor-pointer flex items-center justify-center"
                            onClick={click_on_off_menu_trai_header()}>
                            <div className="icon-hum">
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </div>
                        </li>
                        <li className="icon-home pos-rel">
                            <a href="https://www.24h.com.vn/" onClick={undefined} className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg">
                                    <use xlinkHref="#icon-home-menu-header"></use>
                                </svg>
                            </a>
                        </li>
                    </div>
                    <li onMouseOver={showHideMenuHorizontalHeader(1,46, 'div_menu_c2_header_46')}
                        onMouseOut={showHideMenuHorizontalHeader(0,46, 'div_menu_c2_header_46')}
                        className=" has-sub pos-rel">
                        <a href="https://www.24h.com.vn/tin-tuc-trong-ngay-c46.html" onClick={undefined}
                           className="fw-medium text-uppercase pos-rel color-white">
                            Tin tức </a>
                        <div id="div_menu_c2_header_46"></div>
                    </li>
                    <li onMouseOver={showHideMenuHorizontalHeader(1,48, 'div_menu_c2_header_48')}
                        onMouseOut={showHideMenuHorizontalHeader(0,48, 'div_menu_c2_header_48')}
                        className=" has-sub pos-rel">
                        <a href="https://www.24h.com.vn/bong-da-c48.html" onClick={undefined}
                           className="fw-medium text-uppercase pos-rel color-white">
                            Bóng đá </a>
                        <div id="div_menu_c2_header_48"></div>
                    </li>
                    <li onMouseOver={showHideMenuHorizontalHeader(1,149, 'div_menu_c2_header_149')}
                        onMouseOut={showHideMenuHorizontalHeader(0,149, 'div_menu_c2_header_149')} className="">
                        <a href="https://www.24h.com.vn/bong-da-ngoai-hang-anh-c149.html" onClick={undefined}
                           className="fw-medium text-uppercase pos-rel color-white">
                            Ngoại hạng Anh </a>
                    </li>
                    <li onMouseOver={showHideMenuHorizontalHeader(1,161, 'div_menu_c2_header_161')}
                        onMouseOut={showHideMenuHorizontalHeader(0,161, 'div_menu_c2_header_161')}
                        className=" has-sub pos-rel">
                        <a href="https://www.24h.com.vn/kinh-doanh-c161.html" onClick={undefined}
                           className="fw-medium text-uppercase pos-rel color-white">
                            Kinh doanh </a>
                        <div id="div_menu_c2_header_161"></div>
                    </li>
                    <li onMouseOver={showHideMenuHorizontalHeader(1,731, 'div_menu_c2_header_731')}
                        onMouseOut={showHideMenuHorizontalHeader(0,731, 'div_menu_c2_header_731')}
                        className=" has-sub pos-rel">
                        <a href="https://www.24h.com.vn/giai-tri-c731.html" onClick={undefined}
                           className="fw-medium text-uppercase pos-rel color-white">
                            Giải trí </a>
                        <div id="div_menu_c2_header_731"></div>
                    </li>
                    <li onMouseOver={showHideMenuHorizontalHeader(1,62, 'div_menu_c2_header_62')}
                        onMouseOut={showHideMenuHorizontalHeader(0,62, 'div_menu_c2_header_62')}
                        className=" has-sub pos-rel">
                        <a href="https://www.24h.com.vn/suc-khoe-doi-song-c62.html" onClick={undefined}
                           className="fw-medium text-uppercase pos-rel color-white">
                            Sức khỏe </a>
                        <div id="div_menu_c2_header_62"></div>
                    </li>
                    <li onMouseOver={showHideMenuHorizontalHeader(1,407, 'div_menu_c2_header_407')}
                        onMouseOut={showHideMenuHorizontalHeader(0,407, 'div_menu_c2_header_407')}
                        className=" has-sub pos-rel">
                        <a href="https://www.24h.com.vn/thoi-trang-hi-tech-c407.html" onClick={undefined}
                           className="fw-medium text-uppercase pos-rel color-white">
                            Hi-tech </a>
                        <div id="div_menu_c2_header_407"></div>
                    </li>
                    <li onMouseOver={showHideMenuHorizontalHeader(1,415, 'div_menu_c2_header_415')}
                        onMouseOut={showHideMenuHorizontalHeader(0,415, 'div_menu_c2_header_415')}
                        className=" has-sub pos-rel">
                        <a href="https://www.24h.com.vn/tin-tuc-quoc-te-c415.html" onClick={undefined}
                           className="fw-medium text-uppercase pos-rel color-white">
                            Thế giới </a>
                        <div id="div_menu_c2_header_415"></div>
                    </li>
                    <li onMouseOver={showHideMenuHorizontalHeader(1,101, 'div_menu_c2_header_101')}
                        onMouseOut={showHideMenuHorizontalHeader(0,101, 'div_menu_c2_header_101')}
                        className=" has-sub pos-rel">
                        <a href="https://www.24h.com.vn/the-thao-c101.html" onClick={undefined}
                           className="fw-medium text-uppercase pos-rel color-white">
                            Thể thao </a>
                        <div id="div_menu_c2_header_101">
                            <ul className="sub-menu pos-ab bg-white z-index-9999 sub-menu-2-coll d-flex flex-wrap no-padd"
                                id="ul_menu_c2_header_101">
                                <li className="col-6 no-mar">
                                    <a title="Tennis" href="https://www.24h.com.vn/tennis-c119.html" onClick={undefined}>
                                        Tennis
                                    </a>
                                </li>
                                <li className="col-6 no-mar">
                                    <a title="Võ thuật - UFC - Quyền Anh"
                                       href="https://www.24h.com.vn/vo-thuat-ufc-quyen-anh-c117.html" onClick={undefined}>
                                        Võ thuật - UFC - Quyền Anh
                                    </a>
                                </li>
                                <li className="col-6 no-mar">
                                    <a title="Lịch thi đấu thể thao"
                                       href="https://www.24h.com.vn/lich-thi-dau-the-thao-c386.html" onClick={undefined}>
                                        Lịch thi đấu thể thao
                                    </a>
                                </li>
                                <li className="col-6 no-mar">
                                    <a title="Người đẹp - Ngôi sao"
                                       href="https://www.24h.com.vn/hau-truong-ngoi-sao-the-thao-c797.html" onClick={undefined}>
                                        Người đẹp - Ngôi sao
                                    </a>
                                </li>
                                <li className="col-6 no-mar">
                                    <a title="Bóng chuyền" href="https://www.24h.com.vn/bong-chuyen-c796.html">
                                        Bóng chuyền
                                    </a>
                                </li>
                                <li className="col-6 no-mar">
                                    <a title="Lịch thi đấu tennis"
                                       href="https://www.24h.com.vn/lich-thi-dau-tennis-c440.html" onClick={undefined}>
                                        Lịch thi đấu tennis
                                    </a>
                                </li>
                                <li className="col-6 no-mar">
                                    <a title="Video tennis" href="https://www.24h.com.vn/video-tennis-c448.html"
                                       onClick={undefined}>
                                        Video tennis
                                    </a>
                                </li>
                                <li className="col-6 no-mar">
                                    <a title="Tin bên lề thể thao"
                                       href="https://www.24h.com.vn/tin-ben-le-the-thao-c487.html" onClick={undefined}>
                                        Tin bên lề thể thao
                                    </a>
                                </li>
                                <li className="col-6 no-mar">
                                    <a title="Bảng xếp hạng tennis"
                                       href="https://www.24h.com.vn/xep-hang-tennis-c267.html" onClick={undefined}>
                                        Bảng xếp hạng tennis
                                    </a>
                                </li>
                                <li className="col-6 no-mar">
                                    <a title="Bảng xếp hạng Thể thao"
                                       href="https://www.24h.com.vn/bang-xep-hang-the-thao-c428.html" onClick={undefined}>
                                        Bảng xếp hạng Thể thao
                                    </a>
                                </li>
                                <li className="col-6 no-mar">
                                    <a title="Clip Đặc Sắc" href="https://www.24h.com.vn/clip-dac-sac-c446.html"
                                       onClick={undefined}>
                                        Clip Đặc Sắc
                                    </a>
                                </li>
                                <li className="col-6 no-mar">
                                    <a title="Billard - Snooker" href="https://www.24h.com.vn/billard-snooker-c120.html"
                                       onClick={undefined}>
                                        Billard - Snooker
                                    </a>
                                </li>
                                <li className="col-6 no-mar">
                                    <a title="Thể thao Việt Nam"
                                       href="https://www.24h.com.vn/the-thao-viet-nam-c795.html" onClick={undefined}>
                                        Thể thao Việt Nam
                                    </a>
                                </li>
                                <li className="col-6 no-mar">
                                    <a title="Ảnh thể thao" href="https://www.24h.com.vn/anh-the-thao-c506.html"
                                       onClick={undefined}>
                                        Ảnh thể thao
                                    </a>
                                </li>
                                <li className="col-6 no-mar">
                                    <a title="Golf" href="https://www.24h.com.vn/golf-c121.html" onClick={undefined}>
                                        Golf
                                    </a>
                                </li>
                                <li className="col-6 no-mar">
                                    <a title="Đua xe thể thao - F1"
                                       href="https://www.24h.com.vn/dua-xe-the-thao-f1-c118.html" onClick={undefined}>
                                        Đua xe thể thao - F1
                                    </a>
                                </li>
                                <li className="col-6 no-mar">
                                    <a title="Môn thể thao khác"
                                       href="https://www.24h.com.vn/cac-mon-the-thao-khac-c124.html" onClick={undefined}>
                                        Môn thể thao khác
                                    </a>
                                </li>
                                <li className="col-6 no-mar">
                                    <a title="Tin tức thể thao" href="https://www.24h.com.vn/tin-tuc-the-thao-c684.html"
                                       onClick={undefined}>
                                        Tin tức thể thao
                                    </a>
                                </li>
                                <li className="col-6 no-mar">
                                    <a title="Bóng rổ NBA - VBA" href="https://www.24h.com.vn/bong-ro-nba-vba-c798.html"
                                       onClick={undefined}>
                                        Bóng rổ NBA - VBA
                                    </a>
                                </li>
                            </ul>
                            <div className="d-none"></div>
                        </div>
                    </li>
                    <li className=" has-sub pos-rel">
                        <a href="https://eva.vn/" rel="nofollow" target="_blank"
                           className="fw-medium text-uppercase pos-rel color-white">
                            Phái đẹp </a>
                    </li>
                    <li onMouseOver={showHideMenuHorizontalHeader(1,78, 'div_menu_c2_header_78')}
                        onMouseOut={showHideMenuHorizontalHeader(0,78, 'div_menu_c2_header_78')}
                        className=" has-sub pos-rel">
                        <a href="https://www.24h.com.vn/thoi-trang-c78.html" onClick={undefined}
                           className="fw-medium text-uppercase pos-rel color-white">
                            Thời trang </a>
                        <div id="div_menu_c2_header_78"></div>
                    </li>
                </ul>
            </div>
            <div id="menu_trai_header_2023"></div>
        </nav>
    )
}
export default Navbar;