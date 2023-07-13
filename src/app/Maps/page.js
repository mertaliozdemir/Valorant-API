import React from "react";
import styles from "@/app/style.module.css";
import Link from "next/link";
import Image from "next/image";

const getMaps = async () => {
    const response3 = await fetch('https://valorant-api.com/v1/maps');
    return response3.json()

}
export default async function Maps() {
    const maps = await getMaps();

    return (
        <>
            <div>
                <h1 className={styles.title}>Oyunun haritaları <span>ve <br/><br/> haritaların Splash kodları</span>
                </h1>
            </div>
            <div className={styles.container}>
                {maps.data.map((harita) => (

                    <div className={styles.element}>
                        <Link href={harita.splash} className={styles.aHref}>
                            <h4>{harita.displayName}</h4>

                            <img src={harita.displayIcon} alt="" width="100" height="100"/>

                            <h5>{harita.uuid}</h5>
                        </Link>

                    </div>
                ))}
            </div>
        </>
    )
}