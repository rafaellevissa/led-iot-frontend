import * as React from 'react';

export type ListLinkProps =
{
	to: string;
	primary: string;
	icon?: React.ReactElement;
	isCollapsed?: boolean;
}