"use client";

import { Providers } from '../providers';
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Todo App</title>
      </head>
      <body>
        <Providers>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </Providers>
      </body>
    </html>
  );
}
