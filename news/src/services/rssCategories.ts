import {Category} from "../interfaces/Category";

export const rssCategories: Category[] = [
    {
        name: 'Trang chủ',
        rss: 'home.rss',
        url: '/'
    },
    {
        name: 'Xã hội',
        rss: 'xa-hoi-2.rss'
        , url: '/the-loai/xa-hoi'
        , subType: [
            {
                name: 'Chính trị',
                url: '/the-loai/chinh-tri',
                rss: 'chinh-tri-308.rss'
            },
            {
                name: 'Tin tức',
                rss: 'tin-tuc-euro-176.rss',
                url: '/the-loai/tin-tuc'
            },
            {
                name: 'Chuyện hôm nay',
                rss: 'xa-hoi-chuyen-hom-nay-18.rss',
                url: '/the-loai/chuyen-hom-nay',
            },
            {
                name: 'Phóng sự',
                rss: 'xa-hoi-phong-su-13.rss',
                url: '/the-loai/phong-su',
            }
        ]
    },
    {
        name: 'Kinh tế',
        rss: 'kinh-te-3.rss'
        , url: '/the-loai/kinh-te',
        subType: [
            {
                name: 'Doanh nghiệp',
                rss: 'doanh-nghiep-22.rss',
                url: '/the-loai/doanh-nghiep'
            },
            {
                name: 'Đầu tư',
                rss: 'dau-tu-165.rss',
                url: '/the-loai/dau-tu'
            },
            {
                name: 'Thị trường',
                rss: 'kinh-te-thi-truong-24.rss',
                url: '/the-loai/thi-truong'
            }
        ]
    },
    {
        name: 'Địa ốc',
        rss: 'dia-oc-166.rss',
        url: '/the-loai/dia-oc',
        subType: [
            {
                name: 'Đô thị - Dự án',
                rss: 'do-thi-du-an-269.rss',
                url: '/the-loai/do-thi-du-an'
            },
            {
                name: 'Thị trường - Doanh nghiệp',
                rss: 'thi-truong-doanh-nghiep-270.rss',
                url: '/the-loai/thi-truong-doanh-nghiep'
            },
            {
                name: 'Nhà đẹp - Kiến trúc',
                rss: 'nha-dep-kien-truc-271.rss',
                url: '/the-loai/nha-dep-kien-truc'
            },
            {
                name: 'Chuyên gia - Tu vấn',
                rss: 'chuyen-gia-tu-van-272.rss',
                url: '/the-loai/chuyen-gia-tu-van'
            },
        ]
    },
    {
        name: 'Sức khỏe',
        rss: 'suc-khoe-210.rss'
        , url: '/the-loai/suc-khoe',
        subType: [
            {
                name: 'Thuốc đúng - Thuốc tốt',
                rss: 'thuoc-dung-thuoc-tot-305.rss',
                url: '/the-loai/thuoc-dung-thuoc-tot'
            }
        ]
    },
    {
        name: 'Thế giới',
        rss: 'the-gioi-5.rss',
        url: '/the-loai/the-gioi',
        subType:[
            {name: 'Phân tích - Bình luận',
            rss:'the-gioi-phan-tich-binh-luan-31.rss',
            url: '/the-loai/phan-tich-binh-luan'
            },
            {name: 'Chuyện lạ',
            rss:'chuyen-la-32.rss',
            url: '/the-loai/chuyen-la'
            },
        ]
    },
    {
        name: 'Giới trẻ',
        rss: 'gioi-tre-4.rss',
        url: '/the-loai/gioi-tre',
        subType:[
            {
                name : 'Nhịp sống',
                rss: 'gioi-tre-nhip-song-27.rss',
                url: '/the-loai/nhip-song'
            },{
                name:'Cộng đồng mạng',
                rss: 'cong-dong-mang-26.rss',
                url: '/the-loai/cong-dong-mang'
            },{
            name: 'Tài năng trẻ',
                rss:'tai-nang-tre-295.rss',
                url: '/the-loai/tai-nang-tre'
            }
        ]
    },
    {
        name: 'Pháp luật',
        rss: 'phap-luat-12.rss'
        , url: '/the-loai/phap-luat',
        subType:[
            {
                name: 'Bản tin',
                rss: 'ban-tin-113-231.rss',
                url: '/the-loai/ban-tin'
            },
            {
                name: 'Pháp đình',
                rss: 'phap-luat-chuyen-toa-173.rss',
                url: '/the-loai/phap-dinh'
            }
        ]
    },
    {
        name: 'Thể thao',
        rss: 'the-thao-11.rss'
        , url: '/the-loai/the-thao',
        subType:[
            {name: 'Bóng đá',
            rss: 'the-thao-bong-da-49.rss',
            url: '/the-loai/bong-da'},
            {
                name: 'Hậu trường thể thao',
                rss: 'the-thao-hau-truong-111.rss',
                url: '/the-loai/hau-truong-the-thao'
            }
        ]
    },
    {
        name: 'Người lính',
        rss: 'hanh-trang-nguoi-linh-182.rss'
        , url: '/the-loai/nguoi-linh'
    },
    {
        name: 'Xe',
        rss: 'xe-113.rss'
        , url: '/the-loai/xe'
    },
    {
        name: 'Văn hóa',
        rss: 'van-hoa-7.rss'
        , url: '/the-loai/van-hoa'
    },
    {
        name: 'Giải trí',
        rss: 'giai-tri-36.rss'
        , url: '/the-loai/giai-tri'
    },
    {
        name: 'Giáo dục',
        rss: 'giao-duc-71.rss'
        , url: '/the-loai/giao-duc'
    },
    {
        name: 'Khoa học',
        rss: 'cong-nghe-45.rss'
        , url: '/the-loai/khoa-hoc'

    },
];