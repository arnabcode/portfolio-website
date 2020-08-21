import React from "react"
import Post from "./Post"
import Title from "../Title"
import { IoMdArrowRoundForward } from "react-icons/io"
import { Link } from "gatsby"

const SeeAll = () => {
  return (
    <div className="alink">
      <Link to={`/blog`} className="post-body">
        See all <IoMdArrowRoundForward />
      </Link>
    </div>
  )
}
const Posts = ({ posts, title, indexPage }) => {
  return (
    <>
      {!indexPage && (
        <section className="posts">
          <h3 className="posts-title">{title}</h3>
          <div className="posts-center">
            <article>
              {posts.map(post => {
                return <Post key={post.id} {...post}></Post>
              })}
            </article>
            {/* <article>
          <Banner />
        </article> */}
          </div>
        </section>
      )}
      {indexPage && (
        <div className="section">
          <Title title="Recent Blogs" />
          <article className="post-container">
            {posts.map(post => {
              return <Post key={post.id} {...post} indexPage></Post>
            })}
            <SeeAll />
          </article>
        </div>
      )}
    </>
  )
}

export default Posts
