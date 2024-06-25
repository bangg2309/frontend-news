import React from 'react';
import './articleDetail.css';

function ArticleDetail() {
    return (
        <div className="container gap-10 grid grid-cols-[1fr_300px] grid-rows-[auto] p-5">
            <div className="container__left">
                <div className={"bread-crumb-detail flex justify-between items-center mb-5"}>
                    <ul>
                        <li>
                            <a className={"color-detail font-bold uppercase"} href="#">Thế giới</a>
                        </li>
                    </ul>
                    <div className="bread-crumb-detail__time">
                        Thứ Năm, 20/06/2024 - 15:39
                    </div>
                </div>
                <div className={"content-detail"}>
                    <h1 className="content-detail-title font-bold">
                        Nga công bố số vũ khí Ukraine bị phá hủy trong chiến dịch quân
                        sự đặc biệt
                    </h1>
                    <div className="article-detail-author-wrapper ">
                        <div className="article-detail-author author-single">
                            <div className="article-detail-author__main">
                                <div className="article-detail-author__image">
                                    <a title="Minh Thu" className="lazy-background"
                                       data-background-image="https://static-images.vnncdn.net/files/2023/1/18/unnamed-4.jpg?width=65&amp;s=0_ZSv6ParIAvTxp4yK0aWw"
                                       style={{backgroundImage: 'url("https://static-images.vnncdn.net/files/2023/1/18/unnamed-4.jpg?width=65&s=0_ZSv6ParIAvTxp4yK0aWw"), url("https://res-files.vnncdn.net/files/2023/9/21/avatar-cay-but-mac-dinh.png")'}}
                                       href="/tac-gia/minh-thu-00093R.html" data-loaded="true" bg-loaded="true"> </a>
                                </div>
                                <p className="article-detail-author__info">
                    <span className="name">
                        <a href="/tac-gia/minh-thu-00093R.html" title="Minh Thu">
                            Minh Thu
                        </a>
                    </span>
                                    <span className="position"></span>
                                </p>
                            </div>
                            <div className="article-detail-author__link ">
                                <span><img className="no-zoom" width="20"
                                           src="https://static.vnncdn.net/v1/icon/right-arrow-blue.svg"/></span>
                                <a href="/tac-gia/minh-thu-00093R.html">Xem các bài viết của tác giả</a>
                            </div>
                        </div>
                    </div>
                    <h2 className="content-detail-sapo sm-sapo-mb-0">
                        Kể từ khi triển khai chiến dịch quân sự đặc biệt ở
                        Ukraine, quân đội Nga đã phá hủy hơn 26.000 máy bay không người lái (UAV) của các lực lượng
                        Kiev.</h2>
                    <div className="maincontent main-content" id="maincontent">
                        <p>"Tổng cộng, số mục tiêu bị tiêu diệt kể từ khi triển khai chiến dịch quân sự đặc biệt gồm 613
                            máy bay, 276 trực thăng, 26.008 UAV, 531 hệ thống tên lửa đất đối không, 16.385 xe tăng và
                            các phương tiện chiến đấu bọc thép, 1.346 bệ phóng tên lửa đa nòng, 10.665 pháo dã chiến và
                            súng cối, cùng 22.726 xe cơ giới quân sự đặc biệt", hãng thông tấn Tass hôm 20/6 dẫn tuyên
                            bố từ Bộ Quốc phòng Nga.&nbsp;</p>
                        <p>Còn theo hãng tin RT, cũng trong ngày 20/6, Bộ Quốc phòng Nga xác nhận đã tấn công các cơ sở
                            hạ tầng năng lượng của Ukraine trong đêm bằng tên lửa phóng từ trên không và UAV.&nbsp;</p>
                        <figure className="image vnn-content-image">
                            <picture>
                                <source
                                    data-srcset="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/6/21/nga-ukraine-7-209.jpg?width=0&amp;s=gRkhjcZK83qZgqhlIC5hvQ"
                                    media="(max-width: 1023px)"
                                    srcSet="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/6/21/nga-ukraine-7-209.jpg?width=0&amp;s=gRkhjcZK83qZgqhlIC5hvQ"/>
                                <img
                                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                    data-original="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/6/21/nga-ukraine-7-209.jpg?width=0&amp;s=gRkhjcZK83qZgqhlIC5hvQ"
                                    className=" lazy-loaded"
                                    data-srcset="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/6/21/nga-ukraine-7-209.jpg?width=0&amp;s=gRkhjcZK83qZgqhlIC5hvQ"
                                    alt="nga ukraine 7.jpg"
                                    data-thumb-small-src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/6/21/nga-ukraine-7-209.jpg?width=260&amp;s=WhVUz3YOygHKRkyHvBkE2A"
                                    data-thumb-src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/6/21/nga-ukraine-7-209.jpg?width=260&amp;s=WhVUz3YOygHKRkyHvBkE2A"
                                    data-lg-id="666b26fc-01f6-495d-bf27-ff29e0137754"
                                    srcSet="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/6/21/nga-ukraine-7-209.jpg?width=0&amp;s=gRkhjcZK83qZgqhlIC5hvQ"/>
                            </picture>
                            <figcaption>Ảnh: Tass</figcaption>
                        </figure>
                        <p>Bộ Quốc phòng Nga nhấn mạnh, đợt tấn công nhằm “đáp trả những nỗ lực phá hoại cơ sở năng
                            lượng Nga của chính quyền Kiev”, và nhắm vào các địa điểm của Ukraine “được sử dụng để sản
                            xuất<a href="https://vietnamnet.vn/vu-khi-tag8447329360542941090.html" target="_blank"> vũ
                                khí </a>cũng như thiết bị quân sự”.&nbsp;</p>
                        <p>Ukrenergo, nhà điều hành hệ thống truyền tải điện thuộc sở hữu của chính phủ Ukraine, cũng đã
                            báo cáo thiệt hại ở một số khu vực bao gồm Kiev. Theo Ukrenergo, đây là đợt tấn công thứ 7
                            của Nga vào hạ tầng năng lượng Ukraine kể từ ngày 22/3, và khiến tình trạng thiếu điện trở
                            nên trầm trọng hơn. Việc cắt điện luân phiên đang được áp dụng trên lãnh thổ
                            Ukraine.&nbsp;</p>
                        <p>Kể từ tháng 1, Kiev đã nhiều lần sử dụng UAV cảm tử tấn công các nhà máy lọc dầu, và kho chứa
                            dầu của Nga. Theo <a href="https://vietnamnet.vn/putin-tag15415580591601883766.html"
                                                 target="_blank">Tổng thống Nga Vladimir Putin</a>, để đáp trả, Moscow
                            quyết định tăng cường tấn công vào cơ sở hạ tầng của Ukraine. Song theo ông, hoạt động tấn
                            công của Nga được bắt đầu sau khi thời tiết ấm hơn để việc mất điện không gây ra mối đe dọa
                            nhân đạo.</p>
                        <p>Cũng trong đêm 19/6, loạt UAV Ukraine đã bị đánh chặn ở các khu vực Adygea, Bryansk,
                            Krasnodar, Rostov, Belgorod và Oryol của Nga. Tuy nhiên, UAV Ukraine đã gây thiêt hại cho cơ
                            sở dầu mỏ ở vùng Tambov và Adygea. Trong khi đó, một phụ nữ ở vùng Krasnodar của Nga đã
                            thiệt mạng do bị UAV Ukraine rơi trúng nhà.</p>

                    </div>
                </div>
            </div>
            <div className="container__right">
                <div className="vnn-news-ai-suggest horizontal-box-wrapper sticky top-16 pb-4"><h2
                    className="horizontal-heading">
                    Có thể bạn quan tâm
                </h2>
                    <div>
                        <div className="horizontal-item">
                            <div className="horizontal-item__image">
                                <a href="/ba-nuoc-thuoc-nato-mo-hanh-lang-chuyen-quan-toi-bien-gioi-nga-2294354.html"
                                   title="Ba nước thuộc NATO mở hành lang chuyển quân tới biên giới Nga">
                                    <img
                                        src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/6/23/ba-nuoc-thuoc-nato-mo-hanh-lang-chuyen-quan-toi-bien-gioi-nga-1560.jpg?width=260&amp;s=YWwuOWKieVgSgNnq5CqsuQ"
                                        alt="Ba nước thuộc NATO mở hành lang chuyển quân tới biên giới Nga"/>
                                </a>
                            </div>
                            <div className="horizontal-item__title">
                                <h3 className="vnn-title" data-id="">
                                    <a href="/ba-nuoc-thuoc-nato-mo-hanh-lang-chuyen-quan-toi-bien-gioi-nga-2294354.html#vnn_source=chitiet&amp;vnn_medium=box_duocquantam1"
                                       title="Ba nước thuộc NATO mở hành lang chuyển quân tới biên giới Nga"
                                       data-limit="75">
                                        Ba nước thuộc NATO mở hành lang chuyển quân tới biên giới Nga
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="horizontal-item">
                            <div className="horizontal-item__image">
                                <a href="/nga-tan-cong-co-so-huan-luyen-cua-kiev-quan-ukraine-tap-kich-crum-2294407.html"
                                   title="Nga tấn công cơ sở huấn luyện của Kiev, quân Ukraine tập kích Crưm">
                                    <img
                                        src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/6/23/nga-tan-cong-co-so-huan-luyen-cua-kiev-quan-ukraine-tap-kich-crum-2193.jpg?width=260&amp;s=FBMATZNRHQUuTzyh-XsnHw"
                                        alt="Nga tấn công cơ sở huấn luyện của Kiev, quân Ukraine tập kích Crưm"/>
                                </a>
                            </div>
                            <div className="horizontal-item__title">
                                <h3 className="vnn-title" data-id="">
                                    <a href="/nga-tan-cong-co-so-huan-luyen-cua-kiev-quan-ukraine-tap-kich-crum-2294407.html#vnn_source=chitiet&amp;vnn_medium=box_duocquantam2"
                                       title="Nga tấn công cơ sở huấn luyện của Kiev, quân Ukraine tập kích Crưm"
                                       data-limit="75">
                                        Nga tấn công cơ sở huấn luyện của Kiev, quân Ukraine tập kích Crưm
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="horizontal-item">
                            <div className="horizontal-item__image">
                                <a href="/lang-nho-romania-thanh-can-cu-khong-quan-lon-nhat-cua-nato-o-chau-au-2294369.html"
                                   title="Làng nhỏ Romania thành căn cứ không quân lớn nhất của NATO ở châu Âu">
                                    <img
                                        src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/6/24/lang-nho-romania-thanh-can-cu-khong-quan-lon-nhat-cua-nato-o-chau-au-69.jpg?width=260&amp;s=YU5WILHSeNE7z29bbZk-Cw"
                                        alt="Làng nhỏ Romania thành căn cứ không quân lớn nhất của NATO ở châu Âu"/>
                                </a>
                            </div>
                            <div className="horizontal-item__title">
                                <h3 className="vnn-title" data-id="">
                                    <a href="/lang-nho-romania-thanh-can-cu-khong-quan-lon-nhat-cua-nato-o-chau-au-2294369.html#vnn_source=chitiet&amp;vnn_medium=box_duocquantam3"
                                       title="Làng nhỏ Romania thành căn cứ không quân lớn nhất của NATO ở châu Âu"
                                       data-limit="75">
                                        Làng nhỏ Romania thành căn cứ không quân lớn nhất của NATO ở châu Âu
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="horizontal-item">
                            <div className="horizontal-item__image">
                                <a href="/my-dong-cua-cac-trung-tam-thi-thuc-cua-nga-2294301.html"
                                   title="Mỹ đóng cửa các trung tâm thị thực của Nga">
                                    <img
                                        src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2024/6/23/my-dong-cua-cac-trung-tam-thi-thuc-cua-nga-986.jpg?width=260&amp;s=usXG-qHmX648EJUKXGbUxg"
                                        alt="Mỹ đóng cửa các trung tâm thị thực của Nga"/>
                                </a>
                            </div>
                            <div className="horizontal-item__title">
                                <h3 className="vnn-title" data-id="">
                                    <a href="/my-dong-cua-cac-trung-tam-thi-thuc-cua-nga-2294301.html#vnn_source=chitiet&amp;vnn_medium=box_duocquantam4"
                                       title="Mỹ đóng cửa các trung tâm thị thực của Nga" data-limit="75">
                                        Mỹ đóng cửa các trung tâm thị thực của Nga
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <a href="/" className="btn-back-home" title="Quay lại trang chủ">
                            <img className="mr-2" src="https://static.vnncdn.net/v1/icon/icon-pre-bule-sm.png"/>
                            QUAY LẠI TRANG CHỦ
                        </a>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}

export default ArticleDetail;