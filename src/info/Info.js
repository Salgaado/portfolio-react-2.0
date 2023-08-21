import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0, 201, 255)", "rgb(146, 254, 157)"];

export const info = {
    firstName: "Daniel ",
    lastName: "Salgado",
    initials: "dS", 
    position: "a Front-End Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '✝️',
            text: 'PWRD by Jesus'
        },
        {
            emoji: '🌎',
            text: 'Made in Brazil'
        },
        {
            emoji: "💼",
            text: "Front-End Dev at Astron Ecom"
        },
        {
            emoji: "📧",
            text: "dansalgaado@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/daniel_saalgado/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Salgaado",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/daniel-salgado-12831a1a6/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
        
    ],
    bio: "Hello! I'm Daniel. I'm a Front-End Developer at Astron Ecom. I like to watch movies and play games in my spare time and I believe that technology can help much more than harm. You should hire me!",
         
    skills:
        {
            proficientWith: ['javascript', 'react', 'Vue', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs',]
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'Games',
            emoji: '🎮'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'Workout',
            emoji: '🏋🏻‍♂️'
        }

    ],
    portfolio: [ 
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", 
            source: "https://github.com/paytonjewell", 
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}