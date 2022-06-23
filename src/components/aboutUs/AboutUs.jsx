import {
    Typography,
    Paper,
    Container,
    Box,
    Grid,
    List,
    ListItem,
    Divider,
} from '@mui/material';
import Photo from "../../photos/GeneralPhotos/aboutUs.svg"
import Photo2 from "../../photos/GeneralPhotos/aboutUs2.svg"



export default function AboutUs() {
    return (
        <Paper sx={{
            backgroundColor: "primary.main",
            width: "100%",
            height: "100%",
        }}>
            <Container>

                <Grid container spacing={3}
                    sx={{ marginTop: "15vh" }}>
                    <Grid xs={12} sm={12} md={6} lg={6} item>
                        <Box>
                            <Typography variant="h3"
                                sx={{
                                    display: "flex",
                                    color: "primary.realDark",
                                    marginBottom: "1rem",
                                }}>
                                About Premier
                            </Typography>
                            <Typography paragraph>
                                Founded in 1998 by Dr. Debra Ann Hanks and her husband Dave, Premier Pathology Laboratories, Inc. has served the San Joaquin Valley for nearly 20 years.
                                Located in Porterville, California, the lab provides Anatomic Pathology and Cytopathology
                                support for Sierra View Medical Center and many clinics and physicians throughout the San Joaquin Valley. Employing advanced technologies to serve our clients, the friendly staff and skilled pathologists
                                are ready, willing, and able to serve your needs.
                            </Typography>
                            <Box sx={{my:"3rem"}}>
                            <Typography variant="h4" sx={{
                                display: 'flex',
                                // justifyContent: 'center',
                            }}>
                                Our Mission:
                            </Typography>
                            <Typography variant="h6" sx={{
                                display: 'flex',
                                // justifyContent: 'center',

                            }}>

                                To provide quality, comprehensive, and responsive outpatient pathology service.
                            </Typography>
                        </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6} item>
                        <Box>
                            <img
                                style={{
                                    height: "100%",
                                    width: "100%",
                                }}
                                src={Photo}
                                alt="" />
                        </Box>
                    </Grid>

                    <Divider flexItem/>

                    
                    <Divider/>
                    <Grid xs={12} sm={12} md={6} lg={6} item>
                        <Box>
                            <img
                                style={{
                                    height: "100%",
                                    width: "100%",
                                }}
                                src={Photo2}
                                alt="" />
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6} item>
                        <Box sx={{
                            ml: "1rem",
                            mb: "5rem"
                        }}>
                            <Typography variant="h3"
                                sx={{
                                    display: "flex",
                                    color: "primary.realDark",
                                }}>
                                Services:
                            </Typography>
                            <List>
                                <ListItem sx={{ display: 'list-item' }}> Surgical biopsy specimen diagnosis for all body sites including skin, GI, GYN, GU, and nails</ListItem>
                                <ListItem sx={{ display: 'list-item' }}>Liquid and conventional pap smear processing and diagnoses</ListItem>
                                <ListItem sx={{ display: 'list-item' }}>Fine needle and guided fine needle aspiration of masses</ListItem>
                                <ListItem sx={{ display: 'list-item' }}>Fluid cytology processing and interpretation</ListItem>
                                <ListItem sx={{ display: 'list-item' }}>Immunohistochemical and special stains</ListItem>
                                <ListItem sx={{ display: 'list-item' }}>Breast prognostic panels (ER, PR, HER2/neu)</ListItem>
                                <ListItem sx={{ display: 'list-item' }}>Digital images of gross specimens and microscopic findings are included when appropriate</ListItem>
                                <ListItem sx={{ display: 'list-item' }}>Phone consultation for clinical laboratory testing</ListItem>
                            </List>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Paper>
    )
}