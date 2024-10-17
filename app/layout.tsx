import './globals.css';
import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';

export const metadata = {
  title: 'Learn German',
  description: 'A simple web app for learning German',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex">
          <SideMenu />
          <main className="p-8 bg-yellow-400 text-black">{children}</main>
        </div>
      </body>
    </html>
  );
}
