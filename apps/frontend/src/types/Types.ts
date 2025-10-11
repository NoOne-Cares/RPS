export type Option = {
    label: string;
    value: number;
    image: string;
};

//type to store the salt and move in local storage
export type CreatedGame = {
    contractAddress: string
    move: number
    salt: string
}

//store the user session in perstant in in local storage
export type User = {
    publicKey: null | string
    isSignedIn: boolean
    signature: null | string
}

// all the games the user has played or participated
export type Game = {
    contractAddress: string
    value: number
    player1: string
    player2: string
    player1move: string
    player2move: null | number
    createdAt: number
    winner: null | string
}

export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';