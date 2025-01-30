import Link from 'next/link';
import { useRouter } from 'next/router';
import LogoutButton from '../logout/LogoutButton';

export default function Header() {
  const router = useRouter();

  const isActive = (paths) => paths.includes(router.pathname);

    return (
        <header className="header">
            <div className="header-logo">
                <Link href="/home" style={{ textDecoration: 'none', color: 'inherit' }} passHref>
                    <img src="/assets/logo.png" alt="WizarlyWonders Logo" />
                </Link>
                <Link href="/home" style={{ textDecoration: 'none', color: 'inherit' }} passHref>
                    <span className="header-title">Wizarly Wonders</span>
                </Link>
            </div>
            <nav className="header-nav">
                <span>Spell Encyclopedia</span>
                <span>House Sorting Quiz</span>
                <span>Character Journal</span>
                <span>Wand Generator</span>
                <span>Howarts Legacy Hub</span>
            </nav>
            <LogoutButton/>     
        </header>
    );
  }