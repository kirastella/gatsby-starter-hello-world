import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"



export default function Home() {
  
  return (
    <Layout>
    <section className={styles.homestart}>
    <h1>Hundeland</h1>
    <h3>Velkommen til Danmarks størreste hundeunivers</h3>
    <p>Med tusinde vis af kvalitetsvare til lave priser, er hundeland det helt rigtige valg for dig og din bedste ven!</p>
    </section>
    <section className={styles.photogrid}>
    <img src="/bordercollie.jpeg" alt="bordercollie" style={{maxWidth: '350px'}} />
    <img src="/browndog.jpeg" alt="dog"  style={{maxWidth: '350px'}} />
    <img src="/somedog.jpeg" alt="dog"  style={{maxWidth: '350px'}} />
    </section>
    </Layout>
  )
}

