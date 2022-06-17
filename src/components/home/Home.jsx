import {
    Typography,
    Paper,
    Box,
    Grid,
} from '@mui/material';
import Image from "../../photos/GeneralPhotos/mainBackground.png"

export default function Home() {
    const styles = {
        paperContainer: {
            backgroundImage: `url(${Image})`
        }
    };
    return (
        <Paper
            style={styles.paperContainer}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
            }}>
            <Grid contaier spacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box sx={{
                        marginX:"5vw",
                        padding: "2rem",
                        height: "30rem",
                        width: "60rem",
                        boxShadow: 3,
                        opacity: 1,
                        color: "primary.realDark",
                        backgroundColor: "primary.light",
                    }}>
                        <Typography
                            variant="h3"
                            sx={{
                                textAlign: "center",
                                color: "primary.dark",
                                marginTop: "3rem",
                            }}>
                            Welcome To
                        </Typography>
                        <Typography
                            variant="h1"
                            sx={{
                                textAlign: "center",
                                marginTop: "2rem",
                            }}>
                            Premier Pathology Laboratories
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}