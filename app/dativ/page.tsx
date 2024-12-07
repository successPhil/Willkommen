const Dativ = () => {
    return (
        <div className="p-6 bg-yellow-400 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-black mb-6">Chart for Dativ</h1>
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
                            <td className="border border-gray-300 px-4 py-2">dem</td>
                            <td className="border border-gray-300 px-4 py-2">der</td>
                            <td className="border border-gray-300 px-4 py-2">dem</td>
                            <td className="border border-gray-300 px-4 py-2">den (+n)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">Indefinite Articles</td>
                            <td className="border border-gray-300 px-4 py-2">einem</td>
                            <td className="border border-gray-300 px-4 py-2">einer</td>
                            <td className="border border-gray-300 px-4 py-2">einem</td>
                            <td className="border border-gray-300 px-4 py-2">—</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Negative Articles</td>
                            <td className="border border-gray-300 px-4 py-2">keinem</td>
                            <td className="border border-gray-300 px-4 py-2">keiner</td>
                            <td className="border border-gray-300 px-4 py-2">keinem</td>
                            <td className="border border-gray-300 px-4 py-2">keinen (+n)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">Personal Pronouns</td>
                            <td className="border border-gray-300 px-4 py-2">ihm (him/it)</td>
                            <td className="border border-gray-300 px-4 py-2">ihr (her)</td>
                            <td className="border border-gray-300 px-4 py-2">ihm (it)</td>
                            <td className="border border-gray-300 px-4 py-2">ihnen (them)</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            

            <div className="mt-8 bg-gray-200 p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4 text-black">When to Use the Dative Case</h2>
    <p className="mb-4 text-black">
        The dative case is used to show the indirect object of a verb. This answers the questions <span className="font-bold">"to whom?"</span> or <span className="font-bold">"for whom?"</span>.
    </p>
    <ul className="list-disc list-inside text-black">
        <li>Example with an indirect object: <span className="italic">Ich gebe dem Mann ein Buch.</span> (I give the man a book.)</li>
        <li>Prepositions that always take the dative case: <span className="font-bold">aus, bei, mit, nach, seit, von, zu</span>.</li>
        <li>Showing location (no movement): <span className="italic">Das Buch liegt im Regal.</span> (The book is on the shelf.)</li>
    </ul>
</div>


        </div>
    );
};

export default Dativ;
