import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";
function SimpleSlider() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    };
    return (
        <Slider {...settings}
                className={"wrap"}
        >
            <div className="item">
                <a href="https://tienphong.vn/event/70-nam-chien-thang-dien-bien-phu-2460.tpo"
                   title="70 NĂM CHIẾN THẮNG ĐIỆN BIÊN PHỦ">
                    {/*<i className="fal fa-star"></i>*/}
                    <FontAwesomeIcon icon={faStar} />
                    <span> 70 NĂM CHIẾN THẮNG ĐIỆN BIÊN PHỦ</span>
                </a>
                <a href="https://tienphong.vn/event/giac-mo-xanh-2459.tpo" title="GIẤC MƠ XANH">
                    {/*<i className="fa-regular fa-star"></i>*/}
                    <FontAwesomeIcon icon={faStar} />
                    {/*<FontAwesomeIcon icon="fa-regular fa-star" />*/}
                    <span> GIẤC MƠ XANH</span>
                </a>
            </div>
            <div className="item">
                <a href="https://tienphong.vn/event/chong-tin-gia-tin-xau-2387.tpo" title="CHỐNG TIN GIẢ, TIN XẤU">
                    {/*<i className="fal fa-star"></i>*/}
                    <FontAwesomeIcon icon={faStar} />
                    <span> CHỐNG TIN GIẢ, TIN XẤU</span>
                </a>
                <a href="https://tienphong.vn/event/thang-thanh-nien-2024-2305.tpo" title="THÁNG THANH NIÊN 2024">
                    {/*<i className="fal fa-star"></i>*/}
                    <FontAwesomeIcon icon={faStar} />
                    <span> THÁNG THANH NIÊN 2024</span>
                </a>
            </div>
            <div className="item">
                <a href="https://tienphong.vn/event/guong-mat-tre-viet-nam-tieu-bieu-2303.tpo"
                   title="GƯƠNG MẶT TRẺ VIỆT NAM TIÊU BIỂU">
                    {/*<i className="fal fa-star"></i>*/}
                    <FontAwesomeIcon icon={faStar} />
                    <span> GƯƠNG MẶT TRẺ VIỆT NAM TIÊU BIỂU</span>
                </a>
                <a href="https://tienphong.vn/event/tien-phong-marathon-2024-2454.tpo"
                   title=" TIỀN PHONG MARATHON 2024">
                    {/*<i className="fal fa-star"></i>*/}
                    <FontAwesomeIcon icon={faStar} />
                    <span> TIỀN PHONG MARATHON 2024</span>
                </a>
            </div>
            <div className="item">
                <a href="https://tienphong.vn/event/chu-nhat-do-2216.tpo" title="CHỦ NHẬT ĐỎ">
                    {/*<i className="fal fa-star"></i>*/}
                    <FontAwesomeIcon icon={faStar} />
                    <span> CHỦ NHẬT ĐỎ</span>
                </a>
                <a href="https://tienphong.vn/event/70-nam-trong-doi-ngu-tien-phong-2442.tpo"
                   title="70 NĂM TRONG ĐỘI NGŨ TIÊN PHONG">
                    {/*<i className="fal fa-star"></i>*/}
                    <FontAwesomeIcon icon={faStar} />
                    <span> 70 NĂM TRONG ĐỘI NGŨ TIÊN PHONG</span>
                </a>
            </div>
        </Slider>
    );
}

export default SimpleSlider;
