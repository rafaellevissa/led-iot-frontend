import { styled } from "@mui/system";
import { DivProps } from './types';

export const CustomDiv = styled('div')<DivProps>(({ height, width }) => (
{
    'height': height,
    'width': width
}));