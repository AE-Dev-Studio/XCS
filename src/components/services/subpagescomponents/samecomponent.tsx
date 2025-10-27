"use client"
import { Button } from '@/components/ui/button';

export default function Samecomponent() {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl font-extrabold text-black mb-6 leading-tight">
          The Best Chauffeur Service In Manchester Is Provided By CCS Chauffeur Services.
        </h1>
        
        {/* Description Text */}
        <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          Our fleet of Mercedes E Class, S Class, V Class, and BMW 740 vehicles is available for hire 24/7. Each of our drivers is courteous, impeccably groomed, and professionally presented prior to every appointment. To ensure the utmost safety and cleanliness, we sanitize our vehicles before each journey and provide our clients with face masks, filters, and latex gloves.
        </p>
        
        {/* CTA Button */}
        <Button 
          className="bg-black text-white hover:bg-gray-800 rounded-full px-12 py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          onClick={() => window.location.href = 'tel:07803553793'}
        >
            07803553793
        </Button>
      </div>
    </div>
  );
}