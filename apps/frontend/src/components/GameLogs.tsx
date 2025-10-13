import GameHistory from "./GameHistory";

const dummyGames = [
    {
        contractAddress: "0x123abc",
        value: 0.1,
        player1: "0xabc",
        player2: "0xdef",
        player1move: 1,
        player2move: 3,
        createdAt: Date.now(),
        winner: "0xabc", // Player 1 wins
    },
    {
        contractAddress: "0x456def",
        value: 0.2,
        player1: "0xaaa",
        player2: "0xbbb",
        player1move: 4,
        player2move: 2,
        createdAt: Date.now(),
        winner: "0xbbb", // Player 2 wins
    },
    {
        contractAddress: "0x789ghi",
        value: 0.3,
        player1: "0xaaa",
        player2: "0xbbb",
        player1move: 5,
        player2move: 5,
        createdAt: Date.now(),
        winner: "draw", // Draw
    },
];
const GameLogs = () => {

    const currentUserAddress = "0xabc";
    return (
        <div>
            <GameHistory games={dummyGames} currentUser={currentUserAddress} />
        </div>
    )
}

export default GameLogs