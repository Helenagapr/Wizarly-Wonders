import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/home.module.css"


function ExplorePage(){
    return(
        <div className={styles.opciones}>
            <div className={styles.info}>
                <img src="/assets/amigos.webp" alt="Varita magica"/>
                <p>3 Magical Friends</p>
            </div>
            <div>
                <img src="/assets/wizard.jpg" alt="Varita magica"/>
                <p>Spellbound Laughter</p>
            </div>
            <div>
                <img src="/assets/pociones.webp" alt="Varita magica" />
                <p>Laughing Potions</p>
            </div>
            <div>
                <img src="/assets/conjuro.jpg" alt="Varita magica" />
                <p>Everything Conjures</p>
            </div>
            <div>
                <img src="/assets/howardsLegacy.jpg" alt="Varita magica"/>
                <p>The Time is Magic!</p>
            </div>
        </div>
    )
}



function HomeSection(){
    return(
        <div className={styles.homepage}>
            <div className={styles.homebox}>
                <div className={styles.box}>
                    <div className={styles.recommend}>
                        <span className={styles.headerTitle}>Discoven new spells & master them anywhere!</span>
                        <p className={styles.subtitle}>Unlock your potencial now</p>
                        <button className={styles.button}>Start casting</button>
                    </div>
                    <img className={styles.imagen} src="/assets/varitaMagica.png" alt="Varita magica" width={460} height={300}/>
                </div>
                <span className={styles.title}>Explore Enchanted Spells</span> 
                <ExplorePage />
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