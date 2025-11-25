import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutDoctor from './components/AboutDoctor';
import ConditionsGrid from './components/ConditionsGrid';
import ApproachSection from './components/ApproachSection';
import StatsBand from './components/StatsBand';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import ContactForm from './components/ContactForm';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

// Create custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#00bda3',
            light: '#4dd1bf',
            dark: '#009877',
            50: '#e0f7f4',
            100: '#b3ebe3',
            200: '#80ded1',
            700: '#00ae91',
        },
        accent: {
            main: '#2196f3',
            light: '#64b5f6',
            dark: '#1976d2',
            50: '#e3f2fd',
            200: '#90caf9',
        },
        text: {
            primary: '#1a202c',
            secondary: '#718096',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <Header />
                <Hero />
                <AboutDoctor />
                <ConditionsGrid />
                <ApproachSection />
                <StatsBand />
                <Testimonials />
                <Locations />
                <ContactForm />
                <FAQSection />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
