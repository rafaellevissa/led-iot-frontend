import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { useSelector, RootStateOrAny } from 'react-redux';

interface ThemeProps {};
const Theme: React.FunctionComponent<ThemeProps> = props =>
{
    const { children } = props;
    const isEnabled = useSelector((state: RootStateOrAny) => state.preferences.darkThemeEnabled);
    const darkTheme = createTheme(
    {
        palette: 
        {
            mode: isEnabled ? 'dark' : 'light',
        }
    });

    return (
        <ThemeProvider theme={darkTheme} >
            { children }
        </ThemeProvider>
    );
}

export default Theme;