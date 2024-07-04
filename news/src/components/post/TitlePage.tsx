import React from 'react';
import TextLink from "../text/link";

type TitlePageProps = {
    title: string;
    size?: string;
    fontWeight?: 'bold' | 'medium' | 'light';
};

const TitlePage: React.FC<TitlePageProps> = ({ title, size, fontWeight = 'bold' }) => {
    return (
        <div className="title-page">
            <div className="container" style={{ fontWeight: getFontWeight(fontWeight) }}>
                <h2 className="title-page__title">
                    <div style={activeStyle(size)}>
                        <TextLink context={toUpperCaseOrLowerCase(title)} />
                    </div>
                </h2>
                {/*</ThemeProvider>*/}
            </div>
        </div>
    );
};
// Function to get the correct font weight
const getFontWeight = (weight: 'bold' | 'medium' | 'light') => {
    switch (weight) {
        case 'medium':
            return 400;
        case 'light':
            return 300;
        case 'bold':
        default:
            return 700;
    }
};

// Active status for the link
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
            fontSize: "`13px"
        }
    }
    return result;
};

export const toUpperCaseOrLowerCase = (title: string) => {
    if (title === title.toLowerCase()) {
        return title.toLowerCase();
    } else {
        return title.toUpperCase();
    }
};

export default TitlePage;