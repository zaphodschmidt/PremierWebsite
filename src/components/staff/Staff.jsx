import {
    Typography,
    Grid,
    Paper,
} from '@mui/material';
import StaffCard from "./StaffCard.jsx"
import { data } from "../../Data/StaffInfo"
export default function Staff() {
    return (
        <Paper
            sx={{
                backgroundColor: "primary.contact",
                width: "100%",
                height: "100%",
            }}>
            <Typography variant="h3"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem",
                    color: "primary.realDark"
                }}>
                Premier Pathology Staff
            </Typography>
            <Grid container>
                {data.map(staff => (
                    <Grid item key={staff.id} xs={12} sm={6} md={4} lg={3} sx={{ padding: "1rem" }}>
                        <StaffCard staff={staff} />
                    </Grid>
                ))}
            </Grid>
        </Paper>
    )
}
