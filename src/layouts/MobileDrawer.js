"use client"
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Box, Drawer, IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';
import MobileDrawerContent from './MobileDrawerContent';

export default function MobileDrawer() {
    const [state, setState] = useState({ right: false });

    const toggleDrawer = (anchor, open) => () => {
        setState({ ...state, [anchor]: open });
    };

    const isDrawerOpen = state['right'];

    const handleCloseDrawer = () => {
        setState({ ...state, right: false });
    };

    return (
        <>
            {/* <IconButton
                className='drawer_btn'
                size='medium'
                onClick={toggleDrawer('right', !isDrawerOpen)}
            >
                {isDrawerOpen ? <CloseIcon fontSize='small' className='wh' /> : <MenuIcon fontSize='small' className='wh' />}
            </IconButton> */}


            <Box>
                <Tooltip title={isDrawerOpen ? "Collapse" : "Expand"} arrow placement="bottom">
                    <IconButton onClick={toggleDrawer('right', !isDrawerOpen)} size="medium" className='mobile-menu-icon'>
                        {isDrawerOpen ? <MenuOpenIcon fontSize='medium' /> : <MenuIcon fontSize='medium' />}
                    </IconButton>
                </Tooltip>
            </Box>




            <Drawer id='mobile-drawer' anchor="right" open={isDrawerOpen} onClose={toggleDrawer('right', false)}>
                <Box className="sidebar-bg">


                    <Box className="fx_fe">
                        <Tooltip title={isDrawerOpen ? "Collapse" : "Expand"} arrow placement="bottom">
                            <IconButton onClick={toggleDrawer('right', !isDrawerOpen)} size="medium" className='mobile-menu-icon'>
                                {isDrawerOpen ? <MenuOpenIcon fontSize='medium' /> : <MenuIcon fontSize='medium' />}
                            </IconButton>
                        </Tooltip>
                    </Box>

                    <MobileDrawerContent onClose={handleCloseDrawer} />

                </Box>
            </Drawer>
        </>
    );
}
