"use client";
// import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import { Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname 
import { useEffect, useState } from 'react';


export default function MobileDrawerContent({ onClose }) {
    const [userType,setUserType]=useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUserType(localStorage.getItem('user_type'));
        }
    }, []);
    const pathname = usePathname(); // Use usePathname hook
 
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
 


    const isActive = (href) => {
        return pathname.startsWith(href);
    };





    return (
        <>
            <Box>
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

                        <Link href="/" passHref>
                            <ListItem disablePadding className="log-out-button">
                                <ListItemButton>
                                    <Tooltip title={'Logout'} arrow placement="right">
                                        <ListItemIcon>
                                            <LogoutIcon className="white" />
                                        </ListItemIcon>
                                    </Tooltip>
                                    <ListItemText primary={"Logout"} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>
                </Box>
            </Box>
        </>
    );
}
