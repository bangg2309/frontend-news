import {Category} from "../interfaces/Category";

export const rssCategories: Category[] = [
    {
        name: 'Trang chủ',
        rss: 'home.rss',
        url: '/'
    },
    // {
    //     name: 'Euro',
    //     rss: 'euro-2024-175.rss',
    //     url: ''
    // },
    {
        name: 'Bên lề',
        rss: 'ben-le-erro-177.rss'
        , url: 'the-loai/ben-le'
    },
    {
        name: 'Trực tiếp',
        rss: 'truc-tiep-euro-439.rss'
        , url: 'the-loai/truc-tiep'
    },
    {
        name: 'Video',
        rss: 'video-euro-178.rss'
        , url: 'the-loai/video'
    },
    {
        name: 'Xã hội',
        rss: 'xa-hoi-2.rss'
        , url: 'the-loai/xa-hoi'
        , subType: [
            {
                name: 'Chính trị',
                url: 'the-loai/chinh-tri',
                rss: 'chinh-tri-308.rss'
            },
            {
                name: 'Tin tức',
                rss: 'tin-tuc-euro-176.rss',
                url: 'the-loai/tin-tuc'
            },
            {
                name: 'Chuyện hôm nay',
                rss: 'xa-hoi-chuyen-hom-nay-18.rss',
                url: 'the-loai/chuyen-hom-nay',
            },
            {
                name: 'Phóng sự',
                rss: 'xa-hoi-phong-su-13.rss',
                url: 'the-loai/phong-su',
            }
        ]
    },
    {
        name: 'Kinh tế',
        rss: 'kinh-te-3.rss'
        , url: 'the-loai/kinh-te',
        subType: [
            {
                name: 'Doanh nghiệp',
                rss: 'doanh-nghiep-22.rss',
                url: 'the-loai/doanh-nghiep'
            },
            {
                name: 'Đầu tư',
                rss: 'dau-tu-165.rss',
                url: 'the-loai/dau-tu'
            },
            {
                name: 'Thị trường',
                rss: 'kinh-te-thi-truong-24.rss',
                url: 'the-loai/thi-truong'
            }
        ]
    },
    {
        name: 'Địa ốc',
        rss: 'dia-oc-166.rss',
        url: 'the-loai/dia-oc',
        subType: [
            {
                name: 'Đô thị - Dự án',
                rss: 'do-thi-du-an-269.rss',
                url: 'the-loai/do-thi-du-an'
            }
        ]
    },
    {
        name: 'Sức khỏe',
        rss: 'suc-khoe-210.rss'
        , url: 'the-loai/suc-khoe',
        subType: [
            {
                name: 'thuốc đúng - Thuốc tốt',
                rss: 'thuoc-dung-thuoc-tot-305.rss',
                url: 'the-loai/thuoc-dung-thuoc-tot'
            }
        ]
    },
    {
        name: 'Kinh doanh',
        rss: 'kinh-doanh-63.rss'
        , url: 'the-loai/kinh-doanh'
    },
    {
        name: 'Giải trí',
        rss: 'giai-tri-63.rss'
        , url: 'the-loai/giai-tri'
    },
    {
        name: 'Thể thao',
        rss: 'the-thao-63.rss'
        , url: 'the-loai/the-thao'
    },
    {
        name: 'Công nghệ',
        rss: 'cong-nghe-63.rss'
        , url: 'the-loai/cong-nghe'
    },
    {
        name: 'Xe',
        rss: 'xe-63.rss'
        , url: 'the-loai/xe'
    },
    {
        name: 'Sức khỏe',
        rss: 'suc-khoe-63.rss'
        , url: 'the-loai/suc-khoe'
    },
    {
        name: 'Du lịch',
        rss: 'du-lich-63.rss'
        , url: 'the-loai/du-lich'
    },
    {
        name: 'Giáo dục',
        rss: 'giao-duc-63.rss'
        , url: 'the-loai/giao-duc'
    },
    {
        name: 'Nhịp sống trẻ',
        rss: 'nhip-song-tre-63.rss'
        , url: 'the-loai/nhip-song-tre'

    },
    {
        name: 'Tâm sự',
        rss: 'tam-su-63.rss'
        , url: 'the-loai/tam-su'

    },
    {
        name: 'Cộng đồng',
        rss: 'cong-dong-63.rss'
        , url: 'the-loai/cong-dong'

    }
];