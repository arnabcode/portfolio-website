import React from "react"
import Post from "./Post"
import { IoMdArrowRoundForward } from "react-icons/io"
import { Link } from "gatsby"
import styled from "styled-components"
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
        <Section>
          <Title children="Recent Blogs" />
          <article className="post-container">
            {posts.map(post => {
              return <Post key={post.id} {...post} indexPage></Post>
            })}
            <SeeAll />
          </article>
        </Section>
      )}
    </>
  )
}

const Line = styled.div`
  width: 5rem;
  height: 0.25rem;

  background: #2988de;
  /* margin-left: auto; */
  margin-right: auto;
`

const Title = styled.h2`
  margin-left: 2rem;
  position: absolute;
  top: 2rem;
`
const ServicesContainer = styled.div``

const Section = styled.section`
  padding: 5rem 0 0 0;
  background: offwhite;
  position: relative;

  height: 100vh;
`

export default Posts
