import type { Game } from "../types/Types";

const findWinner = (game: Game): string | `0x${string}` => {
    if (game.player1move === game.player2move) return "draw";

    const winsAgainst: Record<number, number[]> = {
        1: [3, 4],
        2: [1, 5],
        3: [2, 4],
        4: [5, 2],
        5: [3, 1],
    };

    if (winsAgainst[Number(game.player1move)]?.includes(game.player2move!)) {
        return game.player1!;
    } else if (winsAgainst[game.player2move!]?.includes(Number(game.player1move))) {
        return game.player2!;
    } else {
        return "draw";
    }
}

export default findWinner