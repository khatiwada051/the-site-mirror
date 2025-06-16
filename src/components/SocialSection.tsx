
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const SocialSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Pawsome! 🐾",
        description: "You're now part of our pack! Stay tuned for updates.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-social-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-6 h-6 opacity-30">
        <div className="paw-print animate-float"></div>
      </div>
      <div className="absolute bottom-20 right-16 w-5 h-5 opacity-40">
        <div className="paw-print animate-bounce-gentle"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-pink-100/90 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-pink-200 relative max-w-4xl mx-auto">
          
          {/* Title */}
          <h2 className="font-fredoka font-bold text-3xl md:text-5xl text-center mb-6 text-shadow-lg text-white">
            Join our socials to earn additional rewards and stay updated on the latest news!
          </h2>

          {/* Social media icons */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="transform hover:scale-110 transition-transform duration-200">
              <div className="bg-blue-600 rounded-full p-4 shadow-lg hover:shadow-xl">
                <span className="text-3xl text-white">💬</span>
              </div>
            </a>
            <a href="#" className="transform hover:scale-110 transition-transform duration-200">
              <div className="bg-orange-600 rounded-full p-4 shadow-lg hover:shadow-xl">
                <span className="text-3xl text-white">📱</span>
              </div>
            </a>
          </div>

          {/* Reward gems */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="animate-float">
              <span className="text-4xl">💎</span>
            </div>
            <div className="animate-bounce-gentle delay-300">
              <span className="text-5xl">💎</span>
            </div>
            <div className="animate-float delay-500">
              <span className="text-4xl">💎</span>
            </div>
          </div>

          {/* Puppy character */}
          <div className="flex justify-end mb-4">
            <div className="animate-wiggle">
              <span className="text-6xl">🐕</span>
            </div>
          </div>

          {/* Decorative stars */}
          <div className="absolute -top-2 -left-2 animate-wiggle">
            <span className="text-3xl">⭐</span>
          </div>
          <div className="absolute top-4 -right-4 animate-float">
            <span className="text-4xl">✨</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
