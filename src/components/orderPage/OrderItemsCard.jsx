import {
    Card,
    CardMedia,
    CardContent,
    TextField,
} from '@mui/material';

export default function ItemBox({ item }) {
    return (
        <Card sx={{
            border: 1,
            borderColor: 'primary.contact',
            boxShadow:2,
        }}>
            <CardContent sx={{
                maxWidth: 345,
                backgroundColor: "primary.main"
            }}>
                <TextField
                    name={item.name}
                    type="number"
                    onWheel={event => event.target.blur()}
                    placeholder='Enter Number'
                    label={item.product}
                    onChange={(e) => e.target.value < 0 ? (e.target.value = 0) : e.target.value}
                    fullWidth
                />
            </CardContent>
            <CardMedia
                component="img"
                image={item.img}
                alt="Product Image"
                sx={{
                    width: "100%",
                    height: "15rem"
                }} />
        </Card>
    )
};