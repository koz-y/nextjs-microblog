import Head from "next/head"
import Image from "next/image"

import styles from "./layout.module.css"
import ulilStyles from "../styles/utils.module.css"

const name = "MyName"

export const siteTitle = "Next.js blog"

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header className={styles.header}>
        <img
          className={ulilStyles.borderCircle}
          src="/images/profile.png"
          alt="profile"
          height="288 px"
        ></img>
        <h1 className="text-3xl font-bold">{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
