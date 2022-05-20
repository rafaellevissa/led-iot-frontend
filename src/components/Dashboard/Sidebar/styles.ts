import Drawer from '@mui/material/Drawer';

import { styled } from "@mui/system";
import { DrawerProps } from './types';

export const CustomDrawer = styled(Drawer)<DrawerProps>(({ width }) => (
{
	width: width,
	flexShrink: 0,
	
	'& .MuiDrawer-paper': 
	{
		width: width,
		boxSizing: 'border-box',
	},	
}));