import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const quickLinks = [
        { label: 'Home', id: 'hero' },
        { label: 'About', id: 'about' },
        { label: 'Conditions', id: 'conditions' },
        { label: 'Approach', id: 'approach' },
        { label: 'Testimonials', id: 'testimonials' },
        { label: 'Locations', id: 'locations' },
        { label: 'Contact', id: 'contact' },
    ];

    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
                color: 'white',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Left section - Clinic info */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Dr. Deepak's Modern Homoeopathy
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                            Modern Homoeopathy for Chronic & Complex Diseases
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton
                                href="tel:+917620766266"
                                sx={{
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    color: 'white',
                                    '&:hover': { backgroundColor: 'primary.main' },
                                }}
                            >
                                <PhoneIcon />
                            </IconButton>
                            <IconButton
                                href="https://wa.me/917620766266"
                                target="_blank"
                                sx={{
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    color: 'white',
                                    '&:hover': { backgroundColor: '#25D366' },
                                }}
                            >
                                <WhatsAppIcon />
                            </IconButton>
                            <IconButton
                                href="mailto:info@modernhomeopathycare.com"
                                sx={{
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    color: 'white',
                                    '&:hover': { backgroundColor: 'accent.main' },
                                }}
                            >
                                <EmailIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* Middle section - Quick links */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Quick Links
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {quickLinks.map((link) => (
                                <Typography
                                    key={link.id}
                                    variant="body2"
                                    onClick={() => scrollToSection(link.id)}
                                    sx={{
                                        color: 'rgba(255,255,255,0.8)',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            color: 'primary.main',
                                            textDecoration: 'underline',
                                        },
                                    }}
                                >
                                    {link.label}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                    {/* Right section - Contact */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                            Contact Us
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1, color: 'rgba(255,255,255,0.8)' }}>
                            <strong>Phone:</strong> +91 7620 766266
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1, color: 'rgba(255,255,255,0.8)' }}>
                            <strong>WhatsApp:</strong> +91 7620 766266
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                            <strong>Email:</strong> info@modernhomeopathycare.com
                        </Typography>
                    </Grid>
                </Grid>

                {/* Copyright */}
                <Box
                    sx={{
                        mt: 6,
                        pt: 3,
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                        © {currentYear} Dr. Deepak's Modern Homoeopathy Care Centre. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
