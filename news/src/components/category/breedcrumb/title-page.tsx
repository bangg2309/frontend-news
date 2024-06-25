import React, {useContext} from 'react';
import TextLink from "../../text/link";
// import theme from "../../theme/theme";
const TitlePage: React.FC<{ title: string, size: string }> = (props) => {
    return (
        <div className="title-page">
            <div className="container font-bold">
                {/*<ThemeProvider theme={theme}>*/}
                <h2 className="title-page__title ">
                    <div style={activeStyle(props.size)}>
                        <TextLink context={props.title}/>
                    </div>
                </h2>
                {/*</ThemeProvider>*/}
            </div>
        </div>
    )
}
//active status for the link
const activeStyle = (size: string) => {
    let result = {
        color: "#2d67ad",
        //set font size with size props}
        fontSize: "1.2rem"
    }
    if (size === "lg") {
        result = {
            ...result,
            fontSize: "2rem"
        }
    } else if (size === "md") {
        result = {
            ...result,
            fontSize: "1.5rem"
        }
    }
    return result;
}
export default TitlePage;