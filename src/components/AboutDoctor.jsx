import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';

const AboutDoctor = () => {
    const milestones = [
        { year: '2008', title: 'BHMS Graduation', subtitle: 'MUHS Nashik', icon: SchoolIcon },
        { year: '2010', title: 'Started Practice', subtitle: 'Maharashtra', icon: WorkIcon },
        { year: '2015', title: 'Founded Clinic', subtitle: 'Multiple Branches', icon: BusinessIcon },
        { year: '2024', title: '1000+ Patients', subtitle: 'Treated Successfully', icon: PeopleIcon },
    ];

    return (
        <Box id="about" sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
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
                    Meet Dr. Deepak S. Pagare
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
                    Modern Homoeopathy Specialist dedicated to holistic healing
                </Typography>

                <Grid container spacing={4} alignItems="center">
                    {/* Left side - Bio text */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'text.primary', fontSize: '1.1rem' }}>
                            Dr. Deepak S. Pagare is a highly experienced Modern Homoeopathy specialist with a{' '}
                            <strong>Bachelor of Homoeopathic Medicine and Surgery (BHMS)</strong> degree from MUHS Nashik,
                            completed in 2008.
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'text.primary', fontSize: '1.1rem' }}>
                            With over <strong>10 years of dedicated practice</strong> across major cities in Maharashtra including
                            Mumbai, Pune, Nashik, and Kopargaon, Dr. Deepak has established himself as a trusted name in modern
                            homoeopathic care.
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'text.primary', fontSize: '1.1rem' }}>
                            As the <strong>founder of Modern Homoeopathy Clinic</strong> with multiple branches, Dr. Deepak has
                            successfully treated over <strong>1,000 patients</strong> with chronic and complex conditions. His
                            patient-centric approach focuses on holistic healing with measurable outcomes.
                        </Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 4 }}>
                            <Chip label="Patient-Centric Care" color="primary" sx={{ fontWeight: 'bold' }} />
                            <Chip label="Holistic Approach" color="primary" sx={{ fontWeight: 'bold' }} />
                            <Chip label="Measurable Outcomes" color="primary" sx={{ fontWeight: 'bold' }} />
                            <Chip label="Evidence-Based Treatment" color="primary" sx={{ fontWeight: 'bold' }} />
                        </Box>
                    </Grid>

                    {/* Right side - Timeline */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ position: 'relative' }}>
                            {milestones.map((milestone, index) => {
                                const IconComponent = milestone.icon;
                                return (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 4,
                                            position: 'relative',
                                            '&:hover': {
                                                transform: 'translateX(8px)',
                                                transition: 'transform 0.3s',
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: '50%',
                                                backgroundColor: 'primary.main',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mr: 3,
                                                boxShadow: '0 4px 12px rgba(0, 189, 163, 0.3)',
                                            }}
                                        >
                                            <IconComponent sx={{ color: 'white', fontSize: '1.8rem' }} />
                                        </Box>

                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                                {milestone.year}
                                            </Typography>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                                                {milestone.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {milestone.subtitle}
                                            </Typography>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutDoctor;
