import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Heart, Briefcase, Camera, Palette } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Capture your special day with stunning, emotional photographs that tell your unique love story.",
    features: ["Full day coverage", "Engagement session", "Online gallery", "Print options"],
    price: "Starting at $2,500",
    popular: true
  },
  {
    icon: Briefcase,
    title: "Corporate Headshots",
    description: "Professional headshots that make a lasting impression for your business and personal brand.",
    features: ["Studio or location", "Multiple outfit changes", "Retouching included", "Quick turnaround"],
    price: "Starting at $300",
    popular: false
  },
  {
    icon: Camera,
    title: "Event Photography",
    description: "Comprehensive event coverage for conferences, parties, and special occasions.",
    features: ["Event coverage", "Candid moments", "Group photos", "Same-day previews"],
    price: "Starting at $800",
    popular: false
  },
  {
    icon: Palette,
    title: "Fine Art Portraits",
    description: "Artistic portrait sessions that showcase your personality and create beautiful wall art.",
    features: ["Creative concepts", "Wardrobe consultation", "Multiple locations", "Artistic editing"],
    price: "Starting at $500",
    popular: false
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Photography Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional photography services tailored to capture your most important moments and create lasting memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className={`relative h-full ${service.popular ? 'ring-2 ring-yellow-400' : ''}`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-3 py-1 text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <service.icon className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-4">
                    {service.price}
                  </div>
                  <Button 
                    className="w-full" 
                    variant={service.popular ? "default" : "outline"}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need something custom? I offer personalized photography packages for unique projects.
          </p>
          <Button size="lg" variant="outline">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}