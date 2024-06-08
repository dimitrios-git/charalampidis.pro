// @/app/ui/themeSwitcher.tsx

'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <p className="mb-4">The current theme is: {theme}</p>
      <button
        onClick={() => setTheme('light')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Light Mode
      </button>
      <button
        onClick={() => setTheme('dark')}
        className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
      >
        Dark Mode
      </button>
    </div>
  );
}
