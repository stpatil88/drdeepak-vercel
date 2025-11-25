import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SearchIcon from '@mui/icons-material/Search';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const ApproachSection = () => {
    const steps = [
        {
            id: 1,
            title: 'Detailed Case Taking',
            description: 'Comprehensive consultation to understand your complete medical history, symptoms, and lifestyle.',
            icon: AssignmentIcon,
        },
        {
            id: 2,
            title: 'Root Cause Analysis',
            description: 'Scientific investigation to identify the underlying causes of your health condition.',
            icon: SearchIcon,
        },
        {
            id: 3,
            title: 'Individualized Remedies',
            description: 'Personalized homoeopathic treatment plan tailored specifically to your unique needs.',
            icon: LocalPharmacyIcon,
        },
        {
            id: 4,
            title: 'Progress Tracking',
            description: 'Regular follow-ups and monitoring to ensure optimal results and adjust treatment as needed.',
            icon: TrendingUpIcon,
        },
    ];

    const benefits = [
        'Minimal to no side effects',
        'Holistic mind-body balance',
        'Long-term sustainable relief',
        'Safe for all age groups',
        'Complements conventional medicine',
    ];

    return (
        <Box id="approach" sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
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
                    Our Modern Homoeopathy Approach
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
                    A systematic, evidence-based methodology for lasting health outcomes
                </Typography>

                {/* Steps */}
                <Grid container spacing={3} sx={{ mb: 6 }}>
                    {steps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <Grid item xs={12} sm={6} md={3} key={step.id}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        height: '100%',
                                        textAlign: 'center',
                                        borderRadius: 3,
                                        backgroundColor: index % 2 === 0 ? 'primary.50' : 'accent.50',
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 70,
                                            height: 70,
                                            borderRadius: '50%',
                                            backgroundColor: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mx: 'auto',
                                            mb: 2,
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                        }}
                                    >
                                        <IconComponent sx={{ color: index % 2 === 0 ? 'primary.main' : 'accent.main', fontSize: '2.5rem' }} />
                                    </Box>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'bold',
                                            mb: 1,
                                            color: 'text.primary',
                                            fontSize: '1.1rem',
                                        }}
                                    >
                                        {step.title}
                                    </Typography>

                                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                        {step.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>

                {/* Benefits */}
                <Paper
                    elevation={0}
                    sx={{
                        p: 4,
                        borderRadius: 3,
                        backgroundColor: 'primary.50',
                        border: '2px solid',
                        borderColor: 'primary.200',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 'bold',
                            mb: 3,
                            color: 'text.primary',
                            textAlign: 'center',
                        }}
                    >
                        Why Choose Modern Homoeopathy?
                    </Typography>

                    <Grid container spacing={2}>
                        {benefits.map((benefit, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Box
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: '50%',
                                            backgroundColor: 'primary.main',
                                        }}
                                    />
                                    <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 500 }}>
                                        {benefit}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default ApproachSection;
