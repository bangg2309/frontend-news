import React, {useContext} from 'react';
import TextLink from "../text/link";
// import theme from "../../theme/theme";
const TitlePage: React.FC<{ title: string, size?: string }> = (props) => {
    return (
        <div className="title-page">
            <div className="container font-bold">
                {/*<ThemeProvider theme={theme}>*/}
                <h2 className="title-page__title">
                    <div style={activeStyle(props.size)} >
                        <TextLink context={props.title.toUpperCase()}/>
                    </div>
                </h2>
                {/*</ThemeProvider>*/}
            </div>
        </div>
    )
}
//active status for the link
export const activeStyle = (size?: string) => {
    let result = {
        //set font size with size props}
        fontSize: "16px",
        lineHeight: "20px"
    }
    if (size === "lg") {
        result = {
            ...result,
            fontSize: "20px"
        }
    } else if (size === "md") {
        result = {
            ...result,
            fontSize: "`8px"
        }
    }
    return result;
}
export default TitlePage;