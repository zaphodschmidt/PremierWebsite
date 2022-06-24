import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItemButton,
    Grid,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FaxIcon from '@mui/icons-material/Fax';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import CallIcon from '@mui/icons-material/Call';

const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
        width: "100vw",
    },
    [theme.breakpoints.up('md')]: {
        width: "20vw",
    },
}));

export default function NavBar() {
    const [open, setOpen] = React.useState(() => {
        return false;
    })
    function toggleDrawer() {
        setOpen(!open)
    }
    const drawer = (
        <div>
            <Toolbar />
            <Root>
                <List sx={{
                    color: "primary.main",
                    backgroundColor: "primary.dark",
                    width: "20vw",
                }}>
                    <ListItemButton href="/" onClick={() => setOpen(false)}>

                        <HomeOutlinedIcon sx={{ marginX: 1 }} />
                        <Typography variant="h5">
                            Home
                        </Typography>

                    </ListItemButton>
                    <ListItemButton href="/clients" onClick={() => setOpen(false)}>
                        <Inventory2OutlinedIcon sx={{ marginX: 1 }} />
                        <Typography variant="h5">
                            Order Supplies
                        </Typography>
                    </ListItemButton>
                    <ListItemButton href="/aboutUs" onClick={() => setOpen(false)}>
                        <InfoOutlinedIcon sx={{ marginX: 1 }} />
                        <Typography variant="h5">
                            About Us
                        </Typography>
                    </ListItemButton>
                    <ListItemButton href="/staff" onClick={() => setOpen(false)}>
                        <PeopleAltOutlinedIcon sx={{ marginX: 1 }} />
                        <Typography variant="h5">
                            Staff
                        </Typography>
                    </ListItemButton>
                    <ListItemButton href="/contact" onClick={() => setOpen(false)}>
                        <ContactPageOutlinedIcon sx={{ marginX: 1 }} />
                        <Typography variant="h5">
                            Contact
                        </Typography>
                    </ListItemButton>
                </List>
            </Root>
        </div>
    );

    return (
        <Box>
            <AppBar position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: "primary.dark",
                    color: "primary.main",
                    height: '70px',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: "space-between",
                }}>
                    <Box sx={{
                        height: '70px',
                    }}>
                        <Grid container direction="row" spacing={8}
                            sx={{
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <Grid item>
                                <ListItemButton
                                    href="/" sx={{
                                        height: '70px',
                                    }}>
                                    <Grid container direction="row" alignItems="center" >
                                        <Grid item
                                        sx={{
                                            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                                            alignItems: 'center',
                                        }}>
                                            <HealthAndSafetyIcon fontSize="large" />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='h6'>Premier Pathology Laboratories, Inc.</Typography>
                                        </Grid>
                                    </Grid>
                                </ListItemButton>
                            </Grid>
                            <Grid item
                                sx={{
                                    display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                                    alignItems: 'center',
                                }}>
                                <Grid container direction="row"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}>
                                    <Grid item>
                                        <CallIcon fontSize="large" />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='h6'>559-781-5174</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item
                                sx={{
                                    display: { xs: "none", sm: "none", md: "none", lg: "flex" },
                                    alignItems: 'center',
                                }}>
                                <Grid container direction="row"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}>
                                    <Grid item>
                                        <FaxIcon fontSize="large" />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='h6'>Fax: 559-781-5184</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    <IconButton
                        color="inherit"
                        onClick={toggleDrawer}
                        aria-label="delete"
                        size="large"
                    >
                        <MenuIcon fontSize="large" />
                    </IconButton>
                    <Drawer
                        anchor='right'
                        open={open}
                        onClose={toggleDrawer}
                        PaperProps={{
                            sx: {
                                backgroundColor: "primary.dark",
                            }
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Box >

    );
}
