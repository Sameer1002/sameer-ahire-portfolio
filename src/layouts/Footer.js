import React from 'react'
import { Container, Typography, Box, Stack } from '@mui/material';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <Box className="footer">
                <Container maxWidth>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Typography variant='h6' className='copyright'>
                            Copyright © {currentYear} Global Investment Administration. All Rights Reserved.
                        </Typography>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}

export default Footer