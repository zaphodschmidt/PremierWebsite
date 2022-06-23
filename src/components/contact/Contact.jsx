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
import Photo from "../../photos/GeneralPhotos/contact.svg"


export default function Contact() {
    return (
        <Paper
            sx={{
                backgroundColor: "primary.contact",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
            }}>
            <Container sx={{ backgroundColor: 'primary.contact', height: "100vh", }}>

                <Typography variant="h3"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "1rem",
                        color: "primary.realDark",
                    }}>
                    Contact Us
                </Typography>
                <Grid container spacing={2}
                    sx={{
                        mt: "1rem"
                    }}>
                    <Grid item xs={1} sm={1} md={4} lg={5}
                        sx={{
                            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                            alignItems: 'center',
                        }}>
                        <Box>
                            <img
                                style={{
                                    height: "100%",
                                    width: "100%",
                                }}
                                src={Photo}
                                alt="AboutUs" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={7}>
                        <Box
                            sx={{
                                backgroundColor: "primary.main",
                                boxShadow: 3,
                            }}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <Paper sx={{
                                        display: 'flex',
                                        justifyContent: "center",
                                        backgroundColor: "primary.main",
                                        color: "primary.realDark",
                                        boxShadow: "none",
                                        padding: ".5rem",

                                    }}>
                                        <Typography sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                        }} variant="h5"
                                            align="center">
                                            <CallIcon fontSize="large" />
                                            559 781-5174
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <Paper sx={{
                                        display: 'flex',
                                        justifyContent: "center",
                                        backgroundColor: "primary.main",
                                        boxShadow: "none",
                                        color: "primary.realDark",
                                        padding: ".5rem"
                                    }}>
                                        <Typography sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                        }} variant="h5"
                                            align="center">
                                            <EmailIcon fontSize="large" />
                                            Cool@coolmail.com
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <Paper sx={{
                                        backgroundColor: "primary.main",
                                        boxShadow: "none",
                                        color: "primary.realDark",
                                        padding: ".5rem"
                                    }}>
                                        <Typography variant="h5" align="center">
                                            <LocationOnIcon fontSize="large" />
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
        </Paper>
    );
}
