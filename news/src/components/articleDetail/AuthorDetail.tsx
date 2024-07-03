import React from 'react';

interface Author {
    name: string;
    image: string;
    link: string;
}

interface AuthorDetailProps {
    author: Author;
}

const AuthorDetail: React.FC<AuthorDetailProps> = ({author}) => {
    const authorStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        paddingBottom: '15px',
        borderBottom: '1px solid #e2e2e2'
    }
    const mainStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center'
    }
    const imgStyle: React.CSSProperties = {
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        overflow: 'hidden',
        marginRight: '10px',
        minWidth: '35px'
    }
    const imgAStyle: React.CSSProperties = {
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        display: 'block',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${author.image})`
    }
    const infoAStyle: React.CSSProperties = {
        color: '#333',
        fontSize: '14px',
        lineHeight: '20px',
        textDecoration: 'none',
        display: 'block',
        transition: 'color 0.3s',
        fontFamily: 'notosans-regular'
    }
    const linkAStyle: React.CSSProperties = {
        color: '#2d67ad',
        fontFamily: 'Arial',
        fontSize: '12px',
        lineHeight: '15px',
        textDecoration: 'underline'
    }
    return (
        <div>
            <div style={authorStyle}>
                <div style={mainStyle}>
                    <div style={imgStyle}>
                        <a title={author.name} className="lazy-background"
                           data-background-image={author.image}
                           style={imgAStyle}
                           href={author.link} data-loaded="true" bg-loaded="true"> </a>
                    </div>
                    <p>
                        <span>
                            <a className={"text-[#2d67ad]"}
                                href={author.link} title={author.name}>
                                {author.name}
                            </a>
                        </span>
                    </p>
                </div>
                <div style={{display:"flex", alignItems: "center"}}>
                    <span><img style={{marginRight: "7px"}}
                        className="no-zoom" width="20"
                               src="https://static.vnncdn.net/v1/icon/right-arrow-blue.svg"/></span>
                    <a style={linkAStyle} href={author.link}>Xem các bài viết của tác giả</a>
                </div>
            </div>
        </div>
    );
};

export default AuthorDetail;
