// TopBar.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
const TopBar = () => {
 return (
<AppBar position="static" color="primary">
<Toolbar style={{ justifyContent: 'center' }}>
<Typography variant="body1" color="inherit">
         Mobile: +91 9173366226 | Email: smartmanagement13@gmail.com
</Typography>
</Toolbar>
</AppBar>
 );
};
export default TopBar;