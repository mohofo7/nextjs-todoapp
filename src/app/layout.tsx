/* eslint-disable @next/next/no-head-element */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <h1>Awesome Todo App</h1>
        {children}
      </body>
    </html>
  );
}
