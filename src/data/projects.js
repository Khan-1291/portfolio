
export const featuredProjects = [
  {
    id: 'featured-1',
    name: 'E-Commerce Dashboard',
    description: 'A full-stack e-commerce admin dashboard with real-time analytics, inventory management, and order tracking. Built with MERN stack and Socket.io for live updates.',
    image: '/projects/nextjs.png', // Add screenshot to public/projects/
    techStack: ['Next.js' , 'Tailwind CSS'],
    githubUrl: 'https://github.com/Khan-1291/Nextjs',
    liveUrl: 'https://nextjs-zeta-ten-91.vercel.app/',
    featured: true,
  },
  {
    id: 'featured-2',
    name: 'Student Fee Manger',
    description: 'A sophisticated student fee manger, open source project. You can add students, manage their fees. you can track Total collection and total dues also.. cheack out the live demo. custamization avalable.',
    image: '/projects/spfeemanger.png',
    techStack: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/Khan-1291/studentfeemanger',
    liveUrl: 'https://github.com/Khan-1291/studentfeemanger',
    featured: false,
  },
  {
    id: 'featured-3',
    name: 'ViraBank',
    description: 'A comprehensive banking application featuring real-time transaction monitoring, advanced analytics, and secure user authentication. Built with React and modern design principles.',
    image: '/projects/spbank.png',
    techStack: ['JavaScript', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/Khan-1291/ViraBank',
    liveUrl: 'https://github.com/Khan-1291/ViraBank',
    featured: true,
  },
  {
    id: 'featured-4',
    name: 'Weather App',
    description: 'Real-time weather application with location-based forecasts, interactive maps, and 7-day weather predictions using OpenWeatherMap API.',
    image: '/projects/spweather.png',
    techStack: ['React', 'OpenWeatherMap API', 'Tailwind CSS', 'Chart.js'],
    githubUrl: 'https://github.com/Khan-1291/weathercast',
    liveUrl: 'https://khan-1291.github.io/weatherCastW/',
    featured: true,
  },
  {
    id: 'featured-5',
    name: 'Blog Platform',
    description: 'Full-featured blogging platform with markdown support, comments, likes, and user authentication. Includes rich text editor and SEO optimization.',
    image: '/projects/postify.png',
    techStack: ['Next.js', 'MongoDB', 'NextAuth.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Khan-1291/postify',
    liveUrl: 'https://mypostify.netlify.app/',
    featured: true,
  },
  {

id: 'featured-6',
    name: 'Custom Video Player',
    description: 'A custom-built video player with advanced controls, playlist support, subtitle handling, and responsive design for optimal viewing experience.',
    image: '/projects/spvideo.png',
    techStack: [  'JavaScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Khan-1291/videoPlyer',
    liveUrl: 'https://khan-1291.github.io/videoPlyer/',
    featured: false,

  }
];

// Projects to exclude from GitHub fetch (already featured above)
export const excludeRepos = [
  // Your portfolio repo
  'E-Commerce Dashboard',
  'Student Fee Manger',
   'ViraBank',
   'Weather App',
   'Blog Platform',
   'Custom Video Player'

 

];