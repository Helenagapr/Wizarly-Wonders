import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/home.module.css"

function HomeSection(){
    return(
        <div className={styles.homepage}>
            <div className={styles.homebox}>
                <div className={styles.recommend}>
                    <span className={styles.headerTitle}>Discoven new spells & master them anywhere!</span>
                    <p className={styles.subtitle}>Unlock your potencial now</p>
                    <button className={styles.button}>Start casting</button>
                </div>
                <img src="/assets/varitaMagica.png" alt="Varita magica" width={460} height={300}/>
                
            </div>
        </div>
        
    )
}


export default function Home(){
    return(
        <>
            <Header />
            <HomeSection />
            <Footer />
        </>
        
         
    )   
}