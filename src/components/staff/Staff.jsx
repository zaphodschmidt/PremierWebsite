import {
    Typography,
    Grid,
    Container
} from '@mui/material';
// import React, { useState, useEffect } from 'react';
import StaffCard from "./StaffCard.jsx"
import {data} from "../../Data/StaffInfo"
export default function Staff(){
    return (
        <Container maxWidth="xl">
            <Typography variant="h2"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem",
                    color: "primary.realDark"
                }}>
                Premier Pathology Staff
            </Typography>
            <Grid container>
                {data.map(staff =>(
                    <Grid item key={staff.id} xs={12} sm={6} md={4} xl={3} sx={{ padding: "1rem" }}>
                    <StaffCard staff={staff}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
