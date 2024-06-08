// @/components/headers/DefaultHeader.tsx

import React from 'react';

const DefaultHeader = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex space-x-4">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Services
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default DefaultHeader;
