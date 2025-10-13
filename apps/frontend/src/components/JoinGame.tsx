import JoinGameCard from "./JoinGameCard"
import type { Game } from "../types/Types";
import { useGameSocket } from "../hook/useSocket";
import { useAccount } from "wagmi";
import { useAtom } from "jotai";
import { GameCretedForMe } from "../utils/store";
import { getSocket } from "../utils/Socket";
import { getGamesByPlayer2, secondMove } from "../Helpers/APIHelper";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { usePlay } from "../hook/usePlay";

const JoinGame = () => {
    const { address } = useAccount()
    const [gamesForMe, setGamesForMe] = useAtom(GameCretedForMe)
    const [choice, setChoice] = useState<number>(0)
    const [stake, setStake] = useState<number>(0)
    const [contract, setContract] = useState<`0x${string}`>()
    const notifySuccess = (msg: string) => toast.success(msg)
    const notifyError = (msg: string) => toast.error(msg)
    const { write: play } = usePlay(contract ? contract : "0xjkaasjdkfajfdkf", choice, stake);
    const handleGameSubmit = async (game: Game, selected: number) => {

        console.log("Submitted move:", selected, "for game:", game.contractAddress);
        if (selected != 0 && selected < 6) {
            setChoice(selected)
            setStake(game.value)
            setContract(game.contractAddress)
            const socket = getSocket();
            game.player2move = selected
            socket?.emit("secondmove", game)

            try {
                const tx = await play()
                console.log(tx)
                await secondMove(game.contractAddress!, selected)
                setGamesForMe(prevGames =>
                    prevGames.filter(prev => game.contractAddress !== prev.contractAddress)
                )

                notifySuccess("game move send successsfully")
            } catch (error) {
                console.log(error)
                notifyError("fail to send move")
            }

        } else {
            notifyError("Plese slect a value")
        }
    };
    useEffect(() => {
        const fectGmae = async () => {
            try {
                const data = await getGamesByPlayer2(address!)
                setGamesForMe(data)
            } catch (error) {
                console.log(error)
            }
        }
        fectGmae()
    }, [address, setGamesForMe])


    useGameSocket(address as `0x${string}`, {
        reciveCreatedGame: (data) => {
            setGamesForMe((prev) => {
                const exists = prev.some(game => game.contractAddress === data.contractAddress);
                return exists ? prev : [...prev, data];
            });
        },
    });


    return (
        < div className="space-y-2 pt-3">
            <ToastContainer />
            <JoinGameCard games={gamesForMe} handleSubmit={handleGameSubmit} />

        </div>
    )
}

export default JoinGame