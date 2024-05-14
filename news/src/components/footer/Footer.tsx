import React from 'react';
import './footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
    return (
        <footer className="site-footer max-w-7xl m-auto">
            <div className="container">
                <div className="nav-footer">
                    <a href="https://tienphong.vn/contact.tpo" title="Liên hệ">TOÀ SOẠN</a>
                    <a href="https://tienphong.vn/quang-cao.tpo" title="Quảng cáo">QUẢNG CÁO</a> <a
                    href="https://tienphong.vn/contact.tpo" title="Đặt báo">ĐẶT BÁO</a> <a href="#">HOTLINE
                    QUẢNG CÁO : 0909.55.99.88</a>
                    <a href="mailto:kinhdoanh@baotienphong.com.vn"
                       rel="nofollow noopener" target="_blank"><span>EMAIL:</span>kinhdoanh@baotienphong.com.vn
                    </a>
                    <button id="go-top">
                        <FontAwesomeIcon icon={faAngleUp}/>
                    </button>
                </div>
                <div className="flex justify-center footer-info">
                    <div className="w-1/2">
                        <p>© Bản quyền thuộc báo điện tử Tiền Phong</p>
                        <p>
                            <b>Phó Tổng Biên tập phụ trách</b>
                            : PHÙNG CÔNG SƯỞNG</p>
                        <p>Tòa soạn: 15 Hồ Xuân Hương, Hà Nội - Điện thoại:
                            024.39431250</p>
                        <p>Email: <a href="mailto:online@baotienphong.com.vn" rel="nofollow noopener"
                                     target="_blank">online@baotienphong.com.vn</a> <span>Hotline: 0865.015.015 - 0977.456.112</span>
                        </p>
                    </div>
                    <div className="w-1/2">
                        <p>Giấy phép số 76/GP-BTTTT, cấp ngày 26/02/2020.</p>
                        <p>Cơ quan chủ quản:
                            Trung ương Đoàn TNCS Hồ Chí Minh</p>
                        <p>Cấm sao chép dưới mọi hình thức nếu không có sự chấp
                            thuận bằng văn bản</p>
                        <a href="https://baomoi.com/" className="powerby" rel="noopener"
                           target="_blank">Powered by ePi Technologies</a>
                        <a
                            href="//www.dmca.com/Protection/Status.aspx?ID=719bbf19-0bd5-4497-a799-021996952031"
                            title="DMCA.com Protection Status" className="dmca-badge"> <img
                            className=" lazyloaded"
                            data-src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-05.png?ID=719bbf19-0bd5-4497-a799-021996952031"
                            alt="DMCA.com Protection Status"
                            src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-05.png?ID=719bbf19-0bd5-4497-a799-021996952031"/>
                        </a>
                        <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js">
                        </script>
                    </div>
                </div>
            </div>
        </footer>

    );
}
export default Footer;
