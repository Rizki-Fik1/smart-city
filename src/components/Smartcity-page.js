import React, { useState } from 'react';
import { 
  Brain, 
  Cpu, 
  Leaf, 
  Building2, 
  Wifi, 
  Car, 
  ShieldCheck, 
  Lightbulb,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';

const SmartCityPage = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const technologies = [
    {
      icon: <Brain className="w-12 h-12 text-indigo-500" />,
      title: "Artificial Intelligence",
      description: "AI powers intelligent traffic management, predictive maintenance, and smart decision-making systems.",
      details: [
        "Machine Learning for pattern recognition and prediction",
        "Computer Vision for surveillance and monitoring",
        "Natural Language Processing for citizen services",
        "Predictive Analytics for resource management",
        "Automated Decision Support Systems",
        "Smart Grid Optimization"
      ],
      longDescription: "Artificial Intelligence serves as the brain of smart cities, processing vast amounts of data to make intelligent decisions. Through advanced algorithms and machine learning models, AI systems can predict traffic patterns, optimize energy consumption, enhance public safety, and improve overall city operations. The technology enables real-time analysis of city data, leading to more efficient resource allocation and better urban planning decisions."
    },
    {
      icon: <Cpu className="w-12 h-12 text-indigo-500" />,
      title: "Internet of Things (IoT)",
      description: "Connected sensors and devices create a digital nervous system throughout the city.",
      details: [
        "Environmental Monitoring Sensors",
        "Smart Traffic Management Systems",
        "Waste Management Solutions",
        "Public Safety and Security Devices",
        "Smart Lighting Systems",
        "Urban Infrastructure Monitoring"
      ],
      longDescription: "The Internet of Things (IoT) creates an interconnected network of sensors and devices throughout the city. These devices continuously collect and transmit data about various urban parameters, from air quality to traffic flow. This extensive network of sensors enables real-time monitoring and response to urban challenges, creating a more efficient and responsive city environment."
    },
    {
      icon: <Leaf className="w-12 h-12 text-indigo-500" />,
      title: "Green Infrastructure",
      description: "Sustainable solutions including smart energy grids, renewable power, and eco-friendly buildings.",
      details: [
        "Renewable Energy Integration",
        "Smart Grid Systems",
        "Green Building Technologies",
        "Sustainable Water Management",
        "Urban Farming Solutions",
        "Waste Recycling Systems"
      ],
      longDescription: "Green Infrastructure combines sustainable design with smart technology to create environmentally friendly urban spaces. This includes implementing renewable energy systems, designing energy-efficient buildings, and creating sustainable water management solutions. The integration of these green technologies helps reduce the city's environmental impact while improving resource efficiency."
    },
    {
      icon: <Building2 className="w-12 h-12 text-indigo-500" />,
      title: "Smart Buildings",
      description: "Automated systems for energy management, security, and comfort optimization.",
      details: [
        "Building Management Systems",
        "Energy Efficiency Controls",
        "Security and Access Control",
        "HVAC Optimization",
        "Occupancy Monitoring",
        "Predictive Maintenance"
      ],
      longDescription: "Smart Buildings represent the evolution of urban architecture, incorporating automated systems for enhanced efficiency and comfort. These buildings use advanced sensors and control systems to optimize energy usage, maintain security, and ensure optimal environmental conditions. Through continuous monitoring and automated adjustments, smart buildings provide improved comfort while reducing energy consumption."
    },
    {
      icon: <Wifi className="w-12 h-12 text-indigo-500" />,
      title: "5G Networks",
      description: "High-speed connectivity enabling real-time data processing and communication.",
      details: [
        "High-Speed Data Transfer",
        "Low Latency Communication",
        "Massive Device Connectivity",
        "Network Slicing",
        "Edge Computing Support",
        "Enhanced Mobile Broadband"
      ],
      longDescription: "5G Networks provide the high-speed connectivity backbone essential for smart city operations. With ultra-low latency and massive device support, 5G enables real-time data processing and communication between various city systems. This advanced network infrastructure supports everything from autonomous vehicles to remote healthcare services, making it possible to implement sophisticated smart city solutions."
    },
    {
      icon: <Car className="w-12 h-12 text-indigo-500" />,
      title: "Smart Mobility",
      description: "Intelligent transportation systems and autonomous vehicles for efficient movement.",
      details: [
        "Autonomous Vehicle Systems",
        "Smart Traffic Management",
        "Public Transportation Optimization",
        "Electric Vehicle Infrastructure",
        "Shared Mobility Solutions",
        "Smart Parking Systems"
      ],
      longDescription: "Smart Mobility transforms urban transportation through intelligent systems and autonomous technologies. By integrating real-time data analytics with transportation infrastructure, cities can optimize traffic flow, reduce congestion, and improve public transit efficiency. This includes the development of electric vehicle networks, autonomous vehicle systems, and intelligent traffic management solutions."
    }
  ];

  const goals = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "Improved Quality of Life",
      description: "Enhanced public services and urban living experience"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
      title: "Sustainability",
      description: "Reduced environmental impact and resource optimization"
    },
    {
      icon: <Building2 className="w-6 h-6 text-blue-500" />,
      title: "Economic Growth",
      description: "Innovation-driven development and job creation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-400 to-indigo-200">
      {/* Definition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-6">What is a Smart City?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              A Smart City is an urban area that uses technology and data to enhance the quality and performance of urban services, reduce costs and resource consumption, and engage more effectively with its citizens. Through the integration of information and communication technology (ICT) and various physical devices connected to the Internet of Things (IoT) network, a smart city optimizes the efficiency of city operations and services while connecting to citizens.
            </p>
            
            {/* Goals Cards */}
            <h3 className="text-2xl font-bold mb-6">Key Goals</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {goals.map((goal, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    {goal.icon}
                    <h4 className="text-xl font-semibold ml-3">{goal.title}</h4>
                  </div>
                  <p className="text-gray-600">{goal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-400 to-indigo-400">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 relative animate-fade-in">
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200'>
            Technology Smart City
            </span>
          </h2>
          <p className="text-center text-xl text-gray-300 max-w-3xl mx-auto mb-12">Click on any technology to explore details</p>

          {/* Cards with Scrollable */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="space-y-4">
                {/* Card */}
                <div 
                  onClick={() => setSelectedTech(index === selectedTech ? null : index)}
                  className={`bg-white rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    selectedTech === index ? 'ring-2 ring-indigo-500 shadow-lg' : 'hover:shadow-md'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    {tech.icon}
                    <h3 className="text-xl font-semibold mt-4">{tech.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{tech.description}</p>
                    <ChevronDown className={`w-6 h-6 mt-4 text-indigo-500 transition-transform duration-300 ${
                      selectedTech === index ? 'rotate-180' : ''
                    }`} />
                  </div>
                </div>

                {/* Expanded Details with Scroll */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  selectedTech === index ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-white rounded-xl shadow-lg overflow-y-auto max-h-[60vh] sm:max-h-[70vh]">
                    {/* Sticky Header */}
                    <div className="sticky top-0 bg-white p-6 border-b border-gray-100 shadow-sm">
                      <div className="flex items-center">
                        {tech.icon}
                        <h3 className="text-xl sm:text-2xl font-semibold ml-4">{tech.title}</h3>
                      </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className="p-6">
                      {/* Long Description */}
                      <p className="text-gray-700 mb-8 leading-relaxed text-sm sm:text-base">
                        {tech.longDescription}
                      </p>

                      {/* Key Features */}
                      <h4 className="text-lg sm:text-xl font-semibold mb-4">Key Features</h4>
                      <div className="grid gap-4">
                        {tech.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                            <ChevronRight className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm sm:text-base">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Learn More?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover how smart cities impact human life
          </p>
          <a
            href="#impact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
          >
            Explore Impact
            <ChevronRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default SmartCityPage;