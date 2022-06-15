import {
    Typography,
    Grid,
    Container
}from '@mui/material';
import React, { useState,useEffect } from 'react';
import StaffCard from "./StaffCard.jsx"

export default function Staff() {
    const [staffInfo, setStaffInfo] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8000/staffInfo")
        .then(res=> res.json())
        .then(data=>setStaffInfo(data))
    },[])
    return (
        <Container maxWidth="xl">
            <Typography variant="h2"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem"
                }}>
                Premier Pathology Staff 
            </Typography>
            <Grid container>
                {staffInfo.map(note => (
                    <Grid item key={note.id} xs={12} sm={6} md={4} xl={3}
                    sx={{
                        padding: "1rem"
                    }}>
                        <StaffCard note={note}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
