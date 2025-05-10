import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-8xl mx-auto font-poppins min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-grow">{children}</main>
      
    </div>
  );
};

export default Layout;