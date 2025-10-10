import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
    contratId: {
        type: String,
        required: true,
        unique: true,
    },
    player1: {
        type: String,
        required: true,

    },
    player2: {
        type: String,
        required: true,

    },
    player1move: {
        type: String,
    },
    player2move: {
        type: String,
    },
    gameStatus: {
        type: String
    }
}, {
    timestamps: true
})

export const Game = mongoose.model("Game", GameSchema)