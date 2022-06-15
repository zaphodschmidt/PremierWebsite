import { Typography, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';
//import Image from "../components/photos/mainBackground.png"

export default function Home() {
    const styles = {
        paperContainer: {
            backgroundImage: `url(${Image})`
        }
    };

    const Box1 = styled(Box, {})({
        padding: "2rem",
        height: "30rem",
        boxShadow: 3,
    });
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
            <Box1 sx={{
                width: "60rem",
                boxShadow: 3,
                opacity: 1,
                color:"primary.realDark",
                backgroundColor: "primary.light",
            }}>
                <Typography
                    variant="h3"
                    sx={{ 
                    textAlign: "center",
                    color:"primary.dark",
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
            </Box1>
        </Paper>
    )
}