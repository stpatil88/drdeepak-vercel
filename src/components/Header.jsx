import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileOpen(false);
        }
    };

    const navItems = [
        { label: 'Home', id: 'hero' },
        { label: 'About', id: 'about' },
        { label: 'Conditions', id: 'conditions' },
        { label: 'Approach', id: 'approach' },
        { label: 'Testimonials', id: 'testimonials' },
        { label: 'Locations', id: 'locations' },
        { label: 'Contact', id: 'contact' },
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, color: 'primary.main', fontWeight: 'bold' }}>
                Dr. Deepak's Clinic
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} onClick={() => scrollToSection(item.id)} sx={{ cursor: 'pointer' }}>
                        <ListItemText primary={item.label} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            color: 'primary.main',
                            fontWeight: 'bold',
                            fontSize: { xs: '1rem', md: '1.25rem' },
                            cursor: 'pointer',
                        }}
                        onClick={() => scrollToSection('hero')}
                    >
                        Dr. Deepak's Modern Homoeopathy
                    </Typography>

                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ color: 'primary.main' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                            <Button
                                variant="contained"
                                startIcon={<PhoneIcon />}
                                onClick={() => scrollToSection('contact')}
                                sx={{
                                    backgroundColor: 'primary.main',
                                    '&:hover': { backgroundColor: 'primary.dark' },
                                    borderRadius: '25px',
                                    px: 3,
                                }}
                            >
                                Book Appointment
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Header;
