import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const CUSTOM_LINKS = [
    {
        title: "GitHub",
        url: "https://github.com/jfloristo",
        icon: FaGithub,
        color: "hover:text-gray-400"
    },
    {
        title: "LinkedIn",
        url: "https://linkedin.com/in/johnivanloristo", // Please update with correct URL
        icon: FaLinkedin,
        color: "hover:text-blue-500"
    },
    {
        title: "Email",
        url: "mailto:your.email@example.com", // Please update with correct email
        icon: FaEnvelope,
        color: "hover:text-red-400"
    }
];
