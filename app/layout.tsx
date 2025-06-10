import './globals.css';
import { Poppins } from 'next/font/google'; 
import Sidebar from '@/components/general/Sidebar'; // Import Poppins font from next/font/google

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
    <html lang="en">
      <head>
        {/* Add metadata or any other head elements */}
      </head>
      <body className={poppins.className}> {/* Apply the Poppins font class here */}
        <div className="w-full flex justify-start items-start h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
