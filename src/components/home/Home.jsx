import {
    Typography,
    Paper,
    Box,
    Grid,
    Button,
    Container,
} from '@mui/material';
import Photo from "../../photos/GeneralPhotos/home.svg"

export default function Home() {

    return (
        <Container>
            <Grid container spacing={3}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:"18vh",
                }}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Paper sx={{
                                    backgroundColor: "primary.main",
                                    color: "primary.realDark",
                                    padding: ".5rem",
                                    boxShadow: "none",
                                    marginY:"1rem",
                                }}>
                                    <Typography style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        fontWeight: 500,
                                    }} variant="h2">
                                        Welcome to Premier Pathology
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Paper sx={{
                                    backgroundColor: "primary.main",
                                    color: "primary.light",
                                    padding: ".5rem",
                                    boxShadow: "none",
                                    marginTop:"1rem",
                                }}>
                                    <Typography variant="h6">
                                        Working to provide quality, comprehensive, and responsive outpatient pathology service.
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} sm={6} md={4} lg={4}
                            sx={{marginY:"1rem"}}>
                                <Button  href="/clients" fullWidth>
                                    Place an Order
                                </Button>
                            </Grid>
                            <Grid item xs={6} sm={6} md={4} lg={4}
                            sx={{marginY:"1rem"}}>
                                <Button href="/contact" fullWidth>
                                    Contact Us
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item md={6} lg={6}
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
                            alt="HomePagePhoto" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}