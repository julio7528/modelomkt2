import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-3">
            {/* Logo geométrico rosa */}
                        <img 
              src='https://technar.digital/public_img/LOGO3.png' 
              alt="Logo"
              className="h-7 w-auto"
              width={40}
              height={40}
            />
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