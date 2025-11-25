import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import testimonials from '../data/testimonials';

const Testimonials = () => {
    return (
        <Box id="testimonials" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f7fafc' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        mb: 2,
                        color: 'text.primary',
                        fontSize: { xs: '2rem', md: '2.5rem' },
                    }}
                >
                    What Our Patients Say
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        textAlign: 'center',
                        color: 'text.secondary',
                        mb: 6,
                        maxWidth: '800px',
                        mx: 'auto',
                    }}
                >
                    Real stories from real people who found healing through modern homoeopathy
                </Typography>

                <Grid container spacing={4}>
                    {testimonials.map((testimonial) => (
                        <Grid item xs={12} md={4} key={testimonial.id}>
                            <Card
                                sx={{
                                    height: '100%',
                                    borderRadius: 3,
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                                    },
                                    position: 'relative',
                                    overflow: 'visible',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: -20,
                                        left: 20,
                                        width: 50,
                                        height: 50,
                                        borderRadius: '50%',
                                        backgroundColor: 'primary.main',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 4px 12px rgba(0, 189, 163, 0.3)',
                                    }}
                                >
                                    <FormatQuoteIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
                                </Box>

                                <CardContent sx={{ pt: 5, pb: 3, px: 3 }}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: 'text.primary',
                                            mb: 3,
                                            lineHeight: 1.7,
                                            fontStyle: 'italic',
                                        }}
                                    >
                                        "{testimonial.text}"
                                    </Typography>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Avatar
                                            sx={{
                                                backgroundColor: 'accent.main',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {testimonial.initials}
                                        </Avatar>

                                        <Box>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                                                {testimonial.initials}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {testimonial.city} • {testimonial.condition}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonials;
