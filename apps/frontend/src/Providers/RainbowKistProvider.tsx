import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import config from '../rainbowKit'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

const RainbowkitProvider = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient();
    return (

        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export default RainbowkitProvider