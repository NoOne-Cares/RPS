import { useEffect } from 'react';
import { useSetAtom, useAtom } from 'jotai';
import { updateGame, GameCreatedByMe } from '../utils/store';
import { useGameSocket } from '../hook/useSocket';
import { useAccount } from 'wagmi';
import ClaimGame from './GamesToBeClaimed';
import ImageSelector from './ImageSelector';
import type { Game } from '../types/Types';
import { getMyGames, getPlayer2Move } from '../Helpers/APIHelper';

const CreateGame = () => {
    const { address } = useAccount();
    const [gameCreatedByMe, setGame] = useAtom(GameCreatedByMe);
    const updateMyGame = useSetAtom(updateGame);

    // ✅ Handle claiming logic
    const handleClaim = async (game: Game) => {
        if (!game.claimable || game.player2move === null) {
            try {
                const { player2Move } = await getPlayer2Move(game.contractAddress!);
                console.log("Fetched player2Move:", player2Move);

                if (player2Move !== null) {
                    updateMyGame({
                        contractAddress: game.contractAddress!,
                        player2move: player2Move,
                        claimable: true,
                    });
                }
            } catch (err) {
                console.error("Error fetching player2Move:", err);
            }
        }

        console.log("Claiming game:", game);
        // TODO: Add actual claim logic here
    };

    // ✅ Socket listener for second moves
    useGameSocket(address as `0x${string}`, {
        reciveSecondMove: (data) => {
            console.log('Second move received:', data);
            updateMyGame({
                contractAddress: data.contractAddress!,
                player2move: data.player2move,
                claimable: true,
            });
        },
    });

    // ✅ Fetch latest games on mount or address change
    useEffect(() => {
        if (!address) return;

        const fetchGames = async () => {
            try {
                const myGames = await getMyGames(address);
                console.log("Fetched my games:", myGames);
                setGame(myGames)
            } catch (err) {
                console.error("Error fetching my games:", err);
            }
        };

        fetchGames();
    }, [address]);

    return (
        <div>
            <ImageSelector />
            <ClaimGame games={gameCreatedByMe} onClaim={handleClaim} />
        </div>
    );
};

export default CreateGame;
