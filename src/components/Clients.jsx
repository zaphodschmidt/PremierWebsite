import React from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom"

import Biopsy from "../photos/ItemsPhotos/formContainters.jpeg"
import Breast from "../photos/ItemsPhotos/breastTimeSheet.png"
import Blue from "../photos/ItemsPhotos/NON-GYNform.png"
import Green from "../photos/ItemsPhotos/GreenSheet.png"

import emailjs from 'emailjs-com';
import {
    Select,
    TextField,
    MenuItem,
    Button,
    Paper,
    Typography,
    FormGroup,
    Grid,
    Box,
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
    //Labs array
    const options = [{ lab: "Laboratory (None)", address1: "", address2: "", city: "", zip: "" },
    { lab: "Delano Surgical Group", address1: "1205 Garces Hwy", address2: "STE 303", city: "Delano", zip: "93216" },
    { lab: "Dr Seralathan's Office", address1: "560 W Putnam Ave", address2: "", city: "Porterville", zip: "93257" },
    { lab: "Natraj Surgery Center", address1: "555 W Putnam Ave", address2: "", city: "Porterville", zip: "93257" },
    { lab: "Sierra View Medical Center Urology", address1: "386 N Villa", address2: "STE B", city: "Porterville", zip: "93257" },
    { lab: "Sierra View Wound Healing", address1: "370 N Villa", address2: "", city: "Porterville", zip: "93257" }];

    //Lab items array
    const items = [
        { id: 0, product: "Biohazard Bags (Qty: 50)" },
        { id: 1, product: "Biopsy Bottle(s)" },
        { id: 2, product: "Breast Time Sheet" },
        { id: 3, product: "Blue Non GYN Cytology Form(s)" },
        { id: 4, product: "Green Surgical From(s)" },
        { id: 5, product: "Nail Bag(s)" },
        { id: 6, product: "Prostate Kit(s)" },
        { id: 7, product: "Saccomanno Fluid Bottle(s)" }]

    //use states for all of the autofill in the input bars
    const [address1, setAddress1] = useState(() => {
        return options[0].address1
    })
    const [address2, setAddress2] = useState(() => {
        return options[0].address2
    })
    const [city, setCity] = useState(() => {
        return options[0].city
    })
    const [zip, setZip] = useState(() => {
        return options[0].zip
    })
    //changes the inputs based on what lab has been selected
    function onSelectChange(e) {
        setAddress1(options[e.target.value].address1)
        setAddress2(options[e.target.value].address2)
        setCity(options[e.target.value].city)
        setZip(options[e.target.value].zip)
    }

    return (
        <>
            <form ref={form} onSubmit={sendEmail} noValidate autoComplete="off">
                <Paper sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    width: "80vw",
                    marginLeft: "10vw",
                    marginTop: "2vh",
                    marginBottom: "2vh",
                    backgroundColor: "primary.light",
                    ".MuiOutlinedInput-root": {
                        color: "primary.realDark",
                        minWidth: "22.5vw",
                        margin: "1vw",
                    },
                    ".MuiFormLabel-root": {
                        color: "primary.realDark",
                        margin: "1vw",
                    }
                }}>
                    <FormGroup>
                        <Typography
                            variant="h3"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                margin: "2vh",
                                color: "primary.realDark"
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
                            <Grid item xs={12} sm={6} md={4}>
                                <Paper elevation={3}
                                    sx={{
                                        width: "24vw",
                                        height: "55vh",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}>
                                    <Box>
                                        <TextField
                                            id="count0"
                                            name="count0"
                                            type="number"
                                            label={items[0].product}
                                            onChange={(e) => e.target.value < 0 ? (e.target.value = 0) : e.target.value}
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            padding: "2vw",
                                            marginLeft: "3.5vw",
                                            width: "13vw",
                                            height: "30vh",
                                        }}>
                                        <img
                                            src="https://assets.fishersci.com/TFS-Assets/CCG/product-images/F103386~p.eps-650.jpg"
                                            alt=""
                                            style={{
                                                width: '100%',
                                                height: '100%',

                                            }} />
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Paper elevation={4}
                                    sx={{
                                        width: "24vw",
                                        height: "55vh",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}>
                                    <Box>
                                        <TextField
                                            id="count1"
                                            name="count1"
                                            type="number"
                                            label={items[1].product}
                                            onChange={(e) => e.target.value < 0 ? (e.target.value = 0) : e.target.value} />
                                    </Box>
                                    <Box sx={{
                                        padding: "2vw",
                                        width: "20vw",
                                        height: "30vh",
                                    }}>
                                        <img
                                            src={Biopsy}
                                            alt=""
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }} />
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Paper elevation={4}
                                    sx={{
                                        width: "24vw",
                                        height: "55vh",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}>
                                    <Box>
                                        <TextField
                                            id="count2"
                                            name="count2"
                                            type="number"
                                            label={items[2].product}
                                            onChange={(e) => e.target.value < 0 ? (e.target.value = 0) : e.target.value} />
                                    </Box>
                                    <Box sx={{
                                        marginLeft: "3.5vw",
                                        boxShadow: 3,
                                        width: "17vw",
                                        height: "22vw",
                                    }}>
                                        <img
                                            src={Breast}
                                            alt=""
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }} />
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Paper elevation={4}
                                    sx={{
                                        width: "24vw",
                                        height: "55vh",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}>
                                    <Box>
                                        <TextField
                                            id="count3"
                                            name="count3"
                                            type="number"
                                            label={items[3].product}
                                            onChange={(e) => e.target.value < 0 ? (e.target.value = 0) : e.target.value} />
                                    </Box>
                                    <Box sx={{
                                        marginLeft: "3.5vw",
                                        boxShadow: 3,
                                        width: "17vw",
                                        height: "22vw",
                                    }}>
                                        <img
                                            src={Blue}
                                            alt=""
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }} />
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Paper elevation={4}
                                    sx={{
                                        width: "24vw",
                                        height: "55vh",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}>
                                    <Box>
                                        <TextField
                                            id="count4"
                                            name="count4"
                                            type="number"
                                            label={items[4].product}
                                            onChange={(e) => e.target.value < 0 ? (e.target.value = 0) : e.target.value} />
                                    </Box>
                                    <Box sx={{
                                        marginLeft: "3.5vw",
                                        boxShadow: 3,
                                        width: "17vw",
                                        height: "22vw",
                                    }}>
                                        <img
                                            src={Green}
                                            alt=""
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }} />
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Paper elevation={4}
                                    sx={{
                                        width: "24vw",
                                        height: "55vh",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}>
                                    <Box>
                                        <TextField
                                            id="count5"
                                            name="count5"
                                            type="number"
                                            label={items[5].product}
                                            onChange={(e) => e.target.value < 0 ? (e.target.value = 0) : e.target.value} />
                                    </Box>
                                    <Box sx={{
                                        padding: "2vw",
                                        width: "20vw",
                                        height: "30vh",
                                    }}>
                                        <img
                                            src="https://www.hammernutrition.com/site/images/products/ZIP_MAIN-1.jpg?resizeid=2&resizeh=250&resizew=250"
                                            alt=""
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }} />
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Paper elevation={4}
                                    sx={{
                                        width: "24vw",
                                        height: "55vh",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}>
                                    <Box>
                                        <TextField
                                            id="count6"
                                            name="count6"
                                            type="number"
                                            label={items[6].product}
                                            onChange={(e) => e.target.value < 0 ? (e.target.value = 0) : e.target.value} />
                                    </Box>
                                    <Box sx={{
                                        padding: "2vw",
                                        width: "20vw",
                                        height: "30vh",
                                    }}>
                                        <img
                                            src="https://www.statlab.com/media/catalog/product/cache/b533c6f760d5e4e963e293432a1a09bf/2/0/20140616_pbknb12_104_3.jpg"
                                            alt=""
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }} />
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Paper elevation={4}
                                    sx={{
                                        width: "24vw",
                                        height: "55vh",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}>
                                    <Box>
                                        <TextField
                                            id="count7"
                                            name="count7"
                                            type="number"
                                            label={items[7].product}
                                            onChange={(e) => e.target.value < 0 ? (e.target.value = 0) : e.target.value} />
                                    </Box>
                                    <Box sx={{
                                        padding: "2vw",
                                        marginLeft: "2vw",
                                        width: "16vw",
                                        height: "30vh",
                                    }}>
                                        <img
                                            src="https://www.statlab.com/media/catalog/product/cache/5cfff9042ebff9a78e950605ab5d88cb/s/l/sl26_saccomanno_prefill.jpg"
                                            alt=""
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }} />
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </FormGroup>
                    <FormGroup>
                    <Typography
                            variant="h6"
                            sx={{
                                marginTop:"4vh",
                                marginLeft: "2vh",
                                color: "primary.realDark"
                            }}>
                            Contact Info:
                        </Typography>
                    <Grid>
                            <TextField
                                label="Email"
                                name="email"
                                required />
                            <TextField
                                label="Phone"
                                name="phone"
                                required />
                            <Select
                                defaultValue="0"
                                onChange={onSelectChange}>
                                <MenuItem value="0">{options[0].lab}</MenuItem>
                                <MenuItem value="1">{options[1].lab}</MenuItem>
                                <MenuItem value="2">{options[2].lab}</MenuItem>
                                <MenuItem value="3">{options[3].lab}</MenuItem>
                                <MenuItem value="4">{options[4].lab}</MenuItem>
                                <MenuItem value="5">{options[5].lab}</MenuItem>
                            </Select>
                            <TextField
                                id="address1"
                                name="address1"
                                type="text"
                                label="Address1"
                                value={address1}
                                onChange={(e) => setAddress1(e.target.value)}
                                required />
                            <TextField
                                id="address2"
                                name="address2"
                                type="text"
                                label="Address2"
                                value={address2}
                                onChange={(e) => setAddress2(e.target.value)} />
                            <TextField
                                id="city"
                                name="city"
                                type="text"
                                label="City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required />
                            <TextField
                                id="zip"
                                name="zip"
                                type="text"
                                label="Zip Code"
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                                required />
                        </Grid>
                    </FormGroup>
                    <Button
                        id="button"
                        type="submit"
                        value="Send Email"
                        sx={{
                            backgroundColor: "primary.dark",
                            padding: "1vw",
                            marginTop: "2vh",
                            marginBottom: "2vh",
                            width: "50%",
                        }}>
                        Submit Order
                    </Button>
                </Paper>
            </form >
        </>
    );
};

