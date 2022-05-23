import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
import { ManageSearch, Lightbulb } from '@mui/icons-material';
import ListItemLink from '../../ListItemLink';
import LogOut from '../Logout';

import { DrawerProps } from './types';
import { useTranslation } from '../../../hooks/use-translation';

const DrawerContent = () => {
	const { translate } = useTranslation()

	return (
		<>
			<Toolbar sx={{ alignItems: 'center' }}>
				<Typography align='center' variant="subtitle1" sx={{ mt: 1, ml: 5 }} >
					{translate('ASIDEMENU:TITLE')}
				</Typography>
			</Toolbar>
			<Divider />
			<List>
				<ListItemLink to="/" primary={translate('ASIDEMENU:DEVICES')} icon={<Lightbulb />} isCollapsed />
			</List>
			<Divider />
			<List>
				<ListItemLink to="/device" primary={translate('ASIDEMENU:DEVICE_MANAGEMENT')} icon={<ManageSearch />} isCollapsed />
			</List>
			<Divider />
			<Toolbar sx={{ flexGrow: 1 }} />
			<Divider />
			<LogOut />
		</>
	)
}

export default function SideBar(props: DrawerProps) {

	return (
		<Box
			component="nav"
			sx={{ width: { sm: props.width }, flexShrink: { sm: 0 } }}
			aria-label="mailbox folders"
		>
			<Drawer
				variant="permanent"
				sx={{
					display: { xs: 'none', sm: 'block' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.width },
				}}
				open
			>

				<DrawerContent />
			</Drawer>

			<Drawer
				variant="temporary"
				open={props.mobileOpen}
				onClose={props.handleDrawerToggle}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					display: { xs: 'block', sm: 'none' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.width },
				}}
			>
				<DrawerContent />
			</Drawer>
		</Box>
	);
}