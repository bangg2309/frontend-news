import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faLocationDot, faShareNodes} from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white max-w-5xl m-auto pt-5">
            <div className="container mx-auto">
                <div className="flex items-center justify-end mb-2.5">
                    <div
                        className="bg-green-600 hover:bg-green-700 text-white cursor-pointer font-bold py-2 px-4 rounded-full h-auto">
                        <a href="javascrip:void(0)"
                           className="flex items-center content-center text-white uppercase font-bold">
                            <FontAwesomeIcon icon={faShareNodes} className="mr-1.5"/>
                            chia sẻ
                        </a>
                    </div>
                    <div
                        className="bg-green-600 hover:bg-green-700 text-white cursor-pointer font-bold py-2 px-4 ml-2.5 rounded-full h-auto">
                        <a href="#" className="flex items-center text-white  cursor-pointer">
                            <FontAwesomeIcon icon={faHouse} size="xl" />
                        </a>
                    </div>
                </div>
                <nav>
                    <div className="container m-auto">
                        <ul className="flex items-center border-t-2 border-b-2">
                            <li>
                                <FontAwesomeIcon icon={faHouse} size="sm" />
                            </li>
                            <li>
                                <a href="#"  className="uppercase hover:text-green-600 border-r-2 text-xs px-4 text-[#464646]">Tin tức</a>
                            </li>
                            <li>
                                <a href="#"  className="uppercase hover:text-green-600 border-r-2 text-xs px-4 text-[#464646]">Bóng đá</a>
                            </li>
                            <li>
                                <a href="#"  className="uppercase hover:text-green-600 border-r-2 text-xs px-4 text-[#464646]">Pháp luật</a>
                            </li>
                            <li>
                                <a href="#"  className="uppercase hover:text-green-600 border-r-2 text-xs px-4 text-[#464646]">Hi-tech</a>
                            </li>
                            <li>
                                <a href="#"  className="uppercase hover:text-green-600 border-r-2 text-xs px-4 text-[#464646]">Kinh doanh</a>
                            </li>
                            <li>
                                <a href="#"  className="uppercase hover:text-green-600 border-r-2 text-xs px-4 text-[#464646]">Thời trang</a>
                            </li>
                            <li>
                                <a href="#"  className="uppercase hover:text-green-600 text-xs px-4 text-[#464646]">Sức khỏe</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="mt-5 pb-10">
                    <div className="row">
                        <div className="col-6">
                            <p className="mb-2.5">
                                <span className="uppercase font-bold text-sm"> Trụ sở Hà Nội</span>
                            </p>
                        </div>
                        <p className="flex mb-2.5">
                            <FontAwesomeIcon icon={faLocationDot} />
                            
                        </p>
                        <div className="col-6">

                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
export default Footer;
