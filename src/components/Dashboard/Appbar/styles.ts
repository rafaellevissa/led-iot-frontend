import AppBar from '@mui/material/AppBar';
import { styled } from "@mui/system";

export const CustomAppBar = styled(AppBar)<{ width: any }>(({ width }) => ({
  width: `calc(100% - ${width}px)`,
  marginLeft: `${width}px`
}));