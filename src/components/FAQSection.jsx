import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faqs from '../data/faqs';

const FAQSection = () => {
    return (
        <Box id="faq" sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
            <Container maxWidth="md">
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
                    Frequently Asked Questions
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
                    Find answers to common questions about modern homoeopathy
                </Typography>

                <Box>
                    {faqs.map((faq) => (
                        <Accordion
                            key={faq.id}
                            sx={{
                                mb: 2,
                                borderRadius: 2,
                                '&:before': { display: 'none' },
                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                '&:hover': {
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'primary.50',
                                    },
                                }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary', fontSize: '1.1rem' }}>
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ pt: 0 }}>
                                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default FAQSection;
