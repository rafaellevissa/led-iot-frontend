import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from '@mui/icons-material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { AppBarProps } from "./types";


export default function Appbar(props: AppBarProps) {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${props.width}px)` },
        ml: { sm: `${props.width}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }} >
          ADMIN PANEL
        </Typography>
        <IconButton color="inherit">
          <AccountBoxIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}