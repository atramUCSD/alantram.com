import one from '../assets/png/caps-brochure.jpg';
import two from '../assets/png/Recode-Logo.png';
import three from '../assets/png/sony/Sony-logo.png';
import four from '../assets/svg/Restaurant-Thumbnail.svg';
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/png/cdc/GDITxCDC.jpg'
import eight from '../assets/png/Paper-Thumbnail-2.png'

// ... (other imports)

const projectImages = [one, two, three, four, five, six, seven];

export const projectsData = [
    {
        id: 1,
        projectName: 'GDIT ServiceNow Implementation',
        projectDesc: 'Solving IT Challenges with Human-Centered Design. Focused on Customer Success Journey Mapping, Rapid Prototyping, and User Testing.',
        // ... (other properties)
        image: projectImages[6],
        code: null,
        demo: 'https://www.figma.com/proto/vevWmww7BSk4bPvXA7Tm3W/Employee-Center-Pro-V5-Demo?page-id=0%3A1&node-id=8-56&p=f&viewport=305%2C375%2C0.06&t=6V68bClPOL4Ne24m-1&scaling=min-zoom&content-scaling=fixed',
        casestudy: '#/cdc'
    },
    {
        id: 2,
        projectName: 'Sony Pathways Program',
        projectDesc: "I worked with a team of 3 other students to mock a prototype for a new TV remote that would be seen by Sony employees.",
        // ... (other properties)
        image: projectImages[2],
        code: null,
        demo: 'https://docs.google.com/presentation/d/1UUlGkBNYeRQN5X7cGvU7_KteP1yDBg9G/edit?usp=sharing&ouid=113733715422948884241&rtpof=true&sd=true',
        casestudy: '/Sony'
    },
        {
        id: 3,
        projectName: 'ReCODE Health',
        projectDesc: 'First project within a research organization, involving mockups, user testing, and my first React scripting experience.',
        // ... (other properties)
        image: projectImages[1],
        code: null,
        demo: 'https://core.recode.health/',
        casestudy: 'https://atramucsd.github.io/My-Website/#/ReCODE'
    },
        {
        id: 4,
        projectName: 'Published User Experience Research Paper',
        projectDesc: 'Conducted human-centered design workshops with students to better understand their experiences, concerns, and generate ideas for digital solutions to support their social challenges during and beyond COVID-19.',
        code: null,
        demo: 'https://docs.google.com/document/d/1H8_BKo_SUy3bjAfmMlR8n_rVwMgPK_KN/edit?usp=sharing&ouid=110861846231668704638&rtpof=true&sd=true',
        casestudy: 'https://docs.google.com/presentation/d/1thGmq7h7o1l3k52ExufhPHOBLeK587d7/edit?usp=sharing&ouid=110861846231668704638&rtpof=true&sd=true',
        image: eight
    },
    {
        id: 5,
        projectName: 'CAPS Redesign',
        projectDesc: 'I sought to redesign the CAPS website to make it more user friendly and accessible. My first attempt at a full-scale test of my skillset',
        // ... (other properties)
        image: projectImages[0],
        code: 'https://github.com/atramUCSD/Caps-Redesign',
        demo: 'https://docs.google.com/presentation/d/1Pxw35BA8hgsbZuPrbPVsjZN-BLxXD1hJ1nwutYTi9x4/edit?usp=sharing',
        casestudy: 'https://atramucsd.github.io/My-Website/#/CAPS_Redesign'
    },
    {
        id: 6,
        projectName: 'Restaurant Website Redesign | Casestudy under development',
        projectDesc: 'I created a website for my family restaurant using React, multiple CSS libraries, Photoshop, and Figma.',
        tags: ['Flutter', 'Firebase'],
        code: 'https://github.com/atramUCSD/photrucxanh-2022-website',
        demo: 'https://atramucsd.github.io/photrucxanh-2022-website/',
        casestudy: null,
        image: four
    }
    /* 
    {
        id: 6,
        projectName: 'Uber Lite',
        projectDesc: 'Uber clone',
        tags: ['Flutter'],
        code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: six
    },
    {
        id: 7,
        projectName: 'Stock Market App',
        projectDesc: 'A simple stock market API app',
        tags: ['React', 'Redux', 'Bootstrap'],
        code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: seven
    },
    {
        id: 8,
        projectName: 'Car Pooling System',
        projectDesc: 'The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution',
        tags: ['Flutter', 'React'],
        code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: eight
    },
*/
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/