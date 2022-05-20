import AppBar from '@mui/material/AppBar';
import { styled } from "@mui/system";
import { AppBarProps } from './types';

export const CustomAppBar = styled(AppBar)<AppBarProps>(({ width }) => (
{
    width: `calc(100% - ${width}px)`,
    marginLeft: `${width}px`
}));