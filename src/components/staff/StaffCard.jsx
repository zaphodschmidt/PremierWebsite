import {
    Typography,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material';

export default function staffCard({ staff }) {

    return (
        <Card sx={{ 
        maxWidth: 345,
        color: "primary.realDark",
        backgroundColor:"primary.light"}}>
            <CardMedia
                component="img"
                image={staff.image}
                alt="Profile Picture"
                sx={{
                    width: "100%",
                    height: "25rem"
                }} />
            <CardContent>
                <Typography variant="h5">
                    {staff.name}
                </Typography>
                <Typography variant="body1" color="primary.dark">
                    {staff.job}
                </Typography>
            </CardContent>
        </Card>
    )
}
