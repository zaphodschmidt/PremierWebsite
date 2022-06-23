import React from 'react'
import {
    Typography,
    Grid,
    Button,
    Container,
    Paper,
} from '@mui/material';

export default function OrderComplete() {
    return (
        <Container>
            <Grid container spacing={2}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: "18vh",
                }}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Paper sx={{
                        backgroundColor: "primary.main",
                        color: "primary.realDark",
                        padding: ".5rem",
                        boxShadow: "none",
                        marginY: "1rem",
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Typography align='center'
                            sx={{
                                display: 'flex',
                                fontWeight: 700,
                            }} variant="h2">
                            Message Sent
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Paper sx={{
                        backgroundColor: "primary.main",
                        color: "primary.realDark",
                        padding: ".5rem",
                        boxShadow: "none",
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Typography variant="h3" align='center'
                            sx={{ fontWeight: 400, }}>
                            Thank you for contacting us!
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={4}
                    sx={{ marginY: "2rem" }}>
                    <Button href="/" fullWidth>
                        Go Back to the Homepage
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
};