import * as React from 'react';
import {
    Card,
    CardContent,
    TextField,
    Grid,
    Button,
} from '@mui/material';
import { useRef } from 'react';
import { useNavigate } from "react-router-dom"
import emailjs from 'emailjs-com'

export default function ContactForm() {
    const form = useRef();
    const navigate = useNavigate()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vhaq3ze', 'template_2sbjxge', form.current, 'YjNDu73ZCl2NQ6bYL')
            .then((result) => {
                console.log(result.text);
                navigate('/messageSent')
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <form ref={form} onSubmit={sendEmail} noValidate autoComplete="off">
        <Card sx={{
            marginBottom: "1rem",
            boxShadow: "none",
            }}>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid xs={12} sm={6} md={6} lg={6} item>
                        <TextField label="First Name" name="firstName" placeholder='Enter First Name' fullWidth />
                    </Grid>
                    <Grid xs={12} sm={6} md={6} lg={6} item>
                        <TextField label="Last Name" name="lastName" placeholder='Enter Last Name' fullWidth />
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12} item>
                        <TextField label="Phone" name="phone" placeholder='Enter Phone Number' fullWidth />
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12} item>
                        <TextField label="Email" name="email"placeholder='Enter Email Address' fullWidth />
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12} item>
                        <TextField label="Message" name="message" placeholder='Enter Email Address' multiline rows={4} fullWidth />
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12} item>
                        <Button 
                        fullWidth
                        id="button"
                        type="submit"
                        value="Send Email"
                        >Submit</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </form>
    )
};