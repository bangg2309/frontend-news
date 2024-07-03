import React from 'react';

interface BreadcrumbDetailProps {
    category: string;
    time: string;
}

const BreadcrumbDetail: React.FC<BreadcrumbDetailProps> = ({category, time}) => {
    const liStyle: React.CSSProperties = {
        fontFamily: 'notosans-bold',
        fontSize: '16px',
        marginRight: '10px',
        textTransform: 'uppercase'
    }
    const timeStyle: React.CSSProperties = {
        color: '#555',
        fontFamily: 'notosans-regular',
        fontSize: '12px',
        lineHeight: '15px',
        textTransform: 'lowercase'
    }
    return (
        <div className={"flex justify-between items-center mb-5"}>
            <ul>
                <li style={liStyle}>
                    <a className={"text-[#2d67ad] font-bold uppercase"} href="#">{category}</a>
                </li>
            </ul>
            <div style={timeStyle}>
                {time}
            </div>
        </div>
    );
};

export default BreadcrumbDetail;
