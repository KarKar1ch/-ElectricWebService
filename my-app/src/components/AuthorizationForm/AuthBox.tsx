'use client';
import React, { useState } from 'react';
import { Box, Tabs, Tab, Paper } from '@mui/material';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthContainer = () => {
    const [isRegister, setIsRegister] = useState(false);

    const switchForm = (shouldRegister: boolean) => {
        setIsRegister(shouldRegister);
    };

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setIsRegister(newValue === 1);
    };

    return (
        <Box
            sx={{

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
            }}
        >
            <Box sx={{ width: 420, maxWidth: '100%' }}>
                <Paper
                    elevation={0}
                    sx={{
                        mb: 2,
                        borderRadius: '16px',
                        background: 'rgba(173,139,251,0.15)',
                    }}
                >
                    <Tabs
                        value={isRegister ? 1 : 0}
                        onChange={handleChange}
                        variant="fullWidth"
                        indicatorColor="secondary"
                        sx={{
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#AD8BFB',
                                height: 3,
                                borderRadius: 2,
                            },
                        }}
                    >
                        <Tab label="Вход" />
                        <Tab label="Регистрация" />
                    </Tabs>
                </Paper>

                {isRegister ? (
                    <RegisterForm
                        switchForm={switchForm}
                        handleClose={() => {}}
                    />
                ) : (
                    <LoginForm
                        switchForm={switchForm}
                        handleClose={() => {}}
                    />
                )}
            </Box>
        </Box>
    );
};

export default AuthContainer;