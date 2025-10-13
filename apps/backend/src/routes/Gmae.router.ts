import { Router } from "express";
import { requireSiweAuth } from "../middleware/Auth.middleware";
import { createGame, decideWiner, getFinishedGamesByPlayer, getGamesByPlayer2, getMyGames, getplayer2move, secondMove } from "../controllers/Game.controler";

const GameRouter = Router()

GameRouter.route('/creategame').post(requireSiweAuth, createGame)
GameRouter.route('/secondmove').post(requireSiweAuth, secondMove)
GameRouter.route('/getallgames').get(requireSiweAuth, getFinishedGamesByPlayer)
GameRouter.route('/gmaemyme').get(getMyGames)
GameRouter.route('/revel').get(requireSiweAuth, decideWiner)
GameRouter.route('/gameforme').get(requireSiweAuth, getGamesByPlayer2)
GameRouter.route('getplayer2move').get(requireSiweAuth, getplayer2move)

export default GameRouter