import React from 'react'
import { Link } from "react-router-dom"
import {
    Paper,
    Typography,
    Grid,
    Box,
} from '@mui/material';
import { styled } from '@mui/system';


const Box1 = styled(Box, {})({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //width: "40vw",
});

export default function OrderComplete() {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Paper sx={{
                width: "90vw",
                margin: "25vh",
                backgroundColor: "primary.light",
            }}>
                <Grid>
                    <Box1>
                        <Typography
                            variant="h1"
                            sx={{
                                padding: "2vw",
                                textAlign: "center",
                            }}>
                            Order Complete!
                        </Typography>
                    </Box1>
                    <Box1>
                        <Typography
                            variant="h3"
                            sx={{
                                paddingRight: "4vw",
                                paddingLeft: "4vw",
                                textAlign: "center",
                            }}>
                            Thank you for ordering from Premier Pathology
                        </Typography>
                    </Box1>
                    <Box1>
                        <Typography
                            variant="h5"
                            sx={{
                                padding: "1vw",
                                textAlign: "center",
                            }}>
                            <Link to="/">Go Back to the Homepage</Link>
                        </Typography>
                    </Box1>
                </Grid>
            </Paper>
        </Box>
    )
};