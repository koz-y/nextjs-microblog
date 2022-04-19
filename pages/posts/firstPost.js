import Link from "next/link"
import Head from "next/head"

const firstPost = () => {
  return (
    <div>
      <Head>
        <title>最初の投稿</title>
      </Head>
      <h1>最初の投稿</h1>
      <Link href="/">Homeへ戻る</Link>
    </div>
  )
}

export default firstPost
