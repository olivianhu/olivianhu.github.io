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
      <div className="px-8 md:px-20 mx-auto py-5">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800 ">
            Olivia Hu
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden min-[950px]:flex space-x-8 items-center">
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

            {/* Social Media Icons */}
            <div className="flex space-x-4 ml-4">
              {/* Email */}
              <a
                href="mailto:huolivia@seas.upenn.edu"
                className="text-[#2a2a2a] hover:text-[#7f1325] transition-colors duration-200"
                title="Email"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/olivianhu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2a2a2a] hover:text-[#7f1325] transition-colors duration-200"
                title="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/olivianhu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2a2a2a] hover:text-[#7f1325] transition-colors duration-200"
                title="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="min-[950px]:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#2a2a2a] hover:text-[#2a2a2a] background-transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="min-[950px]:hidden bg-gray-50 rounded-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'text-[#2a2a2a] bg-gray-200'
                      : 'text-[#2a2a2a] hover:text-[#2a2a2a] hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Social Media Icons for Mobile */}
              <div className="flex justify-center space-x-6 pt-4 pb-2 border-t border-gray-200 mt-4">
                {/* Email */}
                <a
                  href="mailto:olivia.hu@example.com"
                  className="text-[#2a2a2a] hover:text-[#7f1325] transition-colors duration-200"
                  title="Email"
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
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/oliviahu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2a2a2a] hover:text-[#7f1325] transition-colors duration-200"
                  title="GitHub"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/oliviahu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2a2a2a] hover:text-[#7f1325] transition-colors duration-200"
                  title="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
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
      <section className="pt-30 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="px-4 lg:px-16 mx-auto text-right">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-[#2a2a2a] mb-6 ">
            Olivia Hu
          </h1>
          <div className="max-w-sm min-[1200px]:max-w-md min-[1500px]:max-w-xl mx-auto">
            <p className="text-lg md:text-xl text-[#2a2a2a] mb-8 mx-auto">
              Junior at UPenn,
              <br />
              SWE intern at Gusto,
              <br />
              and NYC explorer
              <br />
              <br />
              <span className="text-md md:text-lg">
                Looking for opportunities <br /> to make the world
                <br /> a better place!
              </span>
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
                My Projects
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
    <div className={`min-h-screen`}>
      <section className="pt-30 px-4 sm:px-6 lg:px-8 hidden aboutpagelarge">
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
              src="/me.JPG"
              alt="Olivia Hu"
              className="h-24 md:h-32 lg:h-40 xl:h-155"
            />
          </div>
          <div className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-black absolute top-8 md:top-20 right-16 md:right-32 lg:right-140 z-10 font-bold">
            me!
          </div>
          <img
            src="/arrow.png"
            alt="arrow"
            className="absolute top-4 md:top-7 right-8 md:right-16 lg:right-75 z-10 h-16 md:h-24 lg:h-32 xl:h-80"
          />
          <div className="absolute top-32 md:top-40 right-8 md:right-32 lg:right-130 z-10 w-24 md:w-32 lg:w-40 text-right text-xs md:text-sm lg:text-lg text-black">
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
              src="/food.png"
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
              src="/book.png"
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
            <div className="text-sm">goodreads: @oliviahu</div>
          </div>

          {/* Tyler Image */}
          <div className="absolute -top-12 md:-top-25 left-4 md:left-8 lg:left-30">
            <img
              src="/tyler.png"
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
              src="/ot.JPG"
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

      <section className="pt-30 px-4 block aboutpagesmall">
        <div className="flex gap-2 px-16 mx-auto text-right items-center mb-6 justify-end">
          <h1 className="text-3xl font-bold text-[#2a2a2a]">me!</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="rgb(42, 42, 42)"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </div>

        {/* Personal Images Gallery */}
        <div className="pb-10 grid grid-cols-1 min-[1300px]:grid-cols-2 min-[1300px]:grid-cols-[2fr_1fr] gap-18 px-4 md:px-16">
          {/* Personal Photo */}
          <div className="block min-[1300px]:hidden">
            <img src="/me.JPG" alt="Olivia Hu" className="" />
            <div className="z-10 text-sm md:text-md text-black bg-white opacity-90 p-4">
              <span className="font-bold">some facts that define me</span>
              <ul className="z-10 text-xs md:text-sm text-black">
                <li>home: st louis, mo</li>
                <li>house: port washington, ny</li>
                <li>age: {age} years old</li>
                <li>school: upenn!</li>
                <li>fav holiday: christmas</li>
                <li>
                  fav saying: "every day, in every way, i am getting better and
                  better" this is a book quote from beartown by fredrik backman
                  idk if it counts but i try to live by this
                </li>
                <li>
                  fav games: minecraft, stardew valley, btd6, brawl stars,
                  valorant, civ 6
                </li>
                <li>to the left: more of my favorite things!</li>
              </ul>
            </div>
            <div></div>
          </div>
          <div
            className={`grid grid-cols-1 min-[900px]:grid-cols-2 gap-8 mx-auto transition-opacity duration-2000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Food Image */}
            <div className="">
              <div className="h-[60vh] overflow-hidden">
                <img
                  src="/food.png"
                  alt="Food"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="z-10 text-black bg-white opacity-90 p-4">
                <span className="font-bold text-sm md:text-md lg:text-lg">
                  i love food so much
                </span>{' '}
                <br />
                <ul className="text-xs md:text-sm lg:text-md">
                  <li>
                    favs restaurants: shiro's sushi (sea), mountain house (ny),
                    double knot (phl), dewey's (stl)
                  </li>
                  <li>
                    favs dishes to cook: clay pot rice, stir fry udon, tofu
                    stew, curry + chicken katsu
                  </li>
                  <li>beli: @oliviahu</li>
                </ul>
              </div>
            </div>

            {/* Tyler Image */}
            <div className="">
              <div className="h-[60vh] overflow-hidden">
                <img
                  src="/tyler.png"
                  alt="Tyler"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="z-10 text-black bg-white opacity-90 p-4">
                <span className="font-bold text-sm md:text-md lg:text-lg">
                  music 4 life
                </span>
                <div className="text-xs md:text-sm lg:text-md">
                  <ul>
                    <li>
                      in order: taylor swift, tyler the creator, frank ocean,
                      beabadoobee, steve lacy
                    </li>
                    <li>
                      fav songs rn: sugar on my tongue (tyler), 40% (the army,
                      the navy), ex-factor (lauryn hill), alesis (mk.gee)
                    </li>
                    <li>spotify: @oliviahu2020</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Book Image */}
            <div className="">
              <div className="h-[60vh] overflow-hidden">
                <img
                  src="/book.png"
                  alt="Books"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="z-10 text-black bg-white opacity-90 p-4">
                <span className="font-bold text-sm md:text-md lg:text-lg">
                  reading brings me so much joy and comfort
                </span>
                <br />
                <ul className="text-xs md:text-sm lg:text-md">
                  <li>
                    favs: a man called ove, harry potter, and tomorrow, and
                    tomorrow, and tomorrow
                  </li>
                  <li>
                    currently reading: demon copperhead and evenings & weekends
                  </li>
                  <li>goodreads: @oliviahu</li>
                </ul>
              </div>
            </div>

            {/* OT Image */}
            <div className="">
              <div className="h-[60vh] overflow-hidden">
                <img
                  src="/ot.JPG"
                  alt="OT"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="z-10 text-xs md:text-sm lg:text-md text-black bg-white opacity-90 p-4">
                <span className="font-bold text-sm md:text-md lg:text-lg">
                  my lovely communities!
                </span>
                <br />
                all my love to ot, 160, spark, and labs!! the most kind,
                inspirational, and splendidly brilliant people i've ever met
              </div>
            </div>
          </div>

          {/* Personal Photo */}
          <div className="hidden min-[1300px]:block">
            <img src="/me.JPG" alt="Olivia Hu" className="" />
            <div className="z-10 text-sm md:text-md lg:text-lg text-black bg-white opacity-90 p-4">
              <span className="font-bold">some facts that define me</span>
              <ul className="z-10 text-xs md:text-sm lg:text-md text-black">
                <li>home: st louis, mo</li>
                <li>house: port washington, ny</li>
                <li>age: {age} years old</li>
                <li>school: upenn!</li>
                <li>fav holiday: christmas</li>
                <li>
                  fav saying: "every day, in every way, i am getting better and
                  better" this is a book quote from beartown by fredrik backman
                  idk if it counts but i try to live by this
                </li>
                <li>
                  fav games: minecraft, stardew valley, btd6, brawl stars,
                  valorant, civ 6
                </li>
                <li>to the left: more of my favorite things!</li>
              </ul>
            </div>
            <div></div>
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
      title: 'Align',
      description:
        'A full-stack web application designed to help users track availability and coordinate schedules efficiently. Features include user authentication, creating and managing events, marking priority or preferred time slots, and visualizing availability across participants.',
      technologies: ['React + Vite', 'Node.js', 'Express', 'Supabase'],
      image: '/align.png',
      liveDemo:
        'https://docs.google.com/presentation/d/1-yzxukPTdmTA5stL-u5hwPdLSDyREvQmADc8eb2KRpo/preview?rm=minimal&slide=id.g356b7b74dce_12_213',
      github: 'https://github.com/olivianhu/Align',
    },
    {
      id: 2,
      title: 'Penn OS',
      description:
        'A UNIX-like, user-level operating system with a FAT-based filesystem, a kernel, and a task scheduler. Features a command-line shell with job control, foreground and background job execution, built-in shell functions, and signal handling.',
      technologies: ['C'],
      image: '/pennos.png',
    },
    {
      id: 3,
      title: 'Penn Course Plan',
      description:
        'A course planning web app designed to help Penn students organize their class schedules. Implemented a breaks feature that allows students to input and visualize breaks within their weekly timetable, improving schedule customization and balance. ',
      technologies: ['React', 'Typescript', 'Redux'],
      image: '/penncourseplan.png',
      liveDemo: 'https://penncourseplan.com/',
      github: 'https://github.com/pennlabs/penn-courses',
    },
    {
      id: 4,
      title: 'Airbnb Clone',
      description:
        'A full-stack rental platform built with React, Node.js, and MongoDB. Features include user authentication, property listings with images and descriptions, and booking functionality. The app focuses on core rental workflows to provide a smooth experience for both hosts and guests.',
      technologies: ['React + Vite', 'Node.js', 'MongoDB'],
      image: '/airbnb clone.png',
      liveDemo: 'https://www.youtube.com/watch?v=hKyWRI0RIps',
      github: 'https://github.com/olivianhu/Airbnb-clone',
    },
    {
      id: 5,
      title: 'Minesweeper',
      description:
        'A Minesweeper game built with an interactive GUI and support for file I/O operations. Players can reveal cells, flag mines, and track progress in real time. The game includes functionality to save and load game states, allowing users to pause and resume play at any time.',
      technologies: ['Java Swing', 'JUnit', 'File I/O'],
      image: '/minesweeper.png',
      liveDemo:
        'https://github.com/user-attachments/assets/db55590a-af5a-4977-9e44-d5ad2c68758a',
      github: 'https://github.com/olivianhu/Minesweeper',
    },
    {
      id: 6,
      title: 'Bank Account Fraud Models',
      description:
        'A fraud detection project analyzing 1,000,000 bank accounts to identify indicators of fraudulent activity. Conducted extensive EDA and trained models with 73.9% recall, optimizing for high fraud catch rates. Used techniques such as downsampling, SMOTE, and class weight tuning to address class imbalance.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'PyTorch'],
      image: '/bankfraudmodels.png',
    },
  ];

  const creative = [
    {
      id: 1,
      title: 'Running On Empty',
      image: '/burnout spread.png',
      date: 'fall 2021',
    },
    {
      id: 2,
      title: 'Looking at Lunar',
      image: '/lunar spread.png',
      date: 'spring 2022',
    },
    {
      id: 3,
      title: 'Month of Madness',
      image: '/march spread.png',
      date: 'spring 2022',
    },
    {
      id: 4,
      title: 'Slang searching',
      image: '/slang spread.png',
      date: 'Fall 2022',
    },
    {
      id: 5,
      title: 'Truth Behind the Melting Pot',
      image: '/immigration back.png',
      date: 'spring 2023',
    },
    {
      id: 6,
      title: 'The Home Issue',
      image: '/home cover.jpg',
      date: 'spring 2023',
    },
    {
      id: 7,
      title: 'America’s Architecture',
      image: '/house back.png',
      date: 'spring 2023',
    },
    {
      id: 8,
      title: 'The Girl With the Chestnut Hair',
      image: '/lit mag.png',
      date: 'spring 2023',
    },
    {
      id: 9,
      title: 'Copy',
      image: '/art_copy.png',
      date: 'spring 2024',
    },
    {
      id: 10,
      title: 'Camera Roll',
      image: '/camera_roll.png',
      date: 'spring 2024',
    },
    {
      id: 11,
      title: 'Tyler',
      image: '/celebrity.png',
      date: 'spring 2024',
    },
    {
      id: 12,
      title: 'Godly Bodies and Ungodly Expectations',
      image: '/WALK spread.png',
      date: 'fall 2024',
    },
    {
      id: 13,
      title: 'Foundation Poster #1',
      image: '/poster 1.png',
      date: 'spring 2025',
    },
    {
      id: 14,
      title: 'Foundation Poster #2',
      image: '/poster 2.png',
      date: 'spring 2025',
    },
    {
      id: 15,
      title: 'Foundation Poster #3',
      image: '/poster 3.png',
      date: 'spring 2025',
    },
    {
      id: 16,
      title: 'Exhibition Poster',
      image: '/exhibition poster.png',
      date: 'spring 2025',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
            My Projects
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {projects.map(project => (
              <div
                key={project.id}
                className="bg-white opacity-90 overflow-hidden"
              >
                <div className="bg-gray-200 h-52 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-4">
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
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        className="text-gray-900 hover:text-gray-800 font-medium"
                      >
                        <span className="underline">Live Demo</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="text-gray-900 hover:text-gray-800 font-medium"
                      >
                        <span className="underline">GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-40">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
            Creative!!
          </h1>

          <div className="hidden min-[1000px]:flex bg-white/50 p-16 rounded-2xl">
            <div className="flex">
              <div className="mr-16">
                {creative
                  .filter((_, i) => i % 2 === 0)
                  .map(art => (
                    <div key={art.id} className="overflow-hidden mb-8">
                      <div className="bg-gray-200 flex items-center justify-center">
                        <img
                          src={art.image}
                          alt={art.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="text-center mt-2">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {art.title} ({art.date})
                        </h3>
                      </div>
                    </div>
                  ))}
              </div>
              <div>
                {creative
                  .filter((_, i) => i % 2 === 1)
                  .map(art => (
                    <div key={art.id} className="overflow-hidden mb-16">
                      <div className="bg-gray-200 flex items-center justify-center">
                        <img
                          src={art.image}
                          alt={art.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="text-center mt-2">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {art.title} ({art.date})
                        </h3>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="flex min-[1000px]:hidden bg-white/50 p-4 rounded-2xl">
            <div className="flex">
              <div className="">
                {creative.map(art => (
                  <div key={art.id} className="overflow-hidden mb-12">
                    <div className="bg-gray-200 flex items-center justify-center">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="text-center mt-2">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {art.title} ({art.date})
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
      image: '/gusto.png',
      company: 'Gusto',
      position: 'Software Engineering Intern',
      duration: 'Summer 2025',
      location: 'New York, NY',
      description: [
        'Spearheaded the full-stack development of the Insurance Hub, the first centralized dashboard for Business Insurance within Gusto’s platform',
        'Contributed to service-to-service communication logic and ensured backward compatibility during backend changes',
        'Designed and implemented new API endpoints across multiple codebases, enabling seamless policy data retrieval',
      ],
      technologies: ['React', 'Typescript', 'Ruby on Rails', 'Git'],
    },
    {
      id: 2,
      image: '/upenn.png',
      company: 'University of Pennsylvania',
      position: 'Teaching Assistant - CIS 1210 (previously CIS 1600)',
      duration: 'spring 2024 - Present',
      location: 'Philadelphia, PA',
      description: [
        'Assist in teaching data structures and algorithms for 300+ students',
        'Acted as rubrics committee head for 10 members, delegating tasks and taking responsibility for rubric quality',
        'Lead recitation for 16 students, reviewing and teaching concepts to aid students’ understanding',
      ],
      technologies: [
        'Java',
        'Data Structures & Algorithms',
        'Discrete Math',
        'Teaching',
        'Mentoring',
      ],
    },
    {
      id: 3,
      image: '/perelman.png',
      company: 'University of Pennsylvania Perelman School of Medicine',
      position: 'Undergraduate Researcher (Cheng Lab)',
      duration: 'Summer 2024',
      location: 'Philadelphia, PA',
      description: [
        'Conduct computational analysis of multi-omics data to identify genes involved in neurodegeneration and regenerative failure within the eye',
        'Develop and maintain a data preprocessing and visualization pipeline to streamline analysis of large-scale single-cell datasets',
        'Utilize ScanPy to perform dimensionality reduction, clustering, and cell-type annotation, learning the tool from scratch and adapting it to lab-specific needs',
      ],
      technologies: ['Python', 'NumPy', 'ScanPy', 'Linux', 'R'],
    },
  ];

  const educations = [
    {
      id: 1,
      image: '/upenn.png',
      school: 'University of Pennsylvania',
      duration: 'August 2023 - May 2027',
      degree: 'Bachelor of Science in Engineering (BSE) in Computer Science',
      location: 'Philadelphia, PA',
      concentration: 'Artificial Intelligence',
      minor: 'Mathematics',
      gpa: '4.0/4.0',
      activities: [
        'Penn Spark',
        'Penn Labs',
        'Theta Tau',
        'Women in CS (Education Committee)',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
            Experience
          </h1>

          <div className="space-y-8">
            {experiences.map(experience => (
              <div key={experience.id} className="bg-white opacity-90 p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 flex items-center justify-center hidden sm:block">
                      <img
                        src={experience.image}
                        className="w-full h-full object-cover object-center "
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {experience.position}
                      </h3>
                      <p className="text-lg text-gray-600 font-medium">
                        {experience.company}
                      </p>
                    </div>
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
                      <span className="text-gray-600 mr-2"> </span>
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
          <h1 className="text-5xl font-bold text-center text-gray-900 my-12">
            Education
          </h1>
          <div className="space-y-8">
            {educations.map(education => (
              <div key={education.id} className="bg-white opacity-90 p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 flex items-center justify-center hidden sm:block">
                      <img
                        src={education.image}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {education.school}
                      </h3>
                      <p className="text-lg text-gray-600 font-medium">
                        {education.degree}
                      </p>
                    </div>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-600">{education.duration}</p>
                    <p className="text-sm text-gray-500">
                      {education.location}
                    </p>
                  </div>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-600">
                      <span className="ml-2">
                        Concentration: {education.concentration}, Minor:{' '}
                        {education.minor}
                      </span>
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="ml-2">GPA: {education.gpa}</span>
                    </li>
                    <li className="flex items-start text-gray-600">
                      <span className="ml-2">
                        Activties: {education.activities.join(', ')}
                      </span>
                    </li>
                  </ul>
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
              data="/Olivia_s_Resume.pdf"
              type="application/pdf"
              className="w-full h-screen"
            >
              <p className="p-10">
                Your browser does not support PDFs.{' '}
                <a
                  href="/Olivia_s_Resume.pdf"
                  target="_blank"
                  className="text-[#7f1325]"
                >
                  <span className="underline">
                    Click here to download the PDF
                  </span>
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
