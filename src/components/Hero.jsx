import { Box, Container, Typography, Button, Card, Chip, Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Hero = () => {
    const conditions = [
        'Infertility',
        'Thyroid Disorders',
        'Rheumatoid Arthritis',
        'Skin Diseases',
        'Lifestyle Disorders',
        'Supportive Cancer Care',
    ];

    return (
        <Box id="hero" sx={{ py: { xs: 6, md: 10 }, background: 'linear-gradient(135deg, #e0f7f4 0%, #ffffff 100%)' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    {/* Left side - Text content */}
                    <Grid item xs={12} md={7}>
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 'bold',
                                color: 'text.primary',
                                mb: 2,
                                fontSize: { xs: '2rem', md: '3rem' },
                                lineHeight: 1.2,
                            }}
                        >
                            Modern Homoeopathy for Chronic & Complex Diseases
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                color: 'text.secondary',
                                mb: 4,
                                fontSize: { xs: '1rem', md: '1.25rem' },
                                lineHeight: 1.6,
                            }}
                        >
                            Over 10 years of experience and 1,000+ patients treated with personalized, modern homoeopathic care.
                        </Typography>

                        {/* Conditions list */}
                        <Box sx={{ mb: 4 }}>
                            <Grid container spacing={1}>
                                {conditions.map((condition, index) => (
                                    <Grid item xs={12} sm={6} key={index}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <CheckCircleIcon sx={{ color: 'primary.main', fontSize: '1.2rem' }} />
                                            <Typography variant="body1" sx={{ color: 'text.primary' }}>
                                                {condition}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>

                        {/* CTA Buttons */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<CalendarMonthIcon />}
                                href="https://wa.me/917620766266?text=Hello%20Dr.%20Dipak,%20I%20would%20like%20to%20book%20a%20consultation%20for%20homoeopathy%20treatment."
                                target="_blank"
                                sx={{
                                    backgroundColor: 'primary.main',
                                    '&:hover': { backgroundColor: 'primary.dark', transform: 'translateY(-2px)' },
                                    borderRadius: '30px',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    transition: 'all 0.3s',
                                    boxShadow: '0 4px 12px rgba(0, 189, 163, 0.3)',
                                }}
                            >
                                Book Consultation
                            </Button>

                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<PhoneIcon />}
                                href="tel:+917620766266"
                                sx={{
                                    borderColor: 'primary.main',
                                    color: 'primary.main',
                                    '&:hover': {
                                        borderColor: 'primary.dark',
                                        backgroundColor: 'primary.50',
                                        transform: 'translateY(-2px)',
                                    },
                                    borderRadius: '30px',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    transition: 'all 0.3s',
                                }}
                            >
                                Call Now
                            </Button>

                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<WhatsAppIcon />}
                                href="https://wa.me/917620766266"
                                target="_blank"
                                sx={{
                                    backgroundColor: '#25D366',
                                    '&:hover': { backgroundColor: '#20BA5A', transform: 'translateY(-2px)' },
                                    borderRadius: '30px',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    transition: 'all 0.3s',
                                    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
                                }}
                            >
                                Chat on WhatsApp
                            </Button>
                        </Box>
                    </Grid>

                    {/* Right side - Doctor card */}
                    <Grid item xs={12} md={5}>
                        <Card
                            sx={{
                                p: 3,
                                borderRadius: 4,
                                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                background: 'white',
                                transition: 'transform 0.3s',
                                '&:hover': { transform: 'translateY(-8px)' },
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    height: 300,
                                    borderRadius: 3,
                                    mb: 2,
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src="/src/drdeepak.jpg"
                                    alt="Dr. Deepak S. Pagare"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>

                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                                <Chip
                                    label="Modern Homoeopathy Specialist"
                                    sx={{
                                        backgroundColor: 'primary.main',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '0.875rem',
                                    }}
                                />
                                <Chip
                                    label="BHMS – MUHS Nashik"
                                    sx={{
                                        backgroundColor: 'accent.main',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '0.875rem',
                                    }}
                                />
                                <Chip
                                    label="10+ Years of Experience"
                                    sx={{
                                        backgroundColor: 'primary.700',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '0.875rem',
                                    }}
                                />
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
