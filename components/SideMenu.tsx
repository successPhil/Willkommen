import Link from 'next/link';

const SideMenu = () => {
  return (
    <div className="w-64 bg-red-600 h-full p-4">
      <h2 className="text-xl font-bold mb-4 text-gold">Chapters</h2>
      <ul>
        {Array.from({ length: 6 }, (_, i) => (
          <li key={i} className="mb-2">
            <Link href={`#chapter${i + 1}`} className="text-black hover:underline">
              Chapter {i + 1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
