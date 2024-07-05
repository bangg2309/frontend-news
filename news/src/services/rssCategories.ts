import {Category} from "../interfaces/Category";

export const rssCategories: Category[] = [
    {
        name: 'Trang chủ',
        rss: 'home.rss',
        url: '/trang-chu'
    },
    // {
    //     name: 'Euro',
    //     rss: 'euro-2024-175.rss',
    //     url: ''
    // },
    {
        name: 'Bên lề',
        rss: 'ben-le-erro-177.rss'
        , url: ''
    },
    {
        name: 'Trực tiếp',
        rss: 'truc-tiep-euro-439.rss'
        , url: ''
    },
    {
        name: 'Video',
        rss: 'video-euro-178.rss'
        , url: ''
    },
    {
        name: 'Xã hội',
        rss: 'xa-hoi-2.rss'
        , url: ''
        , subType: [
            {
                name: 'Chính trị',
                url: '',
                rss: 'chinh-tri-308.rss'
            },
            {
                name: 'Tin tức',
                rss: 'tin-tuc-euro-176.rss',
                url: ''
            },
            {
                name: 'Chuyện hôm nay',
                rss: 'xa-hoi-chuyen-hom-nay-18.rss',
                url: '',
            },
            {
                name: 'Phóng sự',
                rss: 'xa-hoi-phong-su-13.rss',
                url: '',
            }
        ]
    },
    {
        name: 'Kinh tế',
        rss: 'kinh-te-3.rss'
        , url: '',
        subType: [
            {
                name: 'Doanh nghiệp',
                rss: 'doanh-nghiep-22.rss',
                url: ''
            },
            {
                name: 'Đầu tư',
                rss: 'dau-tu-165.rss',
                url: ''
            },
            {
                name: 'Thị trường',
                rss: 'kinh-te-thi-truong-24.rss',
                url: ''
            }
        ]
    },
    {
        name: 'Địa ốc',
        rss: 'dia-oc-166.rss',
        url: '',
        subType: [
            {
                name: 'Đô thị - Dự án',
                rss: 'do-thi-du-an-269.rss',
                url: ''
            }
        ]
    },
    {
        name: 'Sức khỏe',
        rss: 'suc-khoe-210.rss'
        , url: '',
        subType: [
            {
                name: 'thuốc đúng - Thuốc tốt',
                rss: 'thuoc-dung-thuoc-tot-305.rss',
                url: ''
            }
        ]
    },
    {
        name: 'Kinh doanh',
        rss: 'kinh-doanh-63.rss'
        , url: ''
    },
    {
        name: 'Giải trí',
        rss: 'giai-tri-63.rss'
        , url: ''
    },
    {
        name: 'Thể thao',
        rss: 'the-thao-63.rss'
        , url: ''
    },
    {
        name: 'Công nghệ',
        rss: 'cong-nghe-63.rss'
        , url: ''
    },
    {
        name: 'Xe',
        rss: 'xe-63.rss'
        , url: ''
    },
    {
        name: 'Sức khỏe',
        rss: 'suc-khoe-63.rss'
        , url: ''
    },
    {
        name: 'Du lịch',
        rss: 'du-lich-63.rss'
        , url: ''
    },
    {
        name: 'Giáo dục',
        rss: 'giao-duc-63.rss'
        , url: ''
    },
    {
        name: 'Nhịp sống trẻ',
        rss: 'nhip-song-tre-63.rss'
        , url: ''

    },
    {
        name: 'Tâm sự',
        rss: 'tam-su-63.rss'
        , url: ''

    },
    {
        name: 'Cộng đồng',
        rss: 'cong-dong-63.rss'
        , url: ''

    }
];