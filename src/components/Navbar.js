import React, { useState, useEffect } from 'react';
import { Home, Menu, X, Building, ChartLine, Lightbulb, Shield } from 'lucide-react';

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [atTop, setAtTop] = useState(true);
    const [activeItem, setActiveItem] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const ListItems = [
        {
            icon: <Home className="w-5 h-5" />,
            text: 'Home',
            id: 'home',
            color: 'from-blue-400 to-blue-600'
        },
        {
            icon: <Building className="w-5 h-5" />,
            text: 'Smart City',
            id: 'smart-city',
            color: 'from-emerald-400 to-emerald-600'
        },
        {
            icon: <ChartLine className="w-5 h-5" />,
            text: 'Impact',
            id: 'impact',
            color: 'from-purple-400 to-purple-600'
        },
        {
            icon: <Shield className="w-5 h-5" />,
            text: 'Challenges',
            id: 'challenges',
            color: 'from-red-400 to-red-600'
        },
        {
            icon: <Lightbulb className="w-5 h-5" />,
            text: 'Future Prospect',
            id: 'future',
            color: 'from-amber-400 to-amber-600'
        }
    ];


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setAtTop(currentScrollPos < 10);
            setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);

            // Update active section based on scroll position
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionBottom = sectionTop + section.offsetHeight;
                if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
                    setActiveItem(section.id);
                }
            });
        };

       window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

     // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
    
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
    
        // Smooth scroll function
        const scrollToSection = (id) => {
            const element = document.getElementById(id);
            if (element) {
                // Getting the element's position relative to the viewport
                const elementPosition = element.getBoundingClientRect().top;
                // Adding current scroll position to get the absolute position
                const offsetPosition = elementPosition + window.pageYOffset;
    
                window.scrollTo({
                    top: offsetPosition - 80, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
            setIsMenuOpen(false);
        };

    return (
        <nav className={`fixed top-0 left-0 right-0 transition-all duration-300 z-30
            ${visible ? 'translate-y-0' : '-translate-y-full'}
            ${!atTop ? 'py-2' : 'py-4'}`}
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className={`relative overflow-hidden backdrop-blur-md rounded-2xl 
                    border border-white/20 bg-gradient-to-r from-gray-900/90 to-gray-800/90
                    transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]`}
                >
                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden absolute right-4 top-4 text-white z-50 hover:text-blue-400 transition-colors"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Animated Circuit Board Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 animate-pulse">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                            <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
                            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
                        </div>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div 
                                key={i}
                                className="absolute h-[1px] bg-blue-400/20"
                                style={{
                                    top: `${20 * (i + 1)}%`,
                                    left: '0',
                                    right: '0',
                                    transform: `translateX(${Math.sin(i) * 20}px)`
                                }}
                            />
                        ))}
                    </div>

                    {/* Navigation Items */}
                    <ul className={`relative flex flex-col md:flex-row items-center gap-2 md:gap-6 
                        transition-all duration-300 py-4 px-6
                        ${isMenuOpen ? 'max-h-screen' : 'max-h-16'}
                        md:max-h-none md:items-center md:justify-center`}
                    >
                        {ListItems.map((item) => (
                            <li key={item.id} className="w-full md:w-auto">
                                <button 
                                    onClick={() => scrollToSection(item.id)}
                                    className={`group relative flex items-center gap-3 px-4 py-2.5 w-full md:w-auto
                                        transition-all duration-300 rounded-xl
                                        ${activeItem === item.id ? 'text-white' : 'text-white/80 hover:text-white'}`}
                                >
                                    <span className={`transition-all duration-300 
                                        ${activeItem === item.id ? 'scale-110' : 'group-hover:scale-110'}
                                        ${activeItem === item.id ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}
                                    >
                                        {item.icon}
                                    </span>
                                    
                                    <span className="relative font-medium tracking-wide text-sm whitespace-nowrap">
                                        {item.text}
                                        
                                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${item.color}
                                            transition-all duration-300
                                            ${activeItem === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                                        />
                                    </span>

                                    <span className={`absolute inset-0 rounded-xl transition-all duration-300
                                        ${activeItem === item.id ? 'bg-gradient-to-r from-white/10 to-transparent' : 'group-hover:bg-white/5'}`}
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Data Flow Animation */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse" />
                        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse [animation-delay:1s]" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;