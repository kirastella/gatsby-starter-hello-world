import * as styles from "../styles/about.module.css"
import React from 'react'
import Layout from "../components/Layout"

export default function About() {
    return (
        <Layout>
        <div className={styles.aboutdiv}>
            <h1>Om Hundeland</h1>
            <p>Hundeland er et hundeunivers, hvor vi ønsker at give jer hundeejere de bedste råd og vejledning til og om jeres bedste venner</p> 
            <p>Vi brænder for, at alle hunde i Danmark skal have det godt og have forudsætningerne for et godt og trygt liv.</p>   
        </div>
        <section className={styles.gridflex}>
        <div className={styles.gridbox}>
            <h3>Vores historie</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, culpa.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas natus assumenda 
                nobis ea minus sed illum neque sapiente commodi voluptatem placeat, autem recusandae 
                voluptatibus molestiae itaque necessitatibus vel, eligendi ut unde dolores modi aspernatur 
                dolor odio rerum! Provident praesentium nemo cumque recusandae, velit optio, accusamus aperiam quo 
                aliquam necessitatibus consequatur.</p>

        </div>
        <div className={styles.gridbox}>
            <h3>Personale</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, culpa.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas natus assumenda 
                nobis ea minus sed illum neque sapiente commodi voluptatem placeat, autem recusandae 
                voluptatibus molestiae itaque necessitatibus vel, eligendi ut unde dolores modi aspernatur 
                dolor odio rerum! Provident praesentium nemo cumque recusandae, velit optio, accusamus aperiam quo 
                aliquam necessitatibus consequatur.</p>

        </div>
        <div className={styles.gridbox}>
            <h3>Find os</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, culpa.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas natus assumenda 
                nobis ea minus sed illum neque sapiente commodi voluptatem placeat, autem recusandae 
                voluptatibus molestiae itaque necessitatibus vel, eligendi ut unde dolores modi aspernatur 
                dolor odio rerum! Provident praesentium nemo cumque recusandae, velit optio, accusamus aperiam quo 
                aliquam necessitatibus consequatur.</p>


        </div>
        </section>
        </Layout>
    )
}
