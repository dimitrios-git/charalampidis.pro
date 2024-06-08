// @/components/footers/defaultFooter.tsx

import React from 'react';

const DefaultFooter = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 fixed bottom-0 w-full">
      &copy; 2024 Your Company Name. All rights reserved. |{' '}
      <a href="#" className="hover:underline">
        Privacy Policy
      </a>{' '}
      |{' '}
      <a href="#" className="hover:underline">
        Terms of Service
      </a>
    </footer>
  );
};

export default DefaultFooter;
