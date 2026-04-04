'use client';

import React from 'react';
import { Button } from '@mui/material';
import { SxProps, Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system';

interface ButtonAdminProps {
    children: React.ReactNode;
    onClick?: () => void;
    sx?: SxProps<Theme>;
    variant?: 'contained';
}

export default function ButtonStation({
                                        children,
                                        onClick,
                                        sx,
                                        variant = 'contained',
                                    }: ButtonAdminProps) {
    return (
        <Button
            onClick={onClick}
            variant = 'contained'
            sx={{
                width:220,
                color:'#fff'
            }}
        >
            {children}
        </Button>
    );
}