import VerbConjugator from '@/components/VerbConjugator';
import Layout from '@/components/Layout'; // Reusing the Layout component

export default function Vokabeln() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Deutsche Vokabeln</h1>

      {/* Verb: machen */}
      <VerbConjugator
        infinitive="machen"
        translations={["do", "make"]}
        conjugations={{
          Ich: "mache",
          Du: "machst",
          Er: "macht",
          Wir: "machen",
          Ihr: "macht",
          Sie: "machen",
        }}
      />

      {/* Verb: sprechen */}
      <VerbConjugator
        infinitive="sprechen"
        translations={["speak"]}
        conjugations={{
          Ich: "spreche",
          Du: "sprichst",
          Er: "spricht",
          Wir: "sprechen",
          Ihr: "sprecht",
          Sie: "sprechen",
        }}
      />

      {/* Verb: kommen */}
      <VerbConjugator
        infinitive="kommen"
        translations={["come"]}
        conjugations={{
          Ich: "komme",
          Du: "kommst",
          Er: "kommt",
          Wir: "kommen",
          Ihr: "kommt",
          Sie: "kommen",
        }}
      />

      {/* Verb: spielen */}
      <VerbConjugator
        infinitive="spielen"
        translations={["play"]}
        conjugations={{
          Ich: "spiele",
          Du: "spielst",
          Er: "spielt",
          Wir: "spielen",
          Ihr: "spielt",
          Sie: "spielen",
        }}
      />

      {/* Verb: reisen */}
      <VerbConjugator
        infinitive="reisen"
        translations={["travel"]}
        conjugations={{
          Ich: "reise",
          Du: "reist",
          Er: "reist",
          Wir: "reisen",
          Ihr: "reist",
          Sie: "reisen",
        }}
      />

      {/* Verb: brauchen */}
      <VerbConjugator
        infinitive="brauchen"
        translations={["need"]}
        conjugations={{
          Ich: "brauche",
          Du: "brauchst",
          Er: "braucht",
          Wir: "brauchen",
          Ihr: "braucht",
          Sie: "brauchen",
        }}
      />

      
      {/* Verb: wissen */}
      <VerbConjugator
        infinitive="wissen"
        translations={["know (a fact)"]}
        conjugations={{
          Ich: "weiß",  // Corrected
          Du: "weißt",
          Er: "weiß",  // Corrected
          Wir: "wissen",
          Ihr: "wisst",
          Sie: "wissen",
        }}
      />

      {/* Verb: kennen */}
      <VerbConjugator
        infinitive="kennen"
        translations={["know (a person or place)"]}
        conjugations={{
          Ich: "kenne",
          Du: "kennst",
          Er: "kennt",
          Wir: "kennen",
          Ihr: "kennt",
          Sie: "kennen",
        }}
      />

      {/* Verb: lernen */}
      <VerbConjugator
        infinitive="lernen"
        translations={["learn"]}
        conjugations={{
          Ich: "lerne",
          Du: "lernst",
          Er: "lernt",
          Wir: "lernen",
          Ihr: "lernt",
          Sie: "lernen",
        }}
      />
    </Layout>
  );
}
