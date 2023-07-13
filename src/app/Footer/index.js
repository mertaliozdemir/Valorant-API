import React from "react";
import styles from "./style.module.css"
import Link from "next/link";


export default function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
            <Link href="https://github.com/mertaliozdemir" className={styles.footerR}>
            <h4>Desing by M.A.Ö 💞</h4>
            </Link>
            </div>
        </footer>
    )
}