import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MapIcon from '@mui/icons-material/Map';
import locations from '../data/locations';

const Locations = () => {
    return (
        <Box id="locations" sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
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
                    Visit us at any of our conveniently located clinics across Maharashtra
                </Typography>

                <Grid container spacing={4}>
                    {locations.map((location) => (
                        <Grid item xs={12} md={4} key={location.id}>
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
                                }}
                            >
                                <CardContent sx={{ p: 3 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 'bold',
                                            mb: 3,
                                            color: 'primary.main',
                                        }}
                                    >
                                        {location.city}
                                    </Typography>

                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
                                        <LocationOnIcon sx={{ color: 'text.secondary', mt: 0.5 }} />
                                        <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.6 }}>
                                            {location.address}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 3 }}>
                                        <AccessTimeIcon sx={{ color: 'text.secondary', mt: 0.5 }} />
                                        <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.6 }}>
                                            {location.timings}
                                        </Typography>
                                    </Box>

                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        startIcon={<MapIcon />}
                                        href={location.mapLink}
                                        target="_blank"
                                        sx={{
                                            borderColor: 'primary.main',
                                            color: 'primary.main',
                                            '&:hover': {
                                                borderColor: 'primary.dark',
                                                backgroundColor: 'primary.50',
                                            },
                                            borderRadius: '25px',
                                            py: 1,
                                        }}
                                    >
                                        View on Map
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Locations;
