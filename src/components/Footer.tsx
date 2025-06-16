
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Woof! Welcome aboard! 🐾",
        description: "Thanks for joining our newsletter!",
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-yellow-100 py-16">
      <div className="container mx-auto px-4">
        {/* Newsletter signup */}
        <div className="text-center mb-12">
          <h3 className="font-fredoka font-bold text-2xl text-gray-800 mb-4">Stay Updated</h3>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border-2 border-gray-300 text-gray-800 rounded-full px-4 py-2 font-comic"
              required
            />
            <Button 
              type="submit"
              className="bg-puppy-orange hover:bg-orange-600 text-white font-fredoka font-bold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              JOIN PUPPACK!
            </Button>
          </form>
        </div>

        {/* Social links and app store buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Social media links */}
          <div className="flex items-center gap-4">
            <span className="font-comic text-gray-700 font-semibold">Follow Us On:</span>
            <div className="flex gap-3">
              <a href="#" className="text-2xl hover:scale-110 transition-transform duration-200">📘</a>
              <a href="#" className="text-2xl hover:scale-110 transition-transform duration-200">📷</a>
              <a href="#" className="text-2xl hover:scale-110 transition-transform duration-200">🐦</a>
            </div>
          </div>

          {/* App store buttons */}
          <div className="flex gap-4">
            <div className="bg-black rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer">
              <span className="text-white text-2xl">📱</span>
              <div className="text-white">
                <div className="text-xs">Download on the</div>
                <div className="font-bold">App Store</div>
              </div>
            </div>
            <div className="bg-black rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer">
              <span className="text-white text-2xl">🤖</span>
              <div className="text-white">
                <div className="text-xs">Get it on</div>
                <div className="font-bold">Google Play</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and legal */}
        <div className="border-t border-gray-300 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎮</span>
                <span className="font-comic font-semibold">LOVABLE</span>
              </div>
              <div className="font-comic">
                Copyright © 2023-2024 Studio. The Right Reserved.
              </div>
            </div>
            <div className="flex gap-4 font-comic">
              <a href="#" className="hover:text-puppy-orange transition-colors">Contact Us</a>
              <a href="#" className="hover:text-puppy-orange transition-colors">Terms and Conditions</a>
              <a href="#" className="hover:text-puppy-orange transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
