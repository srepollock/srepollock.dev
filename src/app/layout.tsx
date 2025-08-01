import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Spencer Pollock',
  description: "Spencer Pollock's personal links.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8650073157913510"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
