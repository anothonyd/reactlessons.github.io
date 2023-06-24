export const COURSE_DETAILS = [
    {
        title: 'Vue',
        date: '4/5/2022',
    },
    {
        title: 'React',
        date: '5/10/2022',
    },
    {
        title: 'Angular',
        date: '6/15/2022',
    },
    {
        title: 'JavaScript',
        date: '7/20/2022',
    },
];

export const BOOK_DETAILS = [
    {
        title: 'React Learning',
        bookId: 670,
    },
    {
        title: 'JavaScript Basics',
        bookId: 123,
    },
    {
        title: 'Python Cookbook',
        bookId: 456,
    },
    {
        title: 'CSS Mastery',
        bookId: 789,
    },
];

export const BLOG_DETAILS = [
    {
        title: 'Next.js Learning',
        author: 'Stephen Chua',
        intro: 'Welcome to learning Next.js.',
    },
    {
        title: 'Frontend Development Tips',
        author: 'Emily Johnson',
        intro: 'Improve your frontend development skills with these tips.',
    },
    {
        title: 'Introduction to GraphQL',
        author: 'Michael Smith',
        intro: 'Learn the basics of GraphQL and its benefits.',
    },
    {
        title: 'Mastering CSS Flexbox',
        author: 'Sarah Thompson',
        intro: 'Take your CSS layout skills to the next level with Flexbox.',
    },
];

export const countryList = [
    'London',
    'Paris',
    'New York',
    'Sydney',
    'Tokyo',
    'Berlin',
    'Rome',
    'Amsterdam',
    'Moscow',
    'Cairo',
    'Dubai',
    'Philippines'
];


export const getWeatherIcon = (conditionCode) => {
    switch (conditionCode) {
        case 1000:
            return '☀️'; // Clear
        case 1003:
            return '🌤️'; // Partly cloudy
        case 1006:
            return '☁️'; // Cloudy
        case 1009:
            return '🌦️'; // Overcast
        case 1030:
            return '🌫️'; // Mist
        case 1063:
        case 1180:
        case 1183:
            return '🌦️'; // Patchy rain possible
        case 1066:
        case 1114:
            return '🌨️'; // Snow
        case 1087:
            return '⛈️'; // Thunderstorm
        case 1135:
        case 1147:
            return '🌫️'; // Fog
        default:
            return '❓'; // Unknown condition
    }
};