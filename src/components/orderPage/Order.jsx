import React from 'react';
import { useRef } from 'react';
import { useNavigate } from "react-router-dom"
import { items } from "../../Data/ItemInfo"
import ItemBox from "./OrderItemsCard"
import emailjs from 'emailjs-com'
import OrderForm from "./OrderFormCard"
import {
    Typography,
    Grid,
    Container,
    Divider,
    Paper,
} from '@mui/material';

export default function Clients() {
    //function that sends email using emailjs
    const form = useRef();
    const navigate = useNavigate()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vhaq3ze', 'template_weo6xea', form.current, 'YjNDu73ZCl2NQ6bYL')
            .then((result) => {
                console.log(result.text);
                navigate('/orderComplete')
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <form ref={form} onSubmit={sendEmail} noValidate autoComplete="off">
            <Paper
        sx={{
            backgroundColor:"primary.contact",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
        }}>
            <Container sx={{
                backgroundColor: 'primary.main',
            }}>
                <Typography
                    variant="h3"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "2vh",
                        color: "primary.realDark",
                    }}>
                    Order Form
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        margin: "1vh",
                        color: "primary.realDark"
                    }}>
                    Order:
                </Typography>
                <Divider />
                <Grid container spacing={1} sx={{ paddingLeft: "1vw", marginTop: "1vh" }}>
                    {items.map(item => (
                        <Grid item key={item.id} xs={12} sm={6} md={3} xl={3} sx={{ padding: "1rem" }}>
                            <ItemBox item={item} />
                        </Grid>
                    ))}
                </Grid>
                <Typography
                    variant="h6"
                    sx={{
                        margin: "1vh",
                        color: "primary.realDark"
                    }}>
                    Order Info:
                </Typography>
                <Divider />
                <OrderForm />
            </Container>
            </Paper>
        </form >
    )
};