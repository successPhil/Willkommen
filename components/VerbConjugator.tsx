'use client';

import { useState } from 'react';

type Pronoun = 'Ich' | 'Du' | 'Er' | 'Wir' | 'Ihr' | 'Sie';

interface VerbProps {
  infinitive: string;
  translations: string[];
  conjugations: Record<Pronoun, string>;
}

const VerbConjugator: React.FC<VerbProps> = ({ infinitive, translations, conjugations }) => {
  const [activePronoun, setActivePronoun] = useState<Pronoun | null>(null);

  // Function to extract the root form from the infinitive (remove -en or -n)
  const extractRoot = (infinitive: string): string => {
    if (infinitive.endsWith('en')) {
      return infinitive.slice(0, -2); // Remove -en
    } else if (infinitive.endsWith('n')) {
      return infinitive.slice(0, -1); // Remove -n
    }
    return infinitive;
  };

  const rootForm = extractRoot(infinitive);

  const highlightChanges = (root: string, conjugated: string) => {
    // Find where the conjugated form differs from the root
    const diffIndex = Array.from(conjugated).findIndex((char, index) => char !== root[index]);
    if (diffIndex === -1) return conjugated; // No difference

    const rootPart = conjugated.slice(0, diffIndex);
    const changedPart = conjugated.slice(diffIndex);

    return (
      <>
        {rootPart}
        <span className="text-red-500">{changedPart}</span>
      </>
    );
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-2">
        {infinitive} (to {translations[0]})
      </h2>

      {/* Pronoun buttons */}
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <div className="flex flex-col space-y-2">
          {Object.keys(conjugations).map((pronoun) => (
            <button
              key={pronoun}
              onClick={() => setActivePronoun(pronoun as Pronoun)}
              className={`p-2 rounded ${
                activePronoun === pronoun ? 'bg-red-500 text-white' : 'bg-gray-200'
              }`}
            >
              {pronoun}
            </button>
          ))}
        </div>

        {/* Show conjugated verb only when a pronoun is clicked */}
        {activePronoun && (
          <div className="ml-4">
            <p>
              {highlightChanges(rootForm, conjugations[activePronoun])}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerbConjugator;
