import { Button } from "@mui/material";
import { styled } from "@mui/system";

interface ButtonProps {};

const SubmitButton = styled(Button)<ButtonProps>(() => ({
    marginTop: 20,
    mb: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '3px',
    background: '#90CAF9',
    position: 'static',
    boxShadow: '0px 3px 1px -2px',
    borderRadius: '4px'
}));
    
export default SubmitButton;