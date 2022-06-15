import {
    Typography,
    Paper, Stack,
    Container,
    Box,
}from '@mui/material';
import { styled } from '@mui/system';

export default function AboutUs() {
    const Box1 = styled(Box, {})({
        margin: "3rem",
        minWidth: "20rem",
    });
    return (
        <>
            <Typography variant="h3"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    margin: "1rem",
                    color: "primary.realDark",
                }}>About Us</Typography>
            <Container>
                <Paper sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "primary.light",
                    color: "primary.realDark",

                }}>
                    <Stack>
                        <Box1>
                            <Typography variant="h4">Services at Premier Pathology:</Typography>
                            <Typography
                                variant="h7"
                                >Surgical biopsy specimen diagnosis for all body sites including skin, GI, GYN, GU, and nails
                                Liquid and conventional pap smear processing and diagnoses
                                Fine needle and guided fine needle aspiration of masses
                                Fluid cytology processing and interpretation
                                Immunohistochemical and special stains
                                Breast prognostic panels (ER, PR, HER2/neu)
                                Digital images of gross specimens and microscopic findings are included when appropriate
                                Phone consultation for clinical laboratory testing
                            </Typography>
                        </Box1>

                        <Box1>
                            <Typography variant="h4">Quality Diagnoses:</Typography>
                            <Typography
                                variant="h7"
                                >remier is accredited by the College of American Pathologists (CAP) and licensed by CLIA
                                Pathologists peer review results on all cancers, difficult cases, and up to 10% of cases selected randomly to ensure accuracy
                                Pathologists review all atypical cytology findings
                                Pathologists maintain medical staff privileges at valley hospitals and are members of local medical societies
                            </Typography>
                        </Box1>
                        <Box1>
                            <Typography variant="h4">Diagnostic Service:</Typography>
                            <Typography
                                variant="h7"
                                >Pap smear turnaround target is within 24 hours online; 48 hours if abnormal
                                High grade SIL pap results faxed to clinicians
                                Quarterly pap statistics and patient summaries
                                Surgical turnaround time goal is to complete 80% of cases within 24 hours with online access and to complete the most difficult cases within 48 hours
                            </Typography>
                        </Box1>

                        <Box1>
                            <Typography variant="h4">Customer Service:</Typography>
                            <Typography
                                variant="h7"
                                >Responsive courier service
                                Friendly staff answers each incoming call to support and serve patients and clients
                                Most insurance is accepted, including Medical and Medicare
                            </Typography>
                        </Box1>
                    </Stack>
                    <Box1 sx={{
                        height: "50rem",
                        width: "75rem",
                    }}>
                        <img
                            style={{
                                height: "100%",
                                width: "100%",
                            }}
                            src="https://static.euronews.com/articles/stories/06/25/86/16/808x1224_cmsv2_8b0d06be-1a37-52c9-9b03-4ce3be50ab72-6258616.jpg"
                            alt="" />
                    </Box1>
                    
                </Paper>
                <Box sx={{
                            padding: "3rem",
                            backgroundColor: "primary.light",
                            color: "primary.realDark",
                        }}>
                            <Typography variant="h4">
                                History:</Typography>
                            <Typography
                                variant="h7"
                                >Founded in 1998 by Dr. Debra Ann Hanks and her husband Dave, Premier Pathology Laboratories,
                                Inc. has served the San Joaquin Valley for nearly 20 years. Dr. Hanks and Dave built the laboratory in Sierra View Medical Center’s
                                Medical Office Building. Located in Porterville, California. The lab provides Anatomic Pathology and Cytopathology support for Sierra
                                View Medical Center and many clinics and physicians throughout the San Joaquin Valley. Employing advanced technologies to serve our clients,
                                the friendly staff and skilled pathologists are ready, willing, and able to serve your needs.</Typography>
                        </Box>
            </Container>
        </>
    )
}