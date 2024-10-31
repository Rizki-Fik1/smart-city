import React, { useState } from 'react';
import { ChevronRight,} from 'lucide-react';
import Ai from '../assets/AGI is coming.jpeg';
import Quantum from '../assets/Quantumm.jpeg';
import SixG from '../assets/6g.jpeg';
import Auto from '../assets/AutoTrans.jpeg';
import Smart from '../assets/SmartBuilding.jpeg';
import Bio from '../assets/Bioengeneering.jpeg';




const FutureProspectPage = () => {
  const [activeCard, setActiveCard] = useState(null);

  const technologies = [
    {
      id: 1,
      title: "Artificial General Intelligence",
      description: "AGI systems managing city-wide operations autonomously",
      image: Ai,
      longDescription: "AGI refers to advanced artificial intelligence capable of performing tasks that normally require human intelligence, such as decision-making in traffic management and resource distribution across a city.",
      LongTermPrediction: "By 2050, AGI could revolutionize how cities operate, from traffic management to resource distribution, creating a seamlessly connected urban ecosystem."
    },
    {
      id: 2,
      title: "Quantum Computing",
      description: "Quantum computing-based communication technology that provides high speed and security for city networks.",
      image: Quantum,
      longDescription: "Quantum computing has the potential to speed up large-scale data processing for applications such as traffic data analysis, weather prediction, and urban planning.",
      LongTermPrediction: "Quantum computing can significantly optimize transportation systems and energy management, resulting in cities that are more responsive and adaptive to change, with energy consumption up to 60% more efficient."
    },
    {
      id: 3,
      title: "6G Connetcivity",
      description: "6G connectivity is the sixth generation of cellular technology that is predicted to offer microsecond speeds and diverse connectivity.",
      image: SixG,
      longDescription: "6G technology is expected to bring ultra-fast internet speeds and low latency, enabling real-time experiences for a variety of applications, from autonomous vehicles to remote healthcare services.",
      LongTermPrediction: "With the implementation of 6G, seamless connectivity will support mobility and communication across cities, creating a fully connected and sustainable urban environment."
    },
    {
        id: 4,
        title: "Autonomous Transportation",
        description: "Self-driving vehicles and smart traffic systems",
        image: Auto,
        longDescription: "Autonomous transportation systems such as driverless cars and autonomous public transportation will enable safer and more efficient mobility.",
        LongTermPrediction: "In the future, autonomous transportation could reduce accidents by up to 80%, significantly reduce carbon emissions, and make transportation faster and cheaper, reducing dependence on private vehicles."
    },
    {
        id: 5,
        title: "Smart Building",
        description: "Buildings with automation technology for security, energy management and optimal comfort for occupants.",
        image: Smart,
        longDescription: "Smart Buildings use advanced technologies such as sensors, IoT, and AI to manage various aspects of building operations automatically and in an integrated manner. This system allows for control of energy efficiency, automatic maintenance, security, and occupant comfort.",
        LongTermPrediction: "By 2040, smart buildings will be the norm in urban development, achieving energy efficiency of up to 90%. These buildings can reduce carbon emissions, reduce operating costs, and create a safer and more comfortable living environment for their occupants."
    },
    {
        id: 6,
        title: "Bioengineering",
        description: "Bioengineering includes genetic engineering of plants and other green technologies to improve air quality and environmental management in cities.",
        image: Bio,
        longDescription: "Bioengineering in the context of smart cities refers to the application of bioengineering technologies to address environmental and health challenges in cities. This technology includes everything from plants modified to absorb pollution to biologically based building materials that can repair themselves.",
        LongTermPrediction: "In the next 30 years, biotechnology can make a major contribution to creating sustainable cities, healthier environments, better air and water quality, and the ability to repair urban ecosystems independently. Biotechnology will allow cities to utilize natural resources without destroying existing ecosystems."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-500 to-indigo-800">
      {/* Hero Section */}
      <header className="relative py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 relative animate-fade-in">
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200'>
            Future Prospects of Smart Cities
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the revolutionary technologies shaping tomorrow's urban landscape
          </p>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Imagine the Future</h2>
            <p className="text-lg text-gray-300">
            Imagine a city that not only serves its residents but learns from them, constantly evolving to meet their needs. With advancements in AI, IoT, and data analytics, urban spaces are transforming into intelligent, responsive ecosystems. These smart cities leverage technology to enhance everything from traffic flow to energy efficiency, aiming to create a more sustainable, interconnected future. From real-time air quality monitoring to autonomous public transport systems, these innovations shape cities that think, adapt, and grow alongside their citizens—ultimately fostering an environment where technology and urban life work in harmony for a smarter, greener world.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className={`relative group cursor-pointer transition-all duration-300 transform hover:-translate-y-2
                ${activeCard === tech.id ? 'scale-105' : ''}`}
              onClick={() => setActiveCard(activeCard === tech.id ? null : tech.id)}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden">
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{tech.title}</h3>
                  <p className="text-gray-300">{tech.description}</p>
                  
                  {/* Expanded Content */}
                  <div className={`overflow-hidden transition-all duration-300
                    ${activeCard === tech.id ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                    <div className="border-t border-white/20 pt-4 mt-4">
                      <p className="text-gray-300 mb-4">{tech.longDescription}</p>
                      <div className="bg-white/5 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">Long Term Prediction</h4>
                        <p className="text-gray-300 text-sm md:text-md">{tech.LongTermPrediction}</p>
                      </div>
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <button className="mt-4 flex items-center text-blue-400 hover:text-blue-300">
                    Learn More 
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FutureProspectPage;