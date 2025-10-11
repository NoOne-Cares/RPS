import { useState } from "react";


const GameTabs = () => {
    const [activeTab, setActiveTab] = useState<"create" | "join">("create");

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md space-y-6">
            {/* Tab Buttons */}
            <div className="flex justify-center space-x-6">
                <button
                    className={`px-4 py-2 font-semibold rounded ${activeTab === "create"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                        }`}
                    onClick={() => setActiveTab("create")}
                >
                    Create Game
                </button>
                <button
                    className={`px-4 py-2 font-semibold rounded ${activeTab === "join"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                        }`}
                    onClick={() => setActiveTab("join")}
                >
                    Join Game
                </button>
            </div>

            {/* Tab Content */}
            <div>
                {/* {activeTab === "create" ? <CreateGame /> : <JoinGame />} */}
            </div>
        </div>
    );
};

export default GameTabs;
