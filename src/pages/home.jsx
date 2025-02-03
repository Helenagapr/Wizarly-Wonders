import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/home.module.css"


function ExplorePage(){
    return(
        <div className={styles.opciones}>
            <div className={styles.info}>
                <img src="/assets/amigos.webp" alt="Fotografia de Ron, Hermione y Harry"/>
                <p style={{ fontWeight: "bold", color: "#8305F3", textShadow: "1px 1px 2px black"}}>Quiz Casa de Howarts</p>
                <p>Gryffindor, Hufflepuff,<br />Ravenclaw y Slytherin</p>
            </div>
            <div className={styles.info}>
                <img src="/assets/wizard.jpg" alt="Varita magica"/>
                <p style={{ fontWeight: "bold", color: "#8305F3", textShadow: "1px 1px 2px black"}}>Diario de Personajes</p>
                <p>Biografías, poderes y <br />curiosidades de los <br />personajes del universo <br />mágico</p>
            </div>
            <div className={styles.info}>
                <img src="/assets/pociones.webp" alt="Varita magica" />
                <p style={{ fontWeight: "bold", color: "#8305F3", textShadow: "1px 1px 2px black" }}>Recetas de pociones</p>
                <p>Desde elixires curativos<br />hasta brebajes prohibidos:<br />todo sobre las pociones</p>
            </div>
            <div className={styles.info}>
                <img src="/assets/conjuro.jpg" alt="Varita magica" />
                <p style={{ fontWeight: "bold", color: "#8305F3", textShadow: "1px 1px 2px black" }}>Enciclopedia de Hechizos</p>
                <p>Desde Alohomora hasta<br />Wingardium Leviosa, conoce <br />todos los encantamientos</p>
            </div>
            <div className={styles.info}>
                <img src="/assets/howardsLegacy.jpg" alt="Varita magica"/>
                <p style={{ fontWeight: "bold", color: "#8305F3", textShadow: "1px 1px 2px black" }}>Howarts Legacy Hub</p>
                <p>Noticias, trucos y consejos para <br />tu aventura en el mundo mágico</p>
            </div>
            <div className={styles.info}>
                <img src="/assets/varita.webp" alt="Varita magica"/>
                <p style={{ fontWeight: "bold", color: "#8305F3", textShadow: "1px 1px 2px black" }}>Generador de varitas</p>
                <p>La varita elige al mago… <br />pero aquí puedes descubrir la tuya</p>
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
                        <span className={styles.headerTitle}>¡Descubre nuevos hechizos y dominarlos<br /> en cualquier lugar!</span>
                        <p className={styles.subtitle}>Desbloquea tu potencial ahora</p>
                        <button className={styles.button}>Comenzar a lanzar</button>
                    </div>
                    <img className={styles.imagen} src="/assets/varitaMagica.png" alt="Varita magica" width={500} height={340}/>
                </div>
                <span className={styles.title}>Explora nuestras novedades</span> 
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