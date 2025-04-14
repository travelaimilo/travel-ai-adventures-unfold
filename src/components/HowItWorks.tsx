
import React from 'react';
import { MessageSquareText, Sparkles, CalendarCheck, MapPin } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquareText size={32} className="text-white" />,
      title: "Chat with TravelAI",
      description: "Start a conversation with our AI assistant about your travel plans and preferences.",
      color: "bg-brand-blue"
    },
    {
      icon: <Sparkles size={32} className="text-white" />,
      title: "Get Personalized Recommendations",
      description: "Receive tailored suggestions for flights, accommodations, and activities based on your needs.",
      color: "bg-indigo-500"
    },
    {
      icon: <CalendarCheck size={32} className="text-white" />,
      title: "Review Your Itinerary",
      description: "Look over your customized travel plan and make any adjustments you want.",
      color: "bg-violet-500"
    },
    {
      icon: <MapPin size={32} className="text-white" />,
      title: "Book and Go",
      description: "Confirm your bookings through our secure platform and get ready for your trip!",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-brand-blue">TravelAI</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Planning a trip has never been easier. Just chat with our AI and watch the magic happen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-10 bottom-10 w-1 bg-gray-200 hidden md:block"></div>
            
            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                  <div className={`${step.color} rounded-full p-4 z-10 shrink-0`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Using TravelAI" 
              className="rounded-lg shadow-lg w-full"
            />
            <img 
              src="/public/lovable-uploads/f657fe3a-d994-4783-8d2d-1ae07f687ab0.png" 
              alt="TravelAI App Interface" 
              className="absolute -bottom-10 -right-10 w-2/3 rounded-lg shadow-xl border-4 border-white"
            />
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="bg-gray-50 p-6 md:p-10 rounded-2xl max-w-3xl">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <img 
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="AI Conversation Example" 
                className="w-full md:w-1/2 rounded-lg shadow-md"
              />
              <div>
                <h3 className="text-xl font-semibold mb-3">Try a conversation like:</h3>
                <p className="text-gray-600 italic mb-4">"I want to plan a 7-day trip to Japan in October with my partner. We love food, culture, and nature."</p>
                <p className="text-gray-600">TravelAI will handle the rest, suggesting itineraries, flights, accommodations, and activities tailored to your preferences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
