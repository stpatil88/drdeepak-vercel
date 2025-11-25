import FavoriteIcon from '@mui/icons-material/Favorite';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import SpaIcon from '@mui/icons-material/Spa';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const conditions = [
    {
        id: 1,
        name: 'Infertility',
        description: 'Holistic treatment for male and female infertility with personalized modern homoeopathic remedies.',
        icon: PregnantWomanIcon,
    },
    {
        id: 2,
        name: 'Thyroid Disorders',
        description: 'Effective management of hypothyroidism, hyperthyroidism, and thyroid nodules with minimal side effects.',
        icon: MonitorHeartIcon,
    },
    {
        id: 3,
        name: 'Rheumatoid Arthritis & Joint Disorders',
        description: 'Relief from chronic joint pain, inflammation, and stiffness through targeted homoeopathic care.',
        icon: AccessibilityNewIcon,
    },
    {
        id: 4,
        name: 'Chronic Skin Diseases',
        description: 'Treatment for psoriasis, eczema, acne, vitiligo, and other persistent skin conditions.',
        icon: SpaIcon,
    },
    {
        id: 5,
        name: 'Lifestyle & Metabolic Disorders',
        description: 'Management of diabetes, obesity, hypertension, and other lifestyle-related health issues.',
        icon: FavoriteIcon,
    },
    {
        id: 6,
        name: 'Supportive Care in Cancer',
        description: 'Complementary homoeopathic support to improve quality of life during cancer treatment.',
        icon: HealthAndSafetyIcon,
    },
];

export default conditions;
