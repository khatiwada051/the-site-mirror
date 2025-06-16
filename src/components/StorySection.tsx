
import React from 'react';

const StorySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-400 to-green-600 relative">
      {/* Story illustration */}
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          {/* Railway scene background */}
          <div className="bg-gradient-to-b from-blue-300 to-green-400 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-96 md:h-[500px] bg-cover bg-center" 
                 style={{
                   backgroundImage: 'linear-gradient(to bottom, #87CEEB 0%, #90EE90 50%, #8FBC8F 100%)'
                 }}>
              
              {/* Railway track */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-600">
                <div className="absolute top-1 left-0 right-0 h-2 bg-gray-800"></div>
                <div className="absolute top-4 left-0 right-0 h-2 bg-gray-800"></div>
              </div>

              {/* Train station building */}
              <div className="absolute bottom-8 right-8 w-32 h-24 bg-yellow-700 rounded-t-lg">
                <div className="w-full h-16 bg-red-700 rounded-t-lg relative">
                  <div className="absolute top-2 left-2 w-6 h-6 bg-yellow-300 rounded"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 bg-yellow-300 rounded"></div>
                </div>
              </div>

              {/* Characters */}
              <div className="absolute bottom-16 left-12">
                <div className="text-6xl animate-wiggle">🚶‍♂️</div>
              </div>
              <div className="absolute bottom-16 left-24">
                <div className="text-4xl animate-bounce-gentle">👶</div>
              </div>

              {/* Cat in window */}
              <div className="absolute bottom-20 right-12">
                <div className="text-3xl animate-float">🐱</div>
              </div>

              {/* Speech bubbles */}
              <div className="absolute bottom-40 left-8 max-w-xs">
                <div className="bg-white rounded-2xl p-4 shadow-lg relative border-2 border-gray-300">
                  <p className="font-comic text-sm text-gray-800">
                    Outside a pet shop near a railway station...
                  </p>
                  <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-b-2 border-r-2 border-gray-300 transform rotate-45"></div>
                </div>
              </div>

              <div className="absolute bottom-52 right-4 max-w-xs">
                <div className="bg-white rounded-2xl p-4 shadow-lg relative border-2 border-gray-300">
                  <p className="font-comic text-sm text-gray-800">
                    "You sure you don't want a soccer ball for your birthday?"
                  </p>
                  <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-b-2 border-l-2 border-gray-300 transform -rotate-45"></div>
                </div>
              </div>

              <div className="absolute bottom-28 left-20 max-w-xs">
                <div className="bg-white rounded-2xl p-4 shadow-lg relative border-2 border-gray-300">
                  <p className="font-comic text-sm text-gray-800">
                    "Nope. This is way better."
                  </p>
                  <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-b-2 border-r-2 border-gray-300 transform rotate-45"></div>
                </div>
              </div>

              {/* Scroll indicator */}
              <div className="absolute bottom-4 right-4 bg-puppy-orange rounded-full p-2 animate-bounce-gentle">
                <span className="text-white font-bold text-sm">Scroll to view the full story!</span>
                <div className="text-white text-xl ml-2 inline-block">➡️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
