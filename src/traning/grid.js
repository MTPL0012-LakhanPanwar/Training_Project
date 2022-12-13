import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Template() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item lg={3} xs={12} md={6}>
                    <Item>
                        <h1 style={{ color: "Black", backgroundColor: "thistle" }}>Block 1</h1>

                        <p style={{ backgroundColor: "brown", color: "bisque" }}>HTML Tutorial
                            CSS Tutorial
                            JavaScript Tutorial
                            How To Tutorial
                            SQL Tutorial
                            Python Tutorial
                            W3.CSS Tutorial
                            Bootstrap Tutorial
                            PHP Tutorial
                            Java Tutorial
                            C++ Tutorial
                            jQuery Tutorial HTML Examples
                            CSS Examples
                            JavaScript Examples
                            How To Examples
                            SQL Examples
                            Python Examples
                            W3.CSS Examples
                            Bootstrap Examples
                            PHP Examples
                            Java Examples
                            XML Examples
                            jQuery Examples</p>
                    </Item>
                </Grid>
                <Grid item lg={3} xs={12} md={6}>
                    <Item>
                        <h1 style={{ color: "Black", backgroundColor: "thistle" }}>Block 2</h1>

                        <p style={{ backgroundColor: "brown", color: "bisque" }}>HTML Tutorial
                            CSS Tutorial
                            JavaScript Tutorial
                            How To Tutorial
                            SQL Tutorial
                            Python Tutorial
                            W3.CSS Tutorial
                            Bootstrap Tutorial
                            PHP Tutorial
                            Java Tutorial
                            C++ Tutorial
                            jQuery Tutorial HTML Examples
                            CSS Examples
                            JavaScript Examples
                            How To Examples
                            SQL Examples
                            Python Examples
                            W3.CSS Examples
                            Bootstrap Examples
                            PHP Examples
                            Java Examples
                            XML Examples
                            jQuery Examples</p>
                    </Item>
                </Grid>
                <Grid item lg={3} xs={12} md={6}>
                    <Item>
                        <h1 style={{ color: "Black", backgroundColor: "thistle" }}>Block 1</h1>

                        <p style={{ backgroundColor: "brown", color: "bisque" }}>HTML Tutorial
                            CSS Tutorial
                            JavaScript Tutorial
                            How To Tutorial
                            SQL Tutorial
                            Python Tutorial
                            W3.CSS Tutorial
                            Bootstrap Tutorial
                            PHP Tutorial
                            Java Tutorial
                            C++ Tutorial
                            jQuery Tutorial HTML Examples
                            CSS Examples
                            JavaScript Examples
                            How To Examples
                            SQL Examples
                            Python Examples
                            W3.CSS Examples
                            Bootstrap Examples
                            PHP Examples
                            Java Examples
                            XML Examples
                            jQuery Examples</p>
                    </Item>
                </Grid>
                <Grid item lg={3} xs={12} md={6}>
                    <Item>
                        <h1 style={{ color: "Black", backgroundColor: "thistle" }}>Block 1</h1>

                        <p style={{ backgroundColor: "brown", color: "bisque" }}>HTML Tutorial
                            CSS Tutorial
                            JavaScript Tutorial
                            How To Tutorial
                            SQL Tutorial
                            Python Tutorial
                            W3.CSS Tutorial
                            Bootstrap Tutorial
                            PHP Tutorial
                            Java Tutorial
                            C++ Tutorial
                            jQuery Tutorial HTML Examples
                            CSS Examples
                            JavaScript Examples
                            How To Examples
                            SQL Examples
                            Python Examples
                            W3.CSS Examples
                            Bootstrap Examples
                            PHP Examples
                            Java Examples
                            XML Examples
                            jQuery Examples</p>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
