import React from 'react';
import styles from './singlePost.module.css';
import Image from 'next/image';

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          fill
          className={styles.img}
          alt=""
          src="https://images.pexels.com/photos/20726113/pexels-photo-20726113/free-photo-of-a-view-of-the-city-of-siena-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            width={50}
            height={50}
            className={styles.avatar}
            alt=""
            src="https://images.pexels.com/photos/20726113/pexels-photo-20726113/free-photo-of-a-view-of-the-city-of-siena-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author </span>
            <span className={styles.detailValue}>Published</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Terry Jefferson</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          nulla atque eligendi nobis quo nam possimus ullam, exercitationem
          dignissimos, natus quaerat dolorem minus repudiandae excepturi facilis
          consequuntur a, iusto quasi.
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
