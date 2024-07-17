import React from "react";

const postAvt: React.FC<{ src: string; style?: React.CSSProperties }> = ({ src, style }) => {
    return (
        <div className="post-avt" style={style}>
            <img src={src} alt="Image" style={{ width: '100%', maxWidth:'130%'}} />
        </div>
    );
}
export default postAvt;