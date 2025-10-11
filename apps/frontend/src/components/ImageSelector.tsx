import { useState } from "react";
import ImageOptions from "../utils/imageOptions";

const ImageSelector = () => {
    const [selected, setSelected] = useState<number | null>(null);
    const [opponentKey, setOpponentKey] = useState("");
    const [stake, setStake] = useState("");

    const handleSelect = (value: number) => {
        setSelected(value);
    };

    const handleSubmit = () => {
        if (!selected || !opponentKey || !stake) {
            alert("Please select an image, enter opponent key and stake.");
            return;
        }
        console.log("Selected:", selected, "Key:", opponentKey, "Stake:", stake);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            <h2 className="text-2xl font-bold text-center text-gray-800">Select Your Move</h2>

            <div className="flex flex-wrap justify-center gap-6">
                {ImageOptions.map((option) => (
                    <div
                        key={option.value}
                        onClick={() => handleSelect(option.value)}
                        className={`cursor-pointer border-4 rounded-lg p-1 transition-all ${selected === option.value
                            ? "border-blue-500 scale-105"
                            : "border-transparent hover:border-gray-300"
                            }`}
                    >
                        <img
                            src={option.image}
                            alt={option.label}
                            width={100}
                            height={100}
                            className="rounded"
                        />
                        <p className="text-center mt-1 text-gray-700 ">{option.label}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-center">
                <input
                    type="text"
                    placeholder="Opponent Public Key"
                    value={opponentKey}
                    onChange={(e) => setOpponentKey(e.target.value)}
                    className="px-4 py-2 rounded border border-gray-300  bg-gray-50  text-gray-800  w-full sm:w-96"
                />
                <input
                    type="number"
                    min={0}
                    placeholder="Stake (ETH)"
                    value={stake}
                    onChange={(e) => setStake(e.target.value)}
                    className="px-4 py-2 rounded border border-gray-300  bg-gray-50  text-gray-800 w-full sm:w-40"
                />
            </div>

            {/* Submit Button */}
            <div className="text-center">
                <button
                    onClick={handleSubmit}
                    className="px-5 py-2  text-neutral-700 font-semibold rounded-3xl border border-neutral-600 transition"
                >
                    <div className="absolute inset-x-0 -bottom-px h-3px w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default ImageSelector;
