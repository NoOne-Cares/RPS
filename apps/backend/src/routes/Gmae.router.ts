import { Router } from "express";
import { Game } from "../models/Gmae.model";
import { requireSiweAuth } from "../middleware/Auth.middleware";
import { createGame, decideWiner, getFinishedGamesByPlayer, getGamesByPlayer2, getMyGames, secondMove } from "../controllers/Game.controler";

const GameRouter = Router()

GameRouter.route('/creategame').post(requireSiweAuth, createGame)
GameRouter.route('/secondmove').post(requireSiweAuth, secondMove)
GameRouter.route('/getallgames').get(requireSiweAuth, getFinishedGamesByPlayer)
GameRouter.route('/gmaemyme').get(requireSiweAuth, getMyGames)
GameRouter.route('/revel').get(requireSiweAuth, decideWiner)
GameRouter.route('/gameforme').get(requireSiweAuth, getGamesByPlayer2)


export default GameRouter