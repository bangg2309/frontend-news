import React from "react";

const DescriptionPost: React.FC<{ description: string }> = (props) => {
    return (
        <div className="description-post">
            <div className="container" style={style}>
                <p className="description-post__text m-0 p-0 border-0" >
                    {props.description}
                </p>
            </div>
        </div>
    )
}
const style = {
    color: '#6c6c6c',
    fontSize: 16,
    // lineHeight: 22
}
export default DescriptionPost;