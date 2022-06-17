import {
    Grid,
    TextField,
    MenuItem,
    Select,
    Card,
    CardContent,
    Button,
} from '@mui/material';
import { options } from "../../Data/OrderAddressInfo"
import { useState } from 'react';
import customTheme from '../../theme'

export default function OrderForm() {
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
        <Card sx={{backgroundColor: "white"}}>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid xs={12} sm={12} md={6} lg={6} item>
                        <TextField
                            label="Email"
                            name="email"
                            required
                            fullWidth/>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6} item>
                        <TextField
                            label="Phone"
                            name="phone"
                            required
                            fullWidth/>
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12} item>
                        <Select
                            defaultValue="0"
                            onChange={onSelectChange}
                            className={customTheme.select}
                            fullWidth 
                            >
                            <MenuItem value="0">{options[0].lab}</MenuItem>
                            <MenuItem value="1">{options[1].lab}</MenuItem>
                            <MenuItem value="2">{options[2].lab}</MenuItem>
                            <MenuItem value="3">{options[3].lab}</MenuItem>
                            <MenuItem value="4">{options[4].lab}</MenuItem>
                            <MenuItem value="5">{options[5].lab}</MenuItem>
                        </Select>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6} item>
                        <TextField
                            id="address1"
                            name="address1"
                            type="text"
                            label="Address Line 1"
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)}
                            required
                            fullWidth/>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6} item>
                        <TextField
                            id="address2"
                            name="address2"
                            type="text"
                            label="Address Line 2"
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)} 
                            fullWidth/>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6} item>
                        <TextField
                            id="city"
                            name="city"
                            type="text"
                            label="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            fullWidth/>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6} item>
                        <TextField
                            id="zip"
                            name="zip"
                            type="text"
                            label="Zip Code"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            required
                            fullWidth/>
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12} item>
                        <Button
                            id="button"
                            type="submit"
                            value="Send Email"
                            fullWidth>
                            Submit Order
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};