'use client'

import { Box, AppBar, Toolbar } from "@mui/material";
import { ThemeToggle } from "@/components/Buttons/ThemeToggle";

export default function NavBar() {
    return (
        <AppBar
            sx={{
                width: '100%',
                mx: 'auto',
                mt: 2,
                background: 'rgba(255,255,255,0.04)',
                height: 60,
                justifyContent: 'center',
                borderBottom: 'none',
                paddingX: 2,
                boxShadow: 'none',
                borderRadius: 12,
                position: 'relative',
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: { xs: 1, sm: 2 },
                    minHeight: 60,
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <ThemeToggle />
                </Box>
            </Toolbar>
        </AppBar>
    );
}