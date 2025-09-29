'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { metaMask } from 'wagmi/connectors';

export const config = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
  connectors: [metaMask()],
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
