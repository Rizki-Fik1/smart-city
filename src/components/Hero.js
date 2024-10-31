import React, { useEffect, useState } from 'react';
import City from '../assets/night-city.mp4';
import { Search } from 'lucide-react';

const useTypewriter = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, text, speed]);

  return { displayText, isTypingComplete };
};

const HeroSection = () => {
  const { displayText, isTypingComplete } = useTypewriter(
    "Welcome to Smart City Innovation",
    50
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          className="w-full h-screen object-cover scale-105"
          style={{ filter: 'brightness(0.5)' }}
        >
          <source src={City} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-10">
        <div className="absolute w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-20 top-1/4 left-1/4" />
        <div className="absolute w-4 h-4 bg-purple-500 rounded-full animate-ping opacity-20 top-3/4 left-3/4" />
        <div className="absolute w-4 h-4 bg-green-500 rounded-full animate-ping opacity-20 top-1/2 right-1/4" />
      </div>

      <section className="relative text-white z-20 min-h-screen flex flex-col justify-center items-center">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center space-y-8">
            {/* Main Title with Glowing Effect */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
                {displayText}
              </span>
            </h1>

            {/* Subtitle with Responsive Padding */}
            <p className="mt-6 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 leading-relaxed text-white/90 font-semibold">
              Experience the future of urban living where technology and sustainability meet. Smart City integrates cutting-edge innovations with sustainable solutions to create a more efficient, environmentally conscious, and livable urban environment.
            </p>

            {/* Enhanced Single Button with Advanced Effects */}
            <div className="mt-12 flex justify-center">
              <button className="group relative inline-flex items-center justify-center mt-14">
                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-lg blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
                
                {/* Button background with gradient */}
                <div className="relative px-8 py-4 bg-black bg-gradient-to-r from-blue-600/50 to-purple-600/50 rounded-lg leading-none flex items-center">
                  {/* Sparkles effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-lg">
                    <div className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition duration-300">
                      <div className="w-[500%] h-[500%] relative -top-[250%] -left-[250%] bg-gradient-to-r from-transparent via-white to-transparent animate-sparkle"></div>
                    </div>
                  </div>
                  
                  {/* Button content */}
                  <a className="relative flex items-center gap-2 text-lg font-semibold text-white group-hover:text-white/90 transition duration-200" href='#smart-city'>
                    <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                      Explore Now
                    </span>
                  </a>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom keyframes animation for gradient and sparkle effects */}
      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes sparkle {
          0% {
            transform: translateX(-50%) rotate(0deg);
          }
          100% {
            transform: translateX(50%) rotate(25deg);
          }
        }
        
        .animate-gradient-xy {
          animation: gradient-xy 15s ease infinite;
          background-size: 400% 400%;
        }
        
        .animate-sparkle {
          animation: sparkle 3s linear infinite;
          background: linear-gradient(90deg, transparent 0%, white 45%, white 55%, transparent 100%);
        }
      `}</style>
    </div>
  );
};

export default HeroSection;