import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import { ListLinkProps } from './types';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

function ListItemLink(props: ListLinkProps) 
{
	const { icon, primary, to, isCollapsed } = props;
  
	const renderLink = React.useMemo(
	  () =>
		React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>(function Link(
			itemProps,
			ref,
		)
		{
			return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
		}),
	  	[to],
	);
  
	return (
	  <li>
		<ListItem button component={renderLink} sx={{ pl: (isCollapsed ? 4 : 'none' )}} >
			{icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
			<ListItemText primary={primary} />
		</ListItem>
	  </li>
	);
  }

export default ListItemLink;