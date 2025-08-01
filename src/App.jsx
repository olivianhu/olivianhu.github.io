import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';

// Navigation Component
function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/resume', label: 'Resume' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="px-10 mx-auto">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800 ">
            Olivia Hu
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-[#2a2a2a] font-medium'
                    : 'text-[#2a2a2a] hover:text-[#2a2a2a]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#2a2a2a] hover:text-[#2a2a2a]"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'text-[#2a2a2a] bg-[#2a2a2a]'
                      : 'text-[#2a2a2a] hover:text-[#2a2a2a] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Home Page Component
function HomePage() {
  return (
    <div className="min-h-screen homepage">
      <section className="pt-30 pb-16 px-4 sm:px-6 lg:px-8 hidden">
        <div className="px-16 mx-auto text-right">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#2a2a2a] mb-6 ">
            Olivia Hu
          </h1>
          <div className="max-w-xl mx-auto my-60">
            <p className="text-lg md:text-xl text-[#2a2a2a] mb-8 mx-auto hidden">
              Junior at UPenn,
              <br />
              SWE intern at Gusto,
              <br />
              and NYC explorer
            </p>
            <Link
              to="/about"
              className="text-[#2a2a2a] hover:text-[#7f1325] mr-4"
            >
              <p className="text-lg underline inline-block hover:no-underline">
                About Me
              </p>
            </Link>
            <Link
              to="/projects"
              className="text-[#2a2a2a] hover:text-[#7f1325]"
            >
              <p className="text-lg underline inline-block hover:no-underline">
                My Work
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// About Me Page Component
function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade in animation when component mounts
    setIsVisible(true);
  }, []);

  // Function to calculate age
  const calculateAge = birthDate => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  const age = calculateAge('2005-10-08');

  return (
    <div className={`min-h-screen aboutpage`}>
      <section className="pt-30 px-4 sm:px-6 lg:px-8 hidden">
        <div className="px-4 md:px-16 mx-auto text-right">
          <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-[#2a2a2a]">
            Olivia Hu
          </h1>
        </div>

        {/* Personal Images Gallery */}
        <div
          className={`px-4 md:px-16 mx-auto relative transition-opacity duration-2000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Personal Photo */}
          <div className="absolute top-4 md:top-7 right-4 md:right-20">
            <img
              src="/src/assets/me.JPG"
              alt="Olivia Hu"
              className="h-24 md:h-32 lg:h-40 xl:h-155"
            />
          </div>
          <div className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-black absolute top-8 md:top-20 right-16 md:right-32 lg:right-140 z-10 font-bold">
            me!
          </div>
          <img
            src="/src/assets/arrow.png"
            alt="arrow"
            className="absolute top-4 md:top-7 right-8 md:right-16 lg:right-75 z-10 h-16 md:h-24 lg:h-32 xl:h-80"
          />
          <div className="absolute top-32 md:top-60 right-8 md:right-32 lg:right-130 z-10 w-24 md:w-32 lg:w-40 text-right text-xs md:text-sm lg:text-lg text-black">
            some facts that define me
          </div>
          <ul className="absolute top-40 md:top-80 right-8 md:right-32 lg:right-130 z-10 w-24 md:w-40 lg:w-50 text-xs md:text-sm text-black">
            <li>home: st louis, mo</li>
            <li>house: port washington, ny</li>
            <li>age: {age} years old</li>
            <li>fav games: sdv, btd6, brawl stars, valo</li>
            <li>to the left: more of my favorite things!</li>
          </ul>

          {/* Food Image */}
          <div className="absolute top-48 md:top-82 left-4 md:left-8 lg:left-35">
            <img
              src="/src/assets/food.png"
              alt="Food"
              className="h-16 md:h-24 lg:h-32 xl:h-80"
            />
          </div>
          <div className="absolute top-48 md:top-82 left-20 md:left-24 lg:left-110 z-10 w-20 md:w-28 lg:w-35 text-xs md:text-sm text-black">
            i love food so much <br /> <br />
            <div className="text-xs">
              favs restaurants:
              <ul className="text-xs">
                <li>shiro's sushi (sea)</li>
                <li>mountain house (ny)</li>
                <li>double knot (phl)</li>
                <li>dewey's (stl)</li>
              </ul>
            </div>{' '}
            <br />
            <div className="text-xs">
              favs dishes to cook:
              <ul className="text-xs">
                <li>clay pot rice</li>
                <li>stir fry udon</li>
                <li>tofu stew</li>
                <li>curry + chicken katsu</li>
              </ul>
            </div>
            <br /> beli: @oliviahu
          </div>

          {/* Book Image */}
          <div className="absolute -top-4 md:-top-8 left-16 md:left-24 lg:left-130">
            <img
              src="/src/assets/book.png"
              alt="Books"
              className="h-12 md:h-16 lg:h-20 xl:h-70"
            />
          </div>

          <div className="absolute -top-16 md:-top-35 left-16 md:left-24 lg:left-130 z-10 text-xs md:text-sm w-20 md:w-32 lg:w-95 text-black">
            reading brings me so much joy and comfort <br /> <br />
            <div className="text-xs">
              favs: tomorrow, and tomorrow, and tomorrow and a man called ove{' '}
              <br />
              currently reading: demon copperhead and evenings & weekends <br />
            </div>
            <div className='text-sm'>goodreads: @oliviahu</div>
          </div>

          {/* Tyler Image */}
          <div className="absolute -top-12 md:-top-25 left-4 md:left-8 lg:left-30">
            <img
              src="/src/assets/tyler.png"
              alt="Tyler"
              className="h-16 md:h-20 lg:h-24 xl:h-100"
            />
          </div>
          <div className="absolute -top-16 md:-top-35 left-4 md:left-8 lg:left-30 z-10 text-xs md:text-sm w-20 md:w-32 lg:w-95 text-black">
            music 4 life
            <div className="text-xs">
              in order: taylor swift, tyler, frank, bea, steve
            </div>
          </div>
          <div className="absolute top-8 md:top-15 left-12 md:left-16 lg:left-70 z-10 text-xs rotate-90 text-black">
            fav songs rn: sugar on my tongue, 40%, ex-factor, alesis
          </div>

          {/* OT Image */}
          <div className="absolute top-48 md:top-82 left-20 md:left-24 lg:left-150">
            <img
              src="/src/assets/ot.JPG"
              alt="OT"
              className="h-16 md:h-24 lg:h-32 xl:h-80"
            />
          </div>
          <div className="absolute top-44 md:top-75 left-24 md:left-28 lg:left-176 text-xs md:text-sm text-black w-16 md:w-24 lg:w-40">
            my lovely communities!
          </div>
          <div className="absolute top-56 md:top-120 left-28 md:left-32 lg:left-182 text-black rotate-90 text-xs">
            high chance u can find me with ot, 160, spark, or labs
          </div>
        </div>
      </section>
    </div>
  );
}

// Projects Page Component
function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'Project Screenshot',
      liveDemo: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image: 'Project Screenshot',
      liveDemo: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description:
        'An interactive dashboard for visualizing complex datasets with customizable charts and real-time data updates.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'D3.js'],
      image: 'Project Screenshot',
      liveDemo: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description:
        'A tool for analyzing social media metrics and generating insights with automated reporting and trend analysis.',
      technologies: ['Python', 'Flask', 'AWS', 'Pandas'],
      image: 'Project Screenshot',
      liveDemo: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Weather App',
      description:
        'A weather application with location-based forecasts, weather alerts, and beautiful UI design.',
      technologies: ['React', 'OpenWeather API', 'Tailwind CSS'],
      image: 'Project Screenshot',
      liveDemo: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description:
        'A responsive personal portfolio website showcasing projects, skills, and professional experience.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      image: 'Project Screenshot',
      liveDemo: '#',
      github: '#',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
            My Projects
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <p className="text-gray-500">{project.image}</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveDemo}
                      className="text-gray-600 hover:text-gray-800 font-medium"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="text-gray-600 hover:text-gray-800 font-medium"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Experience Page Component
function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      company: 'Gusto',
      position: 'Software Engineering Intern',
      duration: 'Summer 2024',
      location: 'San Francisco, CA',
      description: [
        'Developed and maintained full-stack web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Participated in code reviews and contributed to team best practices',
        'Worked on improving application performance and user experience',
      ],
      technologies: ['React', 'Node.js', 'JavaScript', 'Git'],
    },
    {
      id: 2,
      company: 'University of Pennsylvania',
      position: 'Teaching Assistant - CS 1100',
      duration: 'Fall 2023 - Spring 2024',
      location: 'Philadelphia, PA',
      description: [
        'Led weekly recitation sessions for 30+ students in introductory computer science',
        'Graded assignments and provided constructive feedback to students',
        'Held office hours to help students with programming concepts and debugging',
        'Assisted in developing course materials and practice problems',
      ],
      technologies: ['Python', 'Java', 'Teaching', 'Mentoring'],
    },
    {
      id: 3,
      company: 'Tech Startup (Previous)',
      position: 'Frontend Developer Intern',
      duration: 'Summer 2023',
      location: 'New York, NY',
      description: [
        'Built responsive user interfaces using React and modern CSS frameworks',
        'Implemented new features and fixed bugs in existing applications',
        'Worked closely with designers to ensure pixel-perfect implementations',
        'Optimized application performance and improved loading times',
      ],
      technologies: ['React', 'TypeScript', 'CSS', 'Git'],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Work Experience
          </h1>

          <div className="space-y-8">
            {experiences.map(experience => (
              <div
                key={experience.id}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {experience.position}
                    </h3>
                    <p className="text-xl text-gray-600 font-medium">
                      {experience.company}
                    </p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-600">{experience.duration}</p>
                    <p className="text-sm text-gray-500">
                      {experience.location}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {experience.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Resume Page Component
function ResumePage() {
  return (
    <div className="min-h-screen">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-[#2a2a2a] mb-12">
            Resume
          </h1>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <object
              data="/src/assets/Olivia_s_Resume.pdf"
              type="application/pdf"
              className="w-full h-screen"
            >
              <p>
                Your browser does not support PDFs.{' '}
                <a href="/src/assets/Olivia_s_Resume.pdf" target="_blank">
                  Click here to download the PDF
                </a>
                .
              </p>
            </object>
          </div>
        </div>
      </section>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
