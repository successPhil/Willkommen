// components/Layout.tsx
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="p-8 bg-yellow-400 text-black min-h-screen">
      {children}
    </div>
  );
};

export default Layout;
