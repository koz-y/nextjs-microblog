import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Layout from "../components/layout"

import styles from "../styles/Home.module.css"
import utileStyles from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={utileStyles.headingMd}>
        <p>本日は晴天なり</p>
      </section>

      <section className={utileStyles.headingMd}>
        <h2>📝 Blog Sample</h2>

        <div className="grid grid-cols-2 gap-4">
          <article>
            <Link href="/posts/firstPost">
              <img src="/images/thumbnail01.jpg"></img>
            </Link>
            <Link href="/posts/firstPost">
              <a>
                Amet esse dolor anim ipsum consectetur ex ullamco Lorem consequat tempor.{" "}
              </a>
            </Link>
            <br />
            <small>February 23, 2020 </small>
          </article>
          <article>
            <Link href="/posts/firstPost">
              <img src="/images/thumbnail01.jpg"></img>
            </Link>
            <Link href="/posts/firstPost">
              <a>
                Amet esse dolor anim ipsum consectetur ex ullamco Lorem consequat tempor.{" "}
              </a>
            </Link>
            <br />
            <small>February 23, 2020 </small>
          </article>
          <article>
            <Link href="/posts/firstPost">
              <img src="/images/thumbnail01.jpg"></img>
            </Link>
            <Link href="/posts/firstPost">
              <a>
                Amet esse dolor anim ipsum consectetur ex ullamco Lorem consequat tempor.{" "}
              </a>
            </Link>
            <br />
            <small>February 23, 2020 </small>
          </article>
          <article>
            <Link href="/posts/firstPost">
              <img src="/images/thumbnail01.jpg"></img>
            </Link>
            <Link href="/posts/firstPost">
              <a>
                Amet esse dolor anim ipsum consectetur ex ullamco Lorem consequat tempor.{" "}
              </a>
            </Link>
            <br />
            <small>February 23, 2020 </small>
          </article>
        </div>
      </section>
    </Layout>
  )
}
