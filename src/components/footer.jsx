import styles from "../styles/footer.module.css"

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <div className={styles.box}>
                <div className={styles.footerLogo}>
                    <img src="/assets/logo.png" alt="WizarlyWonders Logo" width={30} height={30}/>
                    <span className={styles.headerTitle}>Wizarly Wonders</span>
                </div>
                <span className={styles.subtitle}>Follow the magic</span>
                <div className={styles.icones}>
                    <img src="/assets/varita.png" alt="varita logo" width={30} height={30}/>
                    <img src="/assets/twiteer.png" alt="Twitter Logo" width={30} height={30}/>
                    <img src="/assets/insta.png" alt="Instagram Logo" width={30} height={30}/>
                </div>
            </div>
            <div className={styles.footerContact}>
                <div className={styles.boxes}>
                    <span className={styles.subtitle}>Enchantments</span>
                    <p>About Magic</p>
                    <p>Careers in</p>
                    <p>Enchantment</p>
                </div>
                <div className={styles.boxes}>
                    <span className={styles.subtitle}>Enchanted</span>
                    <p>For Enchanters</p>
                    <p>Spellcasting Suppliers</p>
                    <p>Enchantment Exchange</p>
                </div>
                <div className={styles.boxes}>
                    <span className={styles.subtitle}>Ench</span>
                    <p>Support Enchantment</p>
                    <p>App</p>
                </div>
            </div>
        </div>
        <div className={styles.footerBottom}>
            <p>© 2025 Wizardly Wonders. Todos los derechos reservados</p>
        </div>
        <div className={styles.opciones}>
            <p>Privacy Policy</p>
            <p>terms of Service</p>
            <p>Contacts Us</p>
            <p>About Us</p>
        </div>
      </footer>
    );
  }