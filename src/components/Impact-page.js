import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { ArrowRight, Leaf, Building, Users, School, Cpu } from 'lucide-react';

const Timeline = () => {
  const timelineData = [
    {
      title: "Environmental Impact",
      content: "Smart City technologies prioritize environmental sustainability by reducing carbon emissions and improving resource management. With energy-efficient infrastructure, renewable energy sources, and waste management systems, these cities aim to minimize their ecological footprint.",
      align: "right",
      icon: Leaf
    },
    {
      title: "Economic Impact",
      content: "Implementing Smart City solutions can drive economic growth by creating new job opportunities and attracting investments in technology sectors. Automation and data-driven decision-making lead to increased efficiency in city operations.",
      align: "left",
      icon: Building
    },
    {
      title: "Social Impact",
      content: "By utilizing advanced technologies, Smart Cities enhance residents' quality of life. Smart healthcare systems enable quicker response times and better access to medical facilities, while smart public safety systems reduce crime rates.",
      align: "right",
      icon: Users
    },
    {
      title: "Urban Development",
      content: "Smart Cities employ sustainable urban planning and infrastructure development. Green buildings, smart transportation networks, and pedestrian-friendly spaces encourage eco-friendly lifestyles and reduce pollution.",
      align: "left",
      icon: School
    },
    {
      title: "Technological Advancement",
      content: "A Smart City is a hub for innovation, driving advancements in artificial intelligence, Internet of Things (IoT), and data analytics. By adopting cutting-edge technologies, cities remain competitive on the global stage.",
      align: "right",
      icon: Cpu
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-400 to-indigo-600 py-12 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full w-full rotate-12 scale-150">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-white rounded-full animate-twinkle"
                style={{
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>
        <div className="absolute w-64 h-64 rounded-full bg-white/10 -top-32 -left-32 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-white/5 -bottom-48 -right-48 animate-pulse delay-700"></div>
      </div>
      
      <h2 className="text-4xl font-bold text-center mb-8 relative animate-fade-in">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
          Impact Smart City
        </span>
      </h2>
      
      <div className="max-w-4xl mx-auto w-full grid grid-cols-9 gap-4 relative">
        {timelineData.map((item, index) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={index}>
              {item.align === "right" ? (
                <>
                  <div className="col-span-4 w-full h-full">
                    <Card className="w-full bg-white/95 backdrop-blur-sm rounded-md p-4 shadow-2xl transition-all duration-300 hover:shadow-4xl hover:scale-105 hover:bg-white transform hover:-translate-y-1 group">
                      <CardHeader className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-indigo-600 group-hover:text-indigo-700 transition-colors">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          {item.content}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative col-span-1 flex justify-center items-center">
                    <div className="h-full w-1 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse-line"></div>
                    <div className="absolute top-1/2 transform w-8 h-8 rounded-full bg-indigo-600 z-10 flex items-center justify-center text-white animate-float shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="col-span-4"></div>
                </>
              ) : (
                <>
                  <div className="col-span-4"></div>
                  <div className="relative col-span-1 flex justify-center items-center">
                    <div className="h-full w-1 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse-line"></div>
                    <div className="absolute top-1/2 transform w-8 h-8 rounded-full bg-indigo-600 z-10 flex items-center justify-center text-white animate-float shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="col-span-4 w-full h-full">
                    <Card className="w-full bg-white/95 backdrop-blur-sm rounded-md p-4 shadow-2xl transition-all duration-300 hover:shadow-4xl hover:scale-105 hover:bg-white transform hover:-translate-y-1 group">
                      <CardHeader className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-indigo-600 group-hover:text-indigo-700 transition-colors">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          {item.content}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* CTA Button */}
      <a href='#challenges'>
      <div className="mt-16 animate-fade-in-up">
        <button className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white bg-indigo-600 rounded-full overflow-hidden transition-all duration-300 ease-out hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-indigo-50">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-32 opacity-10"></span>
          <span className="relative flex items-center">
            Explore More
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
      </a>
    </div>
  );
};

export default Timeline;

// Add these additional styles to your CSS or Tailwind config
const styles = {
  '.animate-fade-in': {
    animation: 'fadeIn 1s ease-in-out'
  },
  '.animate-fade-in-up': {
    animation: 'fadeInUp 1s ease-out'
  },
  '.animate-float': {
    animation: 'float 3s ease-in-out infinite'
  },
  '.animate-pulse-line': {
    animation: 'pulseLine 2s ease-in-out infinite'
  },
  '.animate-twinkle': {
    animation: 'twinkle 3s ease-in-out infinite'
  },
  '@keyframes fadeInUp': {
    '0%': {
      opacity: '0',
      transform: 'translateY(20px)'
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)'
    }
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(-5px)',
    },
    '50%': {
      transform: 'translateY(5px)',
    }
  },
  '@keyframes pulseLine': {
    '0%, 100%': {
      opacity: '0.4',
    },
    '50%': {
      opacity: '0.8',
    }
  },
  '@keyframes twinkle': {
    '0%, 100%': {
      opacity: '0.2',
    },
    '50%': {
      opacity: '0.8',
    }
  }
}