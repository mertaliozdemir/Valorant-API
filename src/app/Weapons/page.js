import React from "react";
import styles from "@/app/style.module.css";
import Link from "next/link";
import Image from "next/image";

const getWeapons = async () => {
    const response2 = await fetch('https://valorant-api.com/v1/weapons');
    return response2.json()

}


export default async function Weapons() {
    const weapons = await getWeapons();


    return (
        <>
            <div>
            <h1 className={styles.title}>Silahlar <span>ve <br/> <br/>silahlar ile ilgili bilgiler</span></h1>
            </div>

            <div className={styles.container}>

                {weapons.data.map((weapon) => (
                    <div className={styles.element}>
                        <Link href={weapon.displayIcon} className={styles.aHref}>
                            <h4>{weapon.displayName}</h4>
                            <Image className={styles.weaponImg} src={weapon.displayIcon} alt="Silah" width={120} height={90}/>
                            <p>Fire Rate :{weapon?.weaponStats?.fireRate}
                                <br/>
                                MG Size : {weapon?.weaponStats?.magazineSize}
                                <br/>
                                RD Time : {weapon?.weaponStats?.reloadTimeSeconds}
                                <br/>
                                <br/>
                                Category : {weapon?.shopData?.category}
                            </p>


                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}