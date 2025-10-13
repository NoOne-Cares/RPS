// src/hooks/useSolve.ts
import { useSimulateContract, useWriteContract } from 'wagmi';
import { getGameContractConfig } from '../Helpers/gameContract';

export function useSolve(contractAddress: `0x${string}`, _c1: number, _salt: number) {
    const { data: simulation } = useSimulateContract({
        ...getGameContractConfig(contractAddress),
        functionName: 'solve',
        args: [_c1, _salt],
    });

    const { writeContractAsync, isPending } = useWriteContract();

    const write = async () => {
        if (!simulation) return;
        return writeContractAsync(simulation.request);
    };

    return { write, isPending };
}

// import { useSolve } from '../hooks/useSolve';

// const SolveComponent = ({ contractAddress }: { contractAddress: `0x${string}` }) => {
//   const { write: solve, isPending } = useSolve(contractAddress, 1, 123456);

//   return <button onClick={solve} disabled={isPending}>Solve</button>;
// };

