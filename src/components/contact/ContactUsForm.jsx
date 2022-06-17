import {
    Card,
    CardContent,
    TextField,
    Grid,
    Button,
} from '@mui/material';

export default function ContactForm() {
    return (
        <Card sx={{marginBottom: "1rem"}}>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid xs={12} sm={6} md={6} lg={6} item>
                        <TextField label="First Name" placeholder='Enter First Name' fullWidth />
                    </Grid>
                    <Grid xs={12} sm={6} md={6} lg={6} item>
                        <TextField label="Last Name" placeholder='Enter Last Name' fullWidth />
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12} item>
                        <TextField label="Phone" placeholder='Enter Phone Number' fullWidth />
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12} item>
                        <TextField label="Email" placeholder='Enter Email Address' fullWidth />
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12} item>
                        <TextField label="Message" placeholder='Enter Email Address' multiline rows={4} fullWidth />
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12} item>
                        <Button color="primary" fullWidth>Submit</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};