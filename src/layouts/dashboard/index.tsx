import * as React from 'react';

import { Box, Container, Toolbar } from '@mui/material';
import { Appbar, Sidebar } from '../../components/Dashboard';


interface DashboardLayoutProps { }
const Layout: React.FunctionComponent<DashboardLayoutProps> = props => {
  const { children } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box sx={{ display: 'flex' }}>
      <Appbar width={240} handleDrawerToggle={handleDrawerToggle} />
      <Sidebar width={240} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <Container fixed sx={{ m: 5 }}>
        <Toolbar />
        {children}
      </Container>
    </Box>
  );
}

export default Layout;