import './globals.css';
import { Poppins } from 'next/font/google';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs' // Import Poppins font from next/font/google

// Define Poppins font with all available weights
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],  // All the available weights
  style: ['normal'],  // Normal style
  subsets: ['latin'],  // Latin subset
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.className} `}>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
