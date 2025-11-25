import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import conditions from '../data/conditions';

const ConditionsGrid = () => {
    return (
        <Box id="conditions" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f7fafc' }}>
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
                    Conditions We Specialize In
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
                    Expert modern homoeopathic treatment for chronic and complex health conditions
                </Typography>

                <Grid container spacing={3}>
                    {conditions.map((condition) => {
                        const IconComponent = condition.icon;
                        return (
                            <Grid item xs={12} sm={6} md={4} key={condition.id}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        borderRadius: 3,
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                                        },
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Box
                                            sx={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: '50%',
                                                backgroundColor: 'primary.50',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mb: 2,
                                            }}
                                        >
                                            <IconComponent sx={{ color: 'primary.main', fontSize: '2rem' }} />
                                        </Box>

                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 'bold',
                                                mb: 1,
                                                color: 'text.primary',
                                            }}
                                        >
                                            {condition.name}
                                        </Typography>

                                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                            {condition.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default ConditionsGrid;
