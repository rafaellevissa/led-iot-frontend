import { IconButton, Toolbar, Typography } from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { CustomAppBar } from "./styles";
import { AppBarProps } from "./types";
import DarkThemeToggle from "../../ToggleTheme";

export default function Appbar(props: AppBarProps)
{
    return (
        <CustomAppBar width={props.width}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }} >  
                    ADMIN PANEL
                </Typography>

                {/* <DarkThemeToggle /> */}

                <IconButton color="inherit">
                    <AccountBoxIcon />
                </IconButton>
            </Toolbar>
        </CustomAppBar>
    );
}