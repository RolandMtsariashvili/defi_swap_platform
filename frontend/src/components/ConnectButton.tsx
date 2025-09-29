'use client';

import { config } from '@/app/providers';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

export function ConnectButton() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({});
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <button onClick={() => disconnect()}>
        {address?.slice(0, 6)}...{address?.slice(-4)}
      </button>
    );
  }

  return <button onClick={() => connect({ connector: config.connectors[0] })}>Connect</button>;
}
