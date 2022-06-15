import {
    Typography,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material';
import staffInfo from "../Data/StaffInfo.json"

export default function staffCard({note}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                src={staffInfo.image}
                alt="Profile Picture"
                sx={{
                    width: "100%",
                    height: "25rem"
                }}/>
            <CardContent>
                <Typography variant="h5">
                    {note.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {note.job}
                </Typography>
            </CardContent>
        </Card>
    )
}
