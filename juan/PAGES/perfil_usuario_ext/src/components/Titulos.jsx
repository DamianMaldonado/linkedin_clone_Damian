import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

export const Titulos = () => {
    const [texto, setTexto] = useState("Todavía no se han añadido títulos");

    const cambiarTexto = (nuevoTexto) => {
        setTexto(nuevoTexto);
    }

    return (
        <div>
            <p style={{ whiteSpace: 'pre-line' }}>{texto}</p>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Agrege sus títulos"
                        multiline
                        maxRows={1}
                        variant="standard"
                        onChange={e => cambiarTexto(e.target.value)}
                    />
                </div>
            </Box>
        </div>
    );
}