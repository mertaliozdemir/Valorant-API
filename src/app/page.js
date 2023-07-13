import styles from "@/app/style.module.css";
export default function Homepage() {

    return (
        <>
            <div className={styles.title}>
                <h1>Mücadeleye hazır mısın? <span>O zaman Ajanını ve silahını seç, mücadeleye başla.</span></h1>
            </div>
            <div>
                <img className={styles.homePhoto} src="https://wallpapercave.com/dwp2x/wp6161894.jpg" alt="wallpaper"/>
            </div>

        </>
    )
}