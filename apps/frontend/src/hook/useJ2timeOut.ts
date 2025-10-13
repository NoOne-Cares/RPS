// src/hooks/useJ2Timeout.ts
import { useSimulateContract, useWriteContract } from 'wagmi';
import { getGameContractConfig } from '../Helpers/gameContract';

export function useJ2Timeout(contractAddress: `0x${string}`) {
    const { data: simulation } = useSimulateContract({
        ...getGameContractConfig(contractAddress),
        functionName: 'j2Timeout',
    });

    const { writeContractAsync, isPending } = useWriteContract();

    const write = async () => {
        if (!simulation) return;
        return writeContractAsync(simulation.request);
    };

    const execute = async () => {
        await write();
    };

    return { execute, isPending };
}





// import { useJ2Timeout } from '../hooks/useJ2Timeout';

// const J2TimeoutComponent = ({ contractAddress }: { contractAddress: `0x${string}` }) => {
//   const { execute: triggerJ2Timeout, isPending } = useJ2Timeout(contractAddress);

//   return (
//     <button onClick={triggerJ2Timeout} disabled={isPending}>
//       Trigger J2 Timeout
//     </button>
//   );
// };
