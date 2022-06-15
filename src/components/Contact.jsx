import {
    Typography,
    Paper,
    Stack,
    Container,
    Box
} from '@mui/material';
import { styled } from '@mui/system';

const Box1 = styled(Box, {})({
    padding: "2rem",
    width: "40rem",
});
export default function Contact() {
    return (
        <>
            <Typography variant="h3"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    margin: "1rem",
                    color: "primary.realDark",
                }}>Contact Us</Typography>
            <Container>
                <Paper sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // margin: "2rem",
                    backgroundColor: "primary.light",
                    color: "primary.realDark",
                }}>
                    <Box1 sx={{
                        height: "50rem",
                        width: "75rem",
                    }}>
                        <img
                            style={{
                                height: "100%",
                                width: "100%",
                            }}
                            src="https://funzumo.com/wp-content/uploads/2018/08/Top-35-Funniest-Quotes-and-Funny-Photos-1.jpg"
                            alt="" />
                    </Box1>
                    <Stack>
                        <Box1>
                            <Typography variant="h4">Phone: 559-781-5174</Typography>
                        </Box1>
                        <Box1>
                            <Typography variant="h4">Email:</Typography>
                            <Typography variant="h7">remier is accredited by the College of American Pathologists (CAP) and licensed by CLIA
                                Pathologists peer review results on all cancers, difficult cases, and up to 10% of cases selected randomly to ensure accuracy
                            </Typography>
                        </Box1>
                        <Box1>
                            <Typography variant="h4">Fax:</Typography>
                            <Typography variant="h7">Pap smear turnaround target is within 24 hours online; 48 hours if abnormal
                                High grade SIL pap results faxed to clinicians
                            </Typography>
                        </Box1>
                        <Box1>
                            <Typography variant="h4">Address:</Typography>
                            <Typography variant="h6">Premier Pathology Laboratories, Inc.<br />
                                263 Pearson Drive, Suite #108<br />
                                Porterville, CA 93257-3333
                            </Typography>
                        </Box1>
                    </Stack>
                </Paper>
            </Container>
        </>
    )
}
