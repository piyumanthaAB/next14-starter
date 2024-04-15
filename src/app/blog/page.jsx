'use client';

import React from 'react';
import styles from './blog.module.css';
import PostCard from '@/components/postCard/postCard';
import Error from 'next/error';

// // FETCH DATA WITH API
// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   // const res = await fetch('https://jsonplaceholder.typicode.com/posts',{cache:"no-cache"});
//   // const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//   //   cache: 'force-cache',
//   // });
//   // const res = await fetch('https://jsonplaceholder.typicode.com/posts',{next:{revalidate:3600}}); // refresh after 1 hour

//   if (!res.ok) {
//     throw new Error('Something went wrong');
//   }

//   return res.json();
// };

const SingleBlogpage = async () => {
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default SingleBlogpage;
