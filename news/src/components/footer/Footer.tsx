import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFax, faHouse, faLocationDot, faPhone, faShareNodes} from "@fortawesome/free-solid-svg-icons";
import './footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white max-w-5xl m-auto pt-5">
            <div className="container mx-auto">
                <div className="flex items-center justify-end mb-2.5">
                    <div
                        className="bg-[#78B43D] hover:bg-[#669a33] text-white cursor-pointer font-bold py-2 px-4 rounded-full h-auto">
                        <a href="javascrip:void(0)"
                           className="flex items-center content-center text-white uppercase font-bold text-sm">
                            <FontAwesomeIcon icon={faShareNodes} className="mr-1.5 text-xl"/>
                            chia sẻ
                        </a>
                    </div>
                    <div
                        className="bg-[#78B43D] hover:bg-[#669a33] text-white cursor-pointer font-bold py-2 px-4 ml-2.5 rounded-full h-auto">
                        <a href="#" className="flex items-center text-white  cursor-pointer">
                            <FontAwesomeIcon icon={faHouse} className="text-sm w-5 h-5"/>
                        </a>
                    </div>
                </div>
                <nav>
                    <div className="container m-auto">
                        <ul className="flex items-center border-t-2 border-b-2">
                            <li>
                                <a href="#">
                                    <FontAwesomeIcon icon={faHouse} size="sm"/>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="uppercase hover:text-green-600 border-r-2 text-xs px-4 text-[#464646]">Tin
                                    tức</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="uppercase hover:text-green-600 border-r-2 text-xs px-4 text-[#464646]">Bóng
                                    đá</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="uppercase hover:text-green-600 border-r-2 text-xs px-4 text-[#464646]">Pháp
                                    luật</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="uppercase hover:text-green-600 border-r-2 text-xs px-4 text-[#464646]">Hi-tech</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="uppercase hover:text-green-600 border-r-2 text-xs px-4 text-[#464646]">Kinh
                                    doanh</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="uppercase hover:text-green-600 border-r-2 text-xs px-4 text-[#464646]">Thời
                                    trang</a>
                            </li>
                            <li>
                                <a href="#" className="uppercase hover:text-green-600 text-xs px-4 text-[#464646]">Sức
                                    khỏe</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="mt-5 pb-10">
                    <div className="container m-auto">
                        <div className="flex">
                            <div className="w-1/2 border-r-2 pr-8">
                                <div className="mb-5 footer-24h-info">
                                    <p className="mb-2.5">
                                        <span
                                            className="flex uppercase font-bold text-sm justify-start"> Trụ sở Hà Nội</span>
                                    </p>
                                    <p className="flex mb-2.5">
                                        <FontAwesomeIcon icon={faLocationDot} className="text-xs mr-1.5 text-[#333]"/>
                                        <span className="text-xs">Tầng 12, Tòa nhà Geleximco , 36 Hoàng Cầu, Phường Ô chợ Dừa, Quận Đống Đa, Tp. Hà Nội
                                        </span>
                                    </p>
                                    <p className="flex mb-2.5">
                                        <FontAwesomeIcon icon={faPhone} className="text-xs mr-1.5 text-[#333]"/>
                                        <span
                                            className="text-xs">Điện thoại: (84-24) 73 00 24 24 | (84-24) 35 12 18 06</span>
                                    </p>
                                    <p className="flex mb-2.5">
                                        <FontAwesomeIcon icon={faFax} className="text-xs mr-1.5 text-[#333]"/>
                                        <span className="text-xs">Fax: 0243 512 1804</span>
                                    </p>
                                </div>
                                <div className="mb-7 footer-24h-info">
                                    <p className="mb-2.5">
                                        <span
                                            className="flex uppercase font-bold text-sm justify-start"> Chi nhánh tp.Hồ Chí Minh</span>
                                    </p>
                                    <p className="flex mb-2.5">
                                        <FontAwesomeIcon icon={faLocationDot} className="text-xs mr-1.5 text-[#333]"/>
                                        <span className="text-xs">Tầng 7, Tòa nhà Việt Úc, 402 Nguyễn Thị Minh Khai, Phường 5 , Quận 3 , Tp. Hồ Chí Minh
                                        </span>
                                    </p>
                                    <p className="flex mb-2.5">
                                        <FontAwesomeIcon icon={faPhone} className="text-xs mr-1.5 text-[#333]"/>
                                        <span
                                            className="text-xs">Điện thoại: (84-28) 73 00 24 24</span>
                                    </p>
                                </div>
                                <div className="footer-24h-link flex items-center text-sm ">
                                    <a href="#" className="uppercase font-bold link-adv hover-color-24h"> Liên hệ quảng cáo</a>
                                    <a href="#" className="uppercase font-bold hover-color-24h"> Giới thiệu</a>
                                    <a href="#" className="uppercase font-bold hover-color-24h"> Góp ý</a>
                                </div>
                            </div>
                            <div className="w-1/2 pl-8">
                                <div className="footer-24h-info mb-7">
                                    <p className="mb-2.5">
                                        <span className="uppercase font-bold">CÔNG TY CỔ PHẦN QUẢNG CÁO TRỰC TUYẾN 24H</span>
                                    </p>
                                    <p className="icon-vh-24h mb-5">
                                        <img src="https://icdn.24h.com.vn/images/img_home_listing/footer-24h.png" alt=""/>
                                    </p>
                                    <p className="flex mb-2.5 text-xs" >
                                       Giấy phép số 348/GP - BTTTT do Bộ Thông Tin và Truyền thông cấp ngày 17/06/2016
                                    </p>
                                    <p className="flex mb-2.5 text-xs">
                                        SỞ THÔNG TIN VÀ TRUYỀN THÔNG HÀ NỘI
                                    </p>
                                    <p className="flex mb-2.5 text-xs">
                                        Chịu trách nhiệm quản lý nội dung: <strong className="ml-1">Phan Minh Tâm</strong>
                                        . Hotline: <strong className="ml-1">0965 08 24 24</strong>
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
export default Footer;
