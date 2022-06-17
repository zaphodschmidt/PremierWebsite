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
        <>
            <form ref={form} onSubmit={sendEmail} noValidate autoComplete="off">
                <Container sx={{backgroundColor:'primary.light'}}>
                    <Typography
                        variant="h3"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            margin: "2vh",
                            color: "primary.realDark",
                        }}>
                        Order Form
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            margin: "2vh",
                            color: "primary.realDark"
                        }}>
                        Order:
                    </Typography>
                    <Grid container spacing={4} sx={{ paddingLeft: "1vw", }}>
                        {items.map(item => (
                            <Grid item key={item.id} xs={12} sm={6} md={4} xl={3} sx={{ padding: "1rem" }}>
                                <ItemBox item={item} />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={3} sx={{ padding: "1rem" }}>
                        <OrderForm />
                    </Grid>
                </Container>
            </form >
        </>
    )
};