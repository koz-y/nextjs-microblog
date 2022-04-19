import path from "path"
import fs from "fs"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "posts")

// mdファイル取りだし
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "")

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf-8")

    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data,
    }
  })
  return allPostsData

  // return allPastsData.sort((a,b) => {
  //     if (a.data < b.data){
  //         return 1;
  //     } else {
  //         return -1
  //     }
  // })
}
