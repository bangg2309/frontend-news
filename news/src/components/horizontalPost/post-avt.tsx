import React from "react";

const postAvt: React.FC<{ src: string}> = ({ src, }) => {
    return (
        <div className="post-avt">
            <img src={src} alt="Image" style={{ width: '100%'}} />
        </div>
    );
}
export default postAvt;