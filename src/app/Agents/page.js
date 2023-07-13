import React from "react";
import styles from "@/app/style.module.css";
import Link from "next/link";
import Image from "next/image";

export const getAgents = async () => {
    const response = await fetch('https://valorant-api.com/v1/agents');
    return response.json()


}

export default async function Agent() {

    const agents = await getAgents();


    return (
        <>
            <div className={styles.title}>
                <h1>Ajanlar<span>ve <br/><br/>ajanlar hakkında açıklama</span></h1>
            </div>
            <div className={styles.container}>
                {agents.data.map((agent) => (

                    <div className={styles.element} key={agent.id} >
                        <a  href={agent?.displayIcon} className={styles.aHref}>
                            <h3>{agent.displayName}</h3>

                            <Image src={agent.displayIconSmall} alt="Resim" width="110" height="120"/>

                            <h5>{agent.description}</h5>
                        </a>
                    </div>
                ))}
            </div>

        </>
    )
}