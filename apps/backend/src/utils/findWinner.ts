function findWinner(player1move: number, player2move: number): number {
    if (player1move === player2move) return 0;

    const winsAgainst: Record<number, number[]> = {
        1: [3, 4],
        2: [1, 5],
        3: [2, 4],
        4: [5, 2],
        5: [3, 1],
    };

    if (winsAgainst[player1move]?.includes(player2move)) {
        return 1;
    } else if (winsAgainst[player2move]?.includes(player1move)) {
        return 2;
    } else {
        return 0;
    }
}
