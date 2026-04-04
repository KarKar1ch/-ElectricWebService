'use client';

import React, { useState } from 'react';
import {
    Box,
    TextField,
    MenuItem,
    Typography,
    Button,
    Stack,
} from '@mui/material';
import { useTheme } from '@mui/material';

// список авто (можешь потом вынести в API)
const cars = [
    {
        label: 'Tesla Model 3',
        battery: 60,
        range: 491,
    },
    {
        label: 'Tesla Model S',
        battery: 100,
        range: 652,
    },
    {
        label: 'Nissan Leaf',
        battery: 40,
        range: 270,
    },
    {
        label: 'BMW i3',
        battery: 42,
        range: 260,
    },
];

export default function AddCar() {
    const theme = useTheme();

    const [selectedCar, setSelectedCar] = useState('');
    const [battery, setBattery] = useState('');
    const [range, setRange] = useState('');

    const handleSelect = (value: string) => {
        setSelectedCar(value);

        const car = cars.find((c) => c.label === value);
        if (car) {
            setBattery(String(car.battery));
            setRange(String(car.range));
        }
    };

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '100%',
                p: 3,
                borderRadius: 4,

                background:
                    theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.04)'
                        : 'rgba(173,139,251,0.27)',

                backdropFilter: 'blur(12px)',

            }}
        >
            <Typography variant="h6" mb={2}>
                Электро бибика
            </Typography>

            <Stack spacing={2}>
                {/* Выбор авто */}
                <TextField
                    select
                    label="Модель"
                    value={selectedCar}
                    onChange={(e) => handleSelect(e.target.value)}
                    fullWidth
                >
                    {cars.map((car) => (
                        <MenuItem key={car.label} value={car.label}>
                            {car.label}
                        </MenuItem>
                    ))}
                </TextField>

                {/* Ёмкость батареи */}
                <TextField
                    label="Батарея (кВт⋅ч)"
                    value={battery}
                    onChange={(e) => setBattery(e.target.value)}
                    type="number"
                    fullWidth
                />

                {/* Запас хода */}
                <TextField
                    label="Запас хода (км)"
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                    type="number"
                    fullWidth
                />

                {/* Кнопка */}
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        borderRadius: '999px',
                        mt: 1,
                    }}
                >
                    Сохранить
                </Button>
            </Stack>
        </Box>
    );
}