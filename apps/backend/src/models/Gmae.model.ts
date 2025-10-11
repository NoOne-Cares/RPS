import mongoose, { Schema, Document, model } from 'mongoose';

export interface IGame extends Document {
    contractId: string;
    player1: string;
    player2: string;
    player1Move: string | number;
    player2Move?: number;
    gameStatus: 'in-progress' | 'completed';
    stake: Number,
    winner?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const GameSchema: Schema<IGame> = new Schema(
    {
        contractId: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        player1: {
            type: String,
            required: true,
            trim: true,
        },
        player2: {
            type: String,
            required: true,
            trim: true,
        },
        player1Move: {
            type: String || Number,
            required: true,
            trim: true,
        },
        player2Move: {
            type: Number,
            min: 1,
            max: 5,
            default: null,
        },
        stake: {
            type: Number,
            required: true,
            min: 0,
            default: 0,
        },
        gameStatus: {
            type: String,
            enum: ['in-progress', 'completed'],
            default: 'in-progress',
        },
        winner: {
            type: String,
            default: null,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);
const getGamesByPlayer2 = AsyncHandler(async (req, res) => {
    const { player } = req.body;

    if (!player) {
        return res.status(400).json({ error: 'Missing player address' });
    }

    if (!ethers.isAddress(player)) {
        return res.status(400).json({ error: 'Invalid Ethereum address' });
    }

    const games = await Game.find({ player2: player }).exec();

    return res.status(200).json(games);
});

export const Game = model<IGame>('Game', GameSchema);
