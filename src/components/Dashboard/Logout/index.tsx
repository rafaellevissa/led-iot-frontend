import { List, ListItem, ListItemText } from "@mui/material";
import { Logout as LogoutIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/modules/auth/actions";
import { useTranslation } from "../../../hooks/use-translation";

const LogOut = () => {
  const dispatch = useDispatch();
	const { translate } = useTranslation()

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  }
  return (
    <List>
      <ListItem button component='li' onClick={handleLogout} >
        <LogoutIcon />
        <ListItemText primary={translate('ASIDEMENU:LOGOUT')} sx={{ ml: 3 }}/>
        </ListItem>
      </List>
  );
}

export default LogOut;