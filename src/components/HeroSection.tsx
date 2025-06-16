
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the adventure! 🐕",
        description: "You've joined the waitlist successfully!",
      });
      setEmail('');
    }
  };

  return (
    <section className="min-h-screen bg-hero-gradient relative overflow-hidden">
      {/* Decorative paw prints */}
      <div className="absolute top-20 left-10 w-6 h-6 opacity-30">
        <div className="paw-print animate-float"></div>
      </div>
      <div className="absolute top-40 right-20 w-8 h-8 opacity-20">
        <div className="paw-print animate-bounce-gentle"></div>
      </div>
      <div className="absolute bottom-32 left-20 w-5 h-5 opacity-40">
        <div className="paw-print"></div>
      </div>
      <div className="absolute bottom-20 right-16 w-7 h-7 opacity-25">
        <div className="paw-print animate-float"></div>
      </div>

      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Logo and Character */}
        <div className="mb-8 animate-bounce-gentle">
          <div className="bg-puppy-orange rounded-full p-6 mb-4 inline-block shadow-2xl">
            <div className="text-6xl">🐕</div>
          </div>
          <h1 className="font-fredoka font-bold text-5xl md:text-7xl text-white text-shadow-lg mb-2">
            PUPPY
          </h1>
          <h2 className="font-fredoka font-bold text-4xl md:text-6xl text-puppy-yellow text-shadow-md">
            SAGA
          </h2>
        </div>

        {/* Mission Statement */}
        <p className="font-comic text-lg md:text-xl text-white max-w-2xl mb-12 leading-relaxed text-shadow-md">
          Take the lead as your little pup's guide, protector, and best friend on a 
          heartwarming mission to get him home safely — one paw at a time.
        </p>

        {/* Email Signup */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white/90 border-2 border-white text-gray-800 placeholder:text-gray-600 rounded-full px-6 py-3 text-center font-comic font-medium"
            required
          />
          <Button 
            type="submit"
            className="bg-puppy-orange hover:bg-orange-600 text-white font-fredoka font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-4 border-orange-700"
          >
            JOIN WAITLIST!
          </Button>
        </form>

        {/* Floating trees decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-10 left-0 text-6xl animate-float">🌳</div>
          <div className="absolute top-20 right-0 text-5xl animate-bounce-gentle">🌳</div>
          <div className="absolute bottom-40 left-10 text-4xl animate-float">🌿</div>
          <div className="absolute bottom-60 right-20 text-5xl animate-wiggle">🌳</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
