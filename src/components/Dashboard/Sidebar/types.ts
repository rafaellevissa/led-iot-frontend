import { MouseEventHandler } from "react";

export type DrawerProps = {
	width: number;
	handleDrawerToggle: MouseEventHandler<HTMLButtonElement>;
	mobileOpen: boolean;
}