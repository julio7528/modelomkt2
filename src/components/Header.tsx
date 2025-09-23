import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-3">
            {/* Logo geométrico rosa */}
            <div className="w-10 h-10 bg-gradient-to-br from-hot-pink to-hot-pink/80 rounded-lg flex items-center justify-center transform rotate-12">
              <div className="w-6 h-6 bg-white rounded-sm transform -rotate-12"></div>
            </div>
            
            {/* Nome da empresa */}
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              <span className="text-hot-pink">Agência</span>{' '}
              <span className="text-gray-800">Modelo Marketing</span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;