import { useSimulateContract, useWriteContract } from 'wagmi';
import { parseEther } from 'viem';
import { getGameContractConfig } from '../Helpers/gameContract';

export function usePlay(contractAddress: `0x${string}`, _c2: number, stake: number) {
    const { data: simulation, error: simulationError, status } = useSimulateContract({
        ...getGameContractConfig(contractAddress),
        functionName: 'play',
        args: [_c2],
        value: parseEther(stake.toString()),
    });

    const { writeContractAsync, isPending } = useWriteContract();

    const write = async () => {
        if (!simulation) {
            throw new Error("Simulation not ready or failed");
        }
        return writeContractAsync(simulation.request);
    };

    return { write, isPending, simulationError, simulationStatus: status };
}
