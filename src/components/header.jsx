import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "../styles/header.module.css"

export default function Header() {
  const router = useRouter();

  const isActive = (paths) => paths.includes(router.pathname);

    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <Link href="/home" style={{ textDecoration: 'none', color: 'inherit' }} passHref>
                    <img src="/assets/logo.png" alt="WizarlyWonders Logo" width={30}
                        height={30}/>
                </Link>
                <Link href="/home" style={{ textDecoration: 'none', color: 'inherit' }} passHref>
                    <span className={styles.headerTitle}>Wizarly Wonders</span>
                </Link>
            </div>
            <nav className={styles.headerNav}>
                <span>Enciclopedia de Hechizos</span>
                <span>Casa de la selección de Quiz</span>
                <span>Diario de Personajes</span>
                <span>Generador de varitas</span>
                <span>Recetas de pociones</span>
                <span>Howarts Legacy Hub</span>
            </nav>   
        </header>
    );
  }