import { Button } from '@comosus/ui';
import Link from 'next/link';

export function Navbar() {
  const links = [
    {
      label: 'Community',
      href: '/community',
    },
    {
      label: 'About Project',
      href: '/about',
    },
    {
      label: 'Log in',
      href: '/login',
    },
  ];

  return (
    <nav className="fixed flex w-full max-w-7xl justify-between p-4">
      <div></div>
      <ul className="flex items-center gap-12">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
        <Link href="/register">
          <Button variant="gradient">Register</Button>
        </Link>
      </ul>
    </nav>
  );
}
