import {Category} from "../../interfaces/Category";
import React from "react";
import {Box, Button, Typography, useTheme} from "@mui/material";
import {NavLink} from "react-router-dom";
import {bindHover, bindPopover, bindTrigger} from "material-ui-popup-state";
import {MAIN_CONCEPT} from "../theme/theme";
import Popover from "@mui/material/Popover";
import {usePopupState} from "material-ui-popup-state/hooks";
import HoverPopover from "material-ui-popup-state/HoverPopover";


const NavItem: React.FC<{ category: Category }> = (props) => {
    const theme = useTheme();
    const popupState = usePopupState({variant: 'popover', popupId: props.category.name})
    return (
        <>
            <Button component={NavLink}
                    to={`${props.category.url}`} {...bindHover(popupState)}
                    sx={{
                        textDecoration: 'none', '&:hover': {color: MAIN_CONCEPT.main},
                        color: theme.palette.text.primary,
                        mx: 1,
                        paddingY: '10px',
                    }}
            >
                <Typography variant={'subtitle1'} fontWeight={600}>
                    {props.category.name}
                </Typography>
            </Button>
            {props.category.subType && props.category.subType.length > 0 && (
                <>
                    <HoverPopover  {...bindPopover(popupState)} anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                                   transformOrigin={{
                                       vertical: 'top',
                                       horizontal: 'center',
                                   }}>
                        <Box className={"flex flex-col"}>

                            {props.category.subType.map((subCategory, index) => (
                                <Box component={NavLink} to={`${subCategory.url}`}
                                    sx={{display:'flex',justifyContent:'center',
                                        alignItems:'center',
                                        padding: '6px 8px',
                                        fontWeight: 500,
                                        fontSize: '0.875rem',
                                        lineHeight: 1.75,
                                        color:theme.palette.text.primary,
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                            borderRadius: '4px',
                                            color: MAIN_CONCEPT.main
                                        }

                                    }} key={index}>
                                    <Typography variant={'subtitle1'} color={'inherit'}>
                                    {subCategory.name}
                                    </Typography>
                                </Box>
                            ))}

                        </Box>
                    </HoverPopover>
                </>
            )}
        </>
    )
}
export default NavItem;