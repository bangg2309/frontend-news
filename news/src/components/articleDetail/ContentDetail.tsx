import React from 'react';

interface ContentDetailProps {
    title: string;
    sapo: string;
    children: React.ReactNode;
}

const ContentDetail: React.FC<ContentDetailProps> = ({ title, sapo, children }) => {
    const titleStyle: React.CSSProperties = {
        color: '#2a2a2a',
        fontFamily: 'notosans-bold',
        fontSize: '1.875rem',
        lineHeight: '2.375rem',
        marginBottom: '1.25rem',
        marginTop:'1.25rem'
    }
    return (
        <div style={{fontFamily: "Arial"}}>
            <h1 className="font-bold" style={titleStyle}>
                {title}
            </h1>
            <h2 className="text-gray-700 text-base font-bold leading-6 mb-5 mt-5 ">
                {sapo}
            </h2>
            <div className="text-gray-600 text-base leading-7">
                {children}
            </div>
        </div>
    );
};

export default ContentDetail;
