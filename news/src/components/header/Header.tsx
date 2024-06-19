import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFax,
    faHouse,
    faLocationDot,
    faPhone,
    faShareNodes,
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import './header.css';
import Slide from "../slide-header/slider";
import {displayTime} from "./headerScript";

const Header: React.FC = () => {
    displayTime();
    return (
        <header className="site-header">
            <div className="header__topbanner">
                <div id="adsWeb_AdsTopFull" className="banner clearfix" data-platform="1"
                     data-position="Web_AdsTopFull">
                    <script>
                        {/*if(typeof*/}
                        {/*Web_AdsTopFull!="undefined"){window.CMS_BANNER.pushAds(Web_AdsTopFull, "adsWeb_AdsTopFull")}else{document.getElementById("adsWeb_AdsTopFull").style.display = "none"};*/}
                    </script>
                    <div id="Web_AdsTopFull_0" className="adsitem banner_show" rel="5919"
                         data-tag="dien bien phu web"><a rel="noopener"
                                                         href="#"
                        // href="https://tienphong.vn/event/70-nam-chien-thang-dien-bien-phu-2460.tpo"
                                                         target="_blank"><img className=" ls-is-cached lazyloaded"
                                                                              src="https://image.tienphong.vn/Uploaded/2024/natmbw/2024_04_09/dien-bien-phu-5110.jpg"
                                                                              data-src="https://image.tienphong.vn/Uploaded/2024/natmbw/2024_04_09/dien-bien-phu-5110.jpg"
                                                                              style={{border: 0}}
                                                                              alt="dien bien phu web"/></a></div>
                </div>
            </div>
            <div className="site-header__other">
                <div className="container">
                    <div className="link"><a href="https://tienphong.vn/contact.tpo" title="Toà soạn">Toà soạn</a> <a
                        href="https://tienphong.vn/quang-cao.tpo" title="Quảng cáo">Quảng cáo</a> <span>Hotline: 0865.015.015 - 0977.456.112</span>
                    </div>
                    <div className="relate-site"><a href="https://tienphong.vn/nhat-bao/" className="nb"
                                                    title="Nhật báo"></a>
                        <a href="https://svvn.tienphong.vn" className="sv" target="_blank" rel="noopener"
                           title="Sinh viên Việt Nam"></a> <a href="https://hoahoctro.tienphong.vn" className="hht"
                                                              target="_blank" rel="noopener" title="Hoa Học Trò"></a> <a
                            href="https://tamviet.tienphong.vn" className="tamviet" target="_blank" rel="noopener"
                            title="Tâm Việt"></a></div>
                    <div className="top-social"><a href="https://www.youtube.com/@baotienphong" target="_blank"
                                                   title="Youtube"> <i className="social-youtube"></i> </a> <a
                        href="https://www.facebook.com/www.tienphong.vn/" target="_blank" title="Facebook"> <i
                        className="social-facebook"></i> </a> <a href="https://zalo.me/783607375436573981"
                                                                 target="_blank"
                                                                 title="Zalo"> <i className="social-zalo"></i> </a>
                    </div>
                </div>
            </div>
            <div className="site-header__body">
                <div className="container">
                    <div className="flex">
                        <div className="flex-none"><a href="https://tienphong.vn" className="site-header__logo"
                                                      title="Báo điện tử Tiền Phong"><h1>Báo điện tử Tiền Phong</h1></a>
                        </div>
                        <div className="flex-1">
                            <div className="site-header__trending">
                                <Slide/>
                            </div>
                        </div>
                        <div className="col-auto search-time">
                            <time id="fulltime"></time>
                            <div className="search-wrap">
                                <input type="text" className="search-input txtsearch"
                                       placeholder="Nhập từ khóa tìm kiếm"/>
                                <button className="search-button btn_search">
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;