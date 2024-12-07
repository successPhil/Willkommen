const Akkusativ = () => {
    return (
        <div className="p-6 bg-yellow-400 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-black mb-6">Chart for Akkusativ</h1>
            <section className="overflow-x-auto bg-gray-100 rounded-lg shadow-md p-4 max-w-4xl mx-auto">
                <table className="w-full table-auto border-collapse border border-gray-300 bg-gray-50">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2 text-left">Case</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Masculine</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Feminine</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Neuter</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Plural</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Definite Articles</td>
                            <td className="border border-gray-300 px-4 py-2">den</td>
                            <td className="border border-gray-300 px-4 py-2">die</td>
                            <td className="border border-gray-300 px-4 py-2">das</td>
                            <td className="border border-gray-300 px-4 py-2">die</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">Indefinite Articles</td>
                            <td className="border border-gray-300 px-4 py-2">einen</td>
                            <td className="border border-gray-300 px-4 py-2">eine</td>
                            <td className="border border-gray-300 px-4 py-2">ein</td>
                            <td className="border border-gray-300 px-4 py-2">—</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Negative Articles</td>
                            <td className="border border-gray-300 px-4 py-2">keinen</td>
                            <td className="border border-gray-300 px-4 py-2">keine</td>
                            <td className="border border-gray-300 px-4 py-2">kein</td>
                            <td className="border border-gray-300 px-4 py-2">keine</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">Personal Pronouns</td>
                            <td className="border border-gray-300 px-4 py-2">ihn (him)</td>
                            <td className="border border-gray-300 px-4 py-2">sie (her)</td>
                            <td className="border border-gray-300 px-4 py-2">es (it)</td>
                            <td className="border border-gray-300 px-4 py-2">sie (them)</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            

            <div className="mt-8 bg-gray-200 p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4 text-black">When to Use the Accusative Case</h2>
    <p className="mb-4 text-black">
        The accusative case is used to show the direct object of a verb. This answers the questions <span className="font-bold">"whom?"</span> or <span className="font-bold">"what?"</span> after the verb.
    </p>
    <ul className="list-disc list-inside text-black">
        <li>Example with a direct object: <span className="italic">Ich sehe den Hund.</span> (I see the dog.)</li>
        <li>Prepositions that always take the accusative case: <span className="font-bold">durch, für, gegen, ohne, um</span>.</li>
        <li>Movement towards a destination: <span className="italic">Wir gehen in den Park.</span> (We are going to the park.)</li>
    </ul>
</div>

        </div>
    );
};

export default Akkusativ;
