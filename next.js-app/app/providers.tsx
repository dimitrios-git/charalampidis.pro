// @/app/providers.tsx

'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const navigate = (href: string) => {
    router.push(href, { scroll: false }); // fixes console warning: Skipping auto-scroll behavior due to position: sticky or position: fixed on element
  };

  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <NextUIProvider navigate={navigate}>{children}</NextUIProvider>
    </NextThemesProvider>
  );
}
