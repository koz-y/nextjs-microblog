import { getPageFiles } from "next/dist/server/get-page-files"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Layout from "../components/layout"

import { getPostsData } from "../lib/post"

import styles from "../styles/Home.module.css"
import utileStyles from "../styles/utils.module.css"

export async function getStaticProps() {
  const allPostData = getPostsData()
  // console.log(allPostData)

  return {
    props: {
      allPostData,
    },
  }
}

export default function Home({ allPostData }) {
  return (
    <Layout>
      <section className={utileStyles.headingMd}>
        <p>本日は晴天なり</p>
      </section>

      <section className={utileStyles.headingMd}>
        <h2>📝 Blog Sample</h2>

        <div className="grid grid-cols-2 gap-4">
          {allPostData.map(({ id, date, title, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={thumbnail}></img>
              </Link>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
