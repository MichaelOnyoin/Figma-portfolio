import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Header activeTab='home' />
      {/* <Header /> */}
      {/* Uncomment the line above to use the original Header component */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;