import { MouseEventHandler } from "react";

export type AppBarProps = {
	width: number;
	switchTheme?: any;
	handleDrawerToggle: MouseEventHandler<HTMLButtonElement>;
}