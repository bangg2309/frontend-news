import React from "react";
import {hover} from "@testing-library/user-event/dist/hover";
import {Button, useTheme} from "@mui/material";
import styled from "styled-components";

const Link = styled.p`
    margin: 0;
    &:hover {
        color: #2d67ad;
    }
`
const TextLink: React.FC<{ context: String }> = (props) => {
    console.log(props)
    return (
        <Link>
            {props.context}
        </Link>
    );
}
export default TextLink;