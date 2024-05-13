import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFax, faHouse, faLocationDot, faPhone, faShareNodes} from "@fortawesome/free-solid-svg-icons";
import './header.css';

const Header: React.FC = () => {
    return (
        <header className="header bg-white flex items-center hdr" id="header">
            <div className="container flex-1 content-between m-auto">
                <div className="flex items-center justify-between">
                    <div className="col-start-1 flex items-center">
                        <div className="logo mr-20">
                            <a href="#"
                               title="Tin tức bóng đá, thể thao, giải trí | Đọc tin tức 24h mới nhất">
                                <img alt="Tin tức bóng đá, thể thao, giải trí | Đọc tin tức 24h mới nhất"
                                     src="https://icdn.24h.com.vn/upload/4-2023/images/2023-11-30/logo-24h-new-1701313347-933-widthheight.svg"
                                     className="load" data-was-processed="true"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-end-1 flex items-center justify-end">
                        <ul className="header-br-r pr-5 mr-5 flex items-center">
                            <li>
                                <h2>
                                    <a
                                       href="https://www.24h.com.vn/idp-cap-sai-56000-chung-chi-ielts-c216e7678.html"
                                       className="flex items-center hover-color">
                                        <img className="icon-svg mr-2.5 img-fluid object-scale-down initial loaded"
                                             alt="https://icdn.24h.com.vn/upload/2-2024/images/2024-05-10/icon-tin-xu-the-1689564476-745-width40height22-1715306584-337-width40height22.png"
                                             src="https://icdn.24h.com.vn/upload/2-2024/images/2024-05-10/icon-tin-xu-the-1689564476-745-width40height22-1715306584-337-width40height22.png"
                                             data-was-processed="true"/>
                                        IDP cấp sai 56.000 chứng chỉ IELTS
                                    </a>
                                </h2>
                            </li>
                            <li>
                                <h2>
                                    <a
                                        href="https://www.24h.com.vn/lich-van-nien-c936.html"
                                       className="flex items-center hover-color">
                                        <img className="icon-svg ml-5 mr-2.5 img-fluid object-scale-down initial loaded"
                                             alt="https://icdn.24h.com.vn/upload/1-2024/images/2024-03-29/lunar--1--1708588958-802-width112height111-1711692594-820-width112height111.png"
                                             src="https://icdn.24h.com.vn/upload/1-2024/images/2024-03-29/lunar--1--1708588958-802-width112height111-1711692594-820-width112height111.png"
                                             data-was-processed="true"/>
                                        Lịch vạn niên
                                    </a>
                                </h2>
                            </li>
                        </ul>
                        <div className="header-search relative flex items-center">
                            <input type="header-search-input" id="search" placeholder="Nhập tin tức cần tìm" spellCheck="false" autoComplete="off"/>
                            <a className="header-search-btn cursor-pointer" href="#">
                                <i className="fa fa-search"></i>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;