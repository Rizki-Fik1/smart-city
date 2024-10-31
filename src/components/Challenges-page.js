import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Shield, Wifi, Coins, Scale, Users, Leaf } from 'lucide-react';

const ChallengesPage = () => {
  const challenges = [
    {
      id: 1,
      title: "Technology Infrastructure",
      description: "Building adequate technological infrastructure to support smart city systems is a significant challenge. This includes developing high-speed internet networks, strategic IoT sensor placement, and integrated communication systems. Major challenges include uneven network coverage, connection stability, and IoT device maintenance. The establishment of reliable and comprehensive infrastructure is crucial for the successful implementation of smart city initiatives.",
      icon: <Wifi className="w-8 h-8" />,
      color: "bg-blue-500",
      solutions: [
        "Implementation of 5G networks for faster and more stable connectivity",
        "Development of backup systems and redundancy to ensure service availability",
        "Collaboration with telecommunications providers for infrastructure expansion",
        "Preventive maintenance and real-time monitoring systems"
      ]
    },
    {
      id: 2,
      title: "Security and Privacy",
      description: "Cybersecurity and data privacy are primary concerns in smart city implementation. The challenges include protecting citizens' sensitive data, securing critical infrastructure, and preventing increasingly sophisticated cyber attacks. Multi-layered security systems and strict protocols are needed to protect city data and critical infrastructure.",
      icon: <Shield className="w-8 h-8" />,
      color: "bg-red-500",
      solutions: [
        "Implementation of end-to-end encryption for sensitive data",
        "Establishment of dedicated cybersecurity teams",
        "Regular security audits and penetration testing",
        "Public education on personal data security"
      ]
    },
    {
      id: 3,
      title: "Funding and Resources",
      description: "Smart city implementation requires substantial investment in infrastructure, technology, and human resources. The main challenge is finding sustainable and effective funding models. Government budget limitations and project complexity necessitate innovative funding strategies to ensure long-term sustainability of smart city initiatives.",
      icon: <Coins className="w-8 h-8" />,
      color: "bg-yellow-500",
      solutions: [
        "Public-Private Partnerships (PPP) for cost sharing",
        "Utilization of grants and foreign investments",
        "Development of sustainable business models",
        "Optimization of existing resource utilization"
      ]
    },
    {
      id: 4,
      title: "Regulation and Policy",
      description: "Rapid technological advancement requires adaptive regulatory frameworks. Challenges include updating regulations to accommodate innovation while protecting public interests. Harmonization between local, national, and international standards is essential for creating a cohesive smart city ecosystem.",
      icon: <Scale className="w-8 h-8" />,
      color: "bg-purple-500",
      solutions: [
        "Regulatory updates to accommodate new technologies",
        "Establishment of dedicated teams for policy evaluation and updates",
        "Harmonization of regulations with international standards",
        "Stakeholder engagement in policy-making processes"
      ]
    },
    {
      id: 5,
      title: "Public Adaptation",
      description: "Digital divide and resistance to change can hinder smart city technology adoption. The key challenge is ensuring all segments of society can access and utilize smart city services. An inclusive approach is necessary to ensure no community groups are left behind in the digital transformation process.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-orange-500",
      solutions: [
        "Technology training programs and workshops for communities",
        "Regular socialization of smart city benefits",
        "Provision of help centers and assistance",
        "Development of user-friendly applications"
      ]
    },
    {
      id: 6,
      title: "Environmental Impact",
      description: "Smart city implementation must consider the environmental impact of massive technology deployment. Challenges include energy efficiency, emission reduction, and electronic waste management. A balance between technological advancement and environmental sustainability is crucial for long-term success.",
      icon: <Leaf className="w-8 h-8" />,
      color: "bg-green-500",
      solutions: [
        "Implementation of energy-efficient technologies",
        "Electronic waste recycling programs",
        "Use of renewable energy for infrastructure",
        "Real-time environmental impact monitoring"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">Smart City Challenges</h1>
        
        <div className="mb-8 text-gray-700 leading-relaxed text-center px-20 text-lg mt-10">
          <p>To achieve an optimal Smart City, several significant challenges must be addressed and overcome. 
          The transformation towards a smart city requires a holistic approach that considers various aspects, 
          from technological infrastructure to community readiness. Each challenge requires appropriate and 
          sustainable solutions to ensure successful smart city implementation that provides maximum benefits 
          for all stakeholders.</p>
        </div>
        
        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`${challenge.color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}>
                    {challenge.icon}
                  </div>
                  <CardTitle className="text-xl">{challenge.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700 leading-relaxed">{challenge.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Applicable Solutions:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {challenge.solutions.map((solution, index) => (
                        <li key={index} className="text-gray-700">{solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengesPage;