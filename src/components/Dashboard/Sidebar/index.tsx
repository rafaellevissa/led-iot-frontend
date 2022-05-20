import { Divider, List, Toolbar, Typography } from '@mui/material';
import { Group, Lightbulb } from '@mui/icons-material';
import ListItemLink from '../../ListItemLink';
import LogOut from '../Logout';

import { DrawerProps } from './types';
import { CustomDrawer } from './styles';
import { useTranslation } from '../../../hooks/use-translation';

export default function SideBar(props: DrawerProps) {
	const { translate } = useTranslation()

	return (
		<CustomDrawer width={props.width} variant="permanent" anchor="left">
			<Toolbar sx={{ alignItems: 'center' }}>
				<Typography align='center' variant="subtitle1" sx={{ mt: 1, ml: 5 }} >
					{translate('ASIDEMENU:TITLE')}
				</Typography>
			</Toolbar>
			<Divider />
			<List>
				<ListItemLink to="/" primary={translate('ASIDEMENU:DEVICES')} icon={ <Lightbulb /> } isCollapsed />
			</List>
			<Divider />
			<List>
				<ListItemLink to="/" primary={translate('ASIDEMENU:DEVICE')} icon={ <Group /> } isCollapsed />
			</List>
			<Divider />
			<Toolbar sx={{ flexGrow: 1 }} />
			<Divider />
			<LogOut />
        </CustomDrawer>
    );
}