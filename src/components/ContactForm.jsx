import { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    MenuItem,
    Paper,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        city: '',
        condition: '',
        mode: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const conditions = [
        'Infertility',
        'Thyroid Disorders',
        'Rheumatoid Arthritis',
        'Chronic Skin Diseases',
        'Lifestyle Disorders',
        'Supportive Cancer Care',
        'Others',
    ];

    const consultationModes = ['In-Clinic', 'Online'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.mobile.trim()) {
            newErrors.mobile = 'Mobile number is required';
        } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
            newErrors.mobile = 'Please enter a valid 10-digit mobile number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Construct WhatsApp message with form data
            let message = `Hello Dr. Deepak, I would like to book an appointment.\n\n`;
            message += `Name: ${formData.name}\n`;
            message += `Mobile: ${formData.mobile}\n`;

            if (formData.email) {
                message += `Email: ${formData.email}\n`;
            }

            if (formData.city) {
                message += `City: ${formData.city}\n`;
            }

            if (formData.condition) {
                message += `Condition: ${formData.condition}\n`;
            }

            if (formData.mode) {
                message += `Consultation Mode: ${formData.mode}\n`;
            }

            if (formData.message) {
                message += `\nMessage/Symptoms:\n${formData.message}`;
            }

            // Encode the message for URL
            const encodedMessage = encodeURIComponent(message);

            // Open WhatsApp with the message
            window.open(`https://wa.me/917620766266?text=${encodedMessage}`, '_blank');

            // Reset form
            setFormData({
                name: '',
                mobile: '',
                email: '',
                city: '',
                condition: '',
                mode: '',
                message: '',
            });
        }
    };

    return (
        <Box id="contact" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f7fafc' }}>
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
                    Book an Appointment
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
                    Take the first step towards holistic healing. Contact us today!
                </Typography>

                <Grid container spacing={4}>
                    {/* Left side - Contact details */}
                    <Grid item xs={12} md={5}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 4,
                                borderRadius: 3,
                                backgroundColor: 'white',
                                height: '100%',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                            }}
                        >
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: 'text.primary' }}>
                                Contact Information
                            </Typography>

                            <Box sx={{ mb: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                    <Box
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: '50%',
                                            backgroundColor: 'primary.50',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <PhoneIcon sx={{ color: 'primary.main' }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                                            Phone
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            component="a"
                                            href="tel:+917620766266"
                                            sx={{
                                                color: 'primary.main',
                                                fontWeight: 'bold',
                                                textDecoration: 'none',
                                                '&:hover': { textDecoration: 'underline' },
                                            }}
                                        >
                                            +91 7620 766266
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                    <Box
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: '50%',
                                            backgroundColor: '#E8F5E9',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <WhatsAppIcon sx={{ color: '#25D366' }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                                            WhatsApp
                                        </Typography>
                                        <Button
                                            variant="text"
                                            href="https://wa.me/917620766266"
                                            target="_blank"
                                            sx={{
                                                color: '#25D366',
                                                fontWeight: 'bold',
                                                p: 0,
                                                minWidth: 'auto',
                                                '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline' },
                                            }}
                                        >
                                            Chat on WhatsApp
                                        </Button>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Box
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: '50%',
                                            backgroundColor: 'accent.50',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <EmailIcon sx={{ color: 'accent.main' }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                                            Email
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                                            info@modernhomeopathycare.com
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    mt: 4,
                                    p: 3,
                                    borderRadius: 2,
                                    backgroundColor: 'primary.50',
                                }}
                            >
                                <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                                    <strong>Office Hours:</strong>
                                    <br />
                                    Monday - Saturday: 10:00 AM - 8:00 PM
                                    <br />
                                    Sunday: By Appointment Only
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Right side - Form */}
                    <Grid item xs={12} md={7}>
                        <Paper
                            elevation={0}
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                p: 4,
                                borderRadius: 3,
                                backgroundColor: 'white',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        error={!!errors.name}
                                        helperText={errors.name}
                                        required
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Mobile Number"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        error={!!errors.mobile}
                                        helperText={errors.mobile}
                                        required
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="City"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        select
                                        label="Select Concern / Condition"
                                        name="condition"
                                        value={formData.condition}
                                        onChange={handleChange}
                                    >
                                        {conditions.map((condition) => (
                                            <MenuItem key={condition} value={condition}>
                                                {condition}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        select
                                        label="Preferred Consultation Mode"
                                        name="mode"
                                        value={formData.mode}
                                        onChange={handleChange}
                                    >
                                        {consultationModes.map((mode) => (
                                            <MenuItem key={mode} value={mode}>
                                                {mode}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label="Message / Symptoms"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        fullWidth
                                        endIcon={<SendIcon />}
                                        sx={{
                                            backgroundColor: 'primary.main',
                                            '&:hover': { backgroundColor: 'primary.dark' },
                                            borderRadius: '30px',
                                            py: 1.5,
                                            fontSize: '1rem',
                                            fontWeight: 'bold',
                                            boxShadow: '0 4px 12px rgba(0, 189, 163, 0.3)',
                                        }}
                                    >
                                        Submit Appointment Request
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactForm;
