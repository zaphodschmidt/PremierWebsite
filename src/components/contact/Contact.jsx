import * as React from 'react';
import {
    Grid,
    Container,
    Typography,
    Box,
    Paper,
} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactForm from "./ContactUsForm"

export default function Contact() {
    return (
        <Container>
            <Typography variant="h3"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "1rem",
                    color: "primary.realDark",
                }}>
                Contact Us
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={1} sm={1} md={4} lg={4}
                    sx={{
                        display:{xs: "none",sm:"none",md:"flex", lg: "flex"},
                        alignItems: 'center',
                    }}>
                    <Box>
                        <img
                            style={{
                                height: "100%",
                                width: "100%",
                            }}
                            src="https://funzumo.com/wp-content/uploads/2018/08/Top-35-Funniest-Quotes-and-Funny-Photos-1.jpg"
                            alt="" />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <Box>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <Paper sx={{ 
                                    backgroundColor: "white",
                                    color: "primary.realDark",
                                    padding:".5rem" 
                                    }}>
                                    <Typography style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }} variant="h5"
                                    align="center">
                                        <CallIcon fontSize="large"/>
                                        559 781-5174
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <Paper sx={{ 
                                    backgroundColor: "white",
                                    color: "primary.realDark",
                                    padding:".5rem"}}>
                                <Typography style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }} variant="h5"
                                    align="center">
                                        <EmailIcon fontSize="large"/>
                                        Cool@coolmail.com
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Paper sx={{ 
                                    backgroundColor: "white",
                                    color: "primary.realDark",
                                    padding:".5rem"
                                    }}>
                                    <Typography variant="h5"align="center">
                                        <LocationOnIcon fontSize="large"/>
                                        Premier Pathology Laboratories, Inc.
                                        263 Pearson Drive, Suite #108
                                        Porterville, CA 93257-3333
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <ContactForm />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
