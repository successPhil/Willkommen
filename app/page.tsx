export default function Home() {
  // Array of numbers and their German equivalents
  const numbers = [
    { en: 1, de: 'eins' },
    { en: 2, de: 'zwei' },
    { en: 3, de: 'drei' },
    { en: 4, de: 'vier' },
    { en: 5, de: 'fünf' },
    { en: 6, de: 'sechs' },
    { en: 7, de: 'sieben' },
    { en: 8, de: 'acht' },
    { en: 9, de: 'neun' },
    { en: 10, de: 'zehn' },
    { en: 11, de: 'elf' },
    { en: 12, de: 'zwölf' },
    { en: 13, de: 'dreizehn' },
    { en: 14, de: 'vierzehn' },
    { en: 15, de: 'fünfzehn' },
    { en: 16, de: 'sechzehn' },
    { en: 17, de: 'siebzehn' },
    { en: 18, de: 'achtzehn' },
    { en: 19, de: 'neunzehn' },
    { en: 20, de: 'zwanzig' },
    { en: 30, de: 'dreißig' },
    { en: 40, de: 'vierzig' },
    { en: 50, de: 'fünfzig' },
    { en: 60, de: 'sechzig' },
    { en: 70, de: 'siebzig' },
    { en: 80, de: 'achtzig' },
    { en: 90, de: 'neunzig' },
    { en: 100, de: 'hundert' },
  ];

  return (
    <div className="p-8 bg-yellow-400 text-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Willkommen zum Deutsch Lernen</h1>
      <p className="mb-4">Hallo! Do you enjoy learning German?</p>
      <p className="mb-4">
        I have created a reference to help myself study German. This application will cover some basic and common phrases in German. 
        I intend to build some simple ways to quiz yourself in German!
      </p>
      <h2 className="text-xl font-bold mb-4">Let's start with some numbers.</h2>

      {/* Number grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {numbers.map((num, i) => (
          <div key={i} className="p-4 border border-black bg-white">
            <p className="text-center text-lg font-bold">{num.en}</p>
            <p className="text-center">{num.de}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
