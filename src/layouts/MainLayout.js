"use client";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { AppBar, Avatar, Button, ListItemAvatar, Menu, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';
import { useEffect, useState } from 'react';
import logo from '../../public/assets/gia-logo.svg';
import smlogo from '../../public/assets/gia-sm-logo.svg';
import MobileDrawer from './MobileDrawer';

// import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';

import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

import Footer from './Footer';

const drawerWidth = 260;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(10)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(10)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);



export default function MainLayout({ children }) {
    const [open, setOpen] = useState(() => {
        if (typeof window !== "undefined") {
            return JSON.parse(localStorage.getItem("sidebar")) ?? true;
        }
        return true;
    });
    const pathname = usePathname();
    const [userType, setUserType] = useState('');
    const router = useRouter();
    const [userName, setUserName] = useState('');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUserType(localStorage.getItem('user_type'));
            setUserName(localStorage.getItem('user_name'));
        }
    }, []);


    const menuItems = [
        // Items for non-ADMIN users
        ...(userType !== 'ADMIN' ? [
            { href: '/dashboard', title: 'Dashboard', icon: <DashboardOutlinedIcon fontSize="small" /> },
            { href: '/file-upload', title: 'File Upload', icon: <FileUploadOutlinedIcon fontSize="small" /> },
            { href: '/file-approvals', title: 'File Approvals', icon: <PublishedWithChangesOutlinedIcon fontSize="small" /> },
            // { href: '/report-generation', title: 'Report Generation', icon: <ArticleOutlinedIcon fontSize="small" /> },
        ] : []),

        // Items for ADMIN users
        ...(userType === 'ADMIN' ? [
            { href: '/user-management', title: 'User Management', icon: <PermIdentityOutlinedIcon fontSize="small" /> },
            { href: '/client-management', title: 'Client Management', icon: <GroupsOutlinedIcon fontSize="small" /> },
        ] : []),
    ];

    const pageHeaders = [
        { href: '/dashboard', header: 'GIA Reporting Dashboard' },
        { href: '/dashboard/details', header: 'GIA Reporting Dashboard' },
        { href: '/file-upload', header: 'GIA File Upload' },
        { href: '/file-approvals', header: 'GIA File Approvals' },
        { href: '/file-approvals/file-verification/output-verification', header: 'GIA File Verification' },
        { href: '/file-approvals/file-verification/bifurcation', header: 'GIA File Verification' },
        { href: '/file-approvals/file-verification/approval', header: 'GIA File Verification' },
        // { href: '/report-generation', header: 'GIA Report Generation' },

        { href: '/user-management', header: 'GIA Admin Portal' },
        { href: '/client-management', header: 'GIA Admin Portal' },
    ];


    const isActive = (href) => {
        return pathname.startsWith(href);
    };


    // Profile Menu
    const [anchorElP, setAnchorElP] = React.useState(null);
    const openP = Boolean(anchorElP);
    const handleClickP = (event) => {
        setAnchorElP(event.currentTarget);
    };
    const handleCloseP = () => {
        setAnchorElP(null);
    };

    const handleLogout = () => {
        try {
            // Clear local storage
            localStorage.clear();
            // Redirect to the home page
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    const toggleSidebar = () => {
        const newState = !open;
        setOpen(newState);
        localStorage.setItem("sidebar", JSON.stringify(newState));
    }

    const initials = userName?.split(' ')
        .map(word => word.charAt(0))
        .join('');

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />


                <Drawer variant="permanent" id="desktop-only" open={open} className="drawer">
                    <Box className="sidebar-bg">

                        <Box className="w100 left">
                            {open ?
                                <Image src={logo} className="lglogo" alt="Logo" />
                                :
                                <Image src={smlogo} className="smlogo" alt="Logo" />
                            }
                        </Box>

                        <Box id="menus">
                            <List>
                                {menuItems.map((item) => (
                                    <Link href={item.href} passHref key={item.href}>
                                        <ListItem disablePadding>
                                            <ListItemButton disableRipple selected={isActive(item.href)}>
                                                <Tooltip title={item.title} arrow placement="right">
                                                    <ListItemIcon>
                                                        {item.icon}
                                                    </ListItemIcon>
                                                </Tooltip>
                                                <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                ))}
                                {/* logout */}
                                <ListItem disablePadding className="log-out-button">
                                    <ListItemButton onClick={handleLogout}>
                                        <Tooltip title={'Logout'} arrow placement="right">
                                            <ListItemIcon>
                                                <LogoutIcon className="white" />
                                            </ListItemIcon>
                                        </Tooltip>
                                        <ListItemText primary={"Logout"} sx={{ opacity: open ? 1 : 0 }} />
                                    </ListItemButton>
                                </ListItem>
                            </List>

                        </Box>
                    </Box>
                </Drawer>

                <Box component="main">


                    <AppBar position="sticky" open={!open} id="header">
                        <Toolbar className='fx_sb'>

                            <Stack id="desktop-only" direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                                <Box>
                                    {/* <Tooltip title="Collapse" arrow placement="bottom"> */}
                                    <IconButton onClick={toggleSidebar} size="small" sx={{ display: open ? '' : 'none' }}>
                                        <MenuOpenIcon fontSize="medium" className="primary" />
                                    </IconButton>
                                    {/* </Tooltip> */}
                                    {/* <Tooltip title="Expand" arrow placement="bottom"> */}
                                    <IconButton onClick={toggleSidebar} size="small" sx={{ display: open ? 'none' : '' }}>
                                        <MenuIcon fontSize="medium" className="primary" />
                                    </IconButton>
                                    {/* </Tooltip> */}
                                </Box>

                                <Box>
                                    <Typography variant='h4' className="page-header">
                                        {pageHeaders.find(page => pathname === page.href)?.header || 'Default Header'}
                                    </Typography>
                                </Box>
                            </Stack>

                            <Box id="mobile-only">
                                <Box className="w100 left">
                                    <Image src={logo} className="mobile-logo" alt="Logo" />
                                </Box>
                            </Box>


                            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>

                                {/* profile menu */}
                                <Box id="profile">
                                    <List>
                                        <ListItem disablePadding secondaryAction={<ArrowDropDownIcon />}>
                                            <ListItemButton disableRipple onClick={handleClickP}>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        {initials?.toUpperCase()}
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={<Typography variant='h6'><span>Welcome,</span> {userName}</Typography>} />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </Box>

                                <Box id="mobile-only" className="mr0">
                                    <MobileDrawer />
                                </Box>

                            </Stack>




                        </Toolbar>
                    </AppBar>

                    <Box className="child-content">
                        {children}
                    </Box>


                    <Footer />
                </Box>
            </Box>


            {/* profile menu */}
            <Menu
                anchorEl={anchorElP}
                id="profile-menu"
                open={openP}
                onClose={handleCloseP}
                onClick={handleCloseP}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.25))',
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 12,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Stack direction="column" alignItems="center" justifyContent="center" spacing={1}>
                    <Button variant="text" className="profile-options" startIcon={<PersonOutlineOutlinedIcon />} disableRipple onClick={handleCloseP}>Profile</Button>
                    <Button variant="text" className="profile-options" startIcon={<SettingsOutlinedIcon />} disableRipple onClick={handleCloseP}>Settings</Button>
                </Stack>
            </Menu>


        </>
    );
}
