import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PeopleIcon from '@mui/icons-material/People';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const StatsBand = () => {
    const stats = [
        {
            id: 1,
            number: '10+',
            label: 'Years Experience',
            icon: WorkspacePremiumIcon,
        },
        {
            id: 2,
            number: '1000+',
            label: 'Patients Treated',
            icon: PeopleIcon,
        },
        {
            id: 3,
            number: '100%',
            label: 'Chronic & Complex Cases',
            icon: LocalHospitalIcon,
        },
    ];

    return (
        <Box sx={{ py: { xs: 6, md: 8 }, background: 'linear-gradient(135deg, #00bda3 0%, #2196f3 100%)' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {stats.map((stat) => {
                        const IconComponent = stat.icon;
                        return (
                            <Grid item xs={12} md={4} key={stat.id}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        textAlign: 'center',
                                        borderRadius: 3,
                                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 12px 28px rgba(0,0,0,0.2)',
                                        },
                                    }}
                                >
                                    <IconComponent sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }} />
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: 'primary.main',
                                            mb: 1,
                                            fontSize: { xs: '2.5rem', md: '3rem' },
                                        }}
                                    >
                                        {stat.number}
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                                        {stat.label}
                                    </Typography>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default StatsBand;
