import Link from 'next/link';
import { ConnectButton } from './ConnectButton';

export function Header() {
  return (
    <header>
      <nav>
        <Link href="/trade">Home</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/pool">Pool</Link>
      </nav>
      <div>
        <ConnectButton />
      </div>
    </header>
  );
}
