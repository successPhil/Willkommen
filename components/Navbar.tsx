import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-black text-yellow-400 mb-8">
      <Link href="/" className="mr-4">
        Willkommen
      </Link>
      <Link href="/vokabeln" className="mr-4">
        Vokabeln
      </Link>
    </nav>
  );
}
