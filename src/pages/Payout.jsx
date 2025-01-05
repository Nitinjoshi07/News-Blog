import  { useState, useEffect } from "react";
import { jsPDF } from "jspdf";

const Payout = () => {
    const [payoutRate, setPayoutRate] = useState(1);
    const [articles, setArticles] = useState(0);
    const [totalPayout, setTotalPayout] = useState(0);
    const [name, setName] = useState("");

    // Load data from local storage on mount
    useEffect(() => {
        const savedName = localStorage.getItem("authorName");
        const savedRate = localStorage.getItem("payoutRate");
        const savedArticles = localStorage.getItem("articles");

        if (savedRate) setPayoutRate(Number(savedRate));
        if (savedArticles) setArticles(Number(savedArticles));
        if (savedName) setName(savedName);
    }, []);

    // Save data to local storage whenever state changes
    useEffect(() => {
        localStorage.setItem("authorName", name);
        localStorage.setItem("payoutRate", payoutRate);
        localStorage.setItem("articles", articles);
        setTotalPayout(payoutRate * articles);
    }, [payoutRate, articles, name]);

    // Handle input changes
    const handleRateChange = (e) => setPayoutRate(Number(e.target.value));
    const handleArticlesChange = (e) => setArticles(Number(e.target.value));
    const handleNameChange = (e) => setName(e.target.value);

    // Generate PDF
    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text("Sportduniya Payout Summary Bill:", 50, 10);
        doc.text(`Name: ${name}`, 10, 30);
        doc.text(`Payout Rate: $${payoutRate}`, 10, 40);
        doc.text(`Number of Articles: ${articles}`, 10, 50);
        doc.text(`Total Payout: $${totalPayout?.toFixed(2)}`, 10, 60);
        doc.save("Payout_Summary.pdf");
    };

    return (
        <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto m-20 p-10">
            {/* Payout Form */}
            <div className="mb-6">
                <div className="mb-4">
                    <label className="block text-gray-700">Author Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        className="w-full px-4 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Payout Rate (per article):</label>
                    <input
                        type="number"
                        min={0}
                        value={payoutRate}
                        onChange={handleRateChange}
                        className="w-full px-4 py-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Number of Articles:</label>
                    <input
                        type="number"
                        min={0}
                        value={articles}
                        onChange={handleArticlesChange}
                        className="w-full px-4 py-2 border rounded"
                    />
                </div>
            </div>

            {/* Payout Summary */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Payout Summary</h2>
                <p className="text-gray-700 mt-2">
                    <strong>Total Payout:</strong> ${totalPayout?.toFixed(2)}
                </p>
                <div className="text-end">
                    <button
                        onClick={generatePDF}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                    >
                        Export as PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Payout;
