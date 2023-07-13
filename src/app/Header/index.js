import React from "react";
import styles from "./style.module.css"
import Link from "next/link";

export default function Header() {
    return (
        <>


            <nav className={styles.navbar}>
                <Link href="/">
                    <header className={styles.elementHome}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/1088px-Valorant_logo_-_pink_color_version.svg.png" alt="Logo" height="100" width="140"/>
                    </header>
                </Link>
                <div className={styles.headerPhoto}>
                    <img className={styles.headerPhoto2} src="https://cdn-gpimp.nitrocdn.com/vTzoluTzZTLkHWokIofpiwxZUqCsFqqq/assets/images/optimized/rev-9f0df8c/wp-content/uploads/2020/05/valorantbanner.png" alt=""/>
                </div>
                <ul className={styles.navbarUl}>
                    <li className={styles.navbarLi}>
                        <Link href="/">
                            <button className={styles.navbarButton}>Anasayfa</button>
                        </Link>
                    </li>
                    <li className={styles.navbarLi}>
                        <Link href="../Agents">
                            <button className={styles.navbarButton}>Ajanlar</button>

                        </Link>
                    </li>
                    <li className={styles.navbarLi}>
                        <Link href="../Maps">
                            <button className={styles.navbarButton}>Haritalar</button>

                        </Link>
                    </li>
                    <li className={styles.navbarLi}>
                        <Link href="../Weapons">
                            <button className={styles.navbarButton}>Silahlar</button>

                        </Link>
                    </li>
                    <li className={styles.navbarLi}>
                        <Link href="../info">
                            <button className={styles.navbarButton}>Bilgi</button>

                        </Link>
                    </li>
                </ul>
            </nav>
        </>

    )
}