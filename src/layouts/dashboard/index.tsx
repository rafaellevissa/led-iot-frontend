import * as React from 'react';

import { Box, Container, Toolbar } from '@mui/material';
import { Appbar, Sidebar } from '../../components/Dashboard';

interface DashboardLayoutProps {}
const Layout: React.FunctionComponent<DashboardLayoutProps> = props =>
{
    const { children } = props;
    
    return (
        <Box sx={{ display: 'flex' }}>
            <Appbar width={240} />
            <Sidebar width={240} />
            <Container fixed sx={{ m: 5 }}>
                <Toolbar />
                { children }
            </Container>
        </Box>
    );
}

export default Layout;