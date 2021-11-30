// import Link from 'next/link'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home({posts}) {
  console.log(posts);

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map(post =>(
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

// Server Side Rendering - getServerSideProps
// export const getServerSideProps = async ()=>{
//   const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10')
//               .then((response) => response.json())
//   // const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10')
//   // const posts = await res.json();
//   return {
//     props: {
//       posts: posts,
//     }
//   }
// }

// Static Site Generation -getStaticProps
export const getStaticProps = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10')
  const posts = await res.json();

  return {
    props: {
      posts: posts,
    },
    revalidate: 20
  }
}