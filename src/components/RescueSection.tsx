
import React from 'react';

const RescueSection = () => {
  return (
    <section className="py-20 bg-rescue-gradient relative overflow-hidden">
      {/* Decorative paw prints */}
      <div className="absolute top-10 right-10 w-6 h-6 opacity-30">
        <div className="paw-print animate-bounce-gentle"></div>
      </div>
      <div className="absolute bottom-20 left-16 w-5 h-5 opacity-40">
        <div className="paw-print animate-float"></div>
      </div>
      <div className="absolute bottom-32 right-20 w-7 h-7 opacity-25">
        <div className="paw-print"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-yellow-100/90 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-yellow-200 relative max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="font-fredoka font-bold text-4xl md:text-6xl text-center mb-4 text-shadow-lg text-puppy-orange">
            JOIN THE EARLY RESCUE!
          </h2>
          
          {/* Subtitle */}
          <p className="font-comic text-lg md:text-xl text-center text-gray-800 mb-8 max-w-2xl mx-auto">
            First responders will receive exclusive in-game rewards
            <br />
            — a little thank you from us!
          </p>

          {/* Reward bags illustration */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="animate-bounce-gentle">
              <div className="bg-yellow-600 rounded-lg p-4 shadow-lg transform rotate-12">
                <span className="text-3xl">💰</span>
              </div>
            </div>
            <div className="animate-float delay-300">
              <div className="bg-orange-500 rounded-lg p-4 shadow-lg transform -rotate-6">
                <span className="text-3xl">🎁</span>
              </div>
            </div>
            <div className="animate-bounce-gentle delay-500">
              <div className="bg-yellow-500 rounded-lg p-4 shadow-lg transform rotate-6">
                <span className="text-3xl">💎</span>
              </div>
            </div>
          </div>

          {/* Additional decorative elements */}
          <div className="absolute -top-4 -right-4 animate-wiggle">
            <span className="text-4xl">⭐</span>
          </div>
          <div className="absolute -bottom-2 -left-2 animate-float">
            <span className="text-3xl">🏆</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RescueSection;
