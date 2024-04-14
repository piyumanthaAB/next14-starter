import React from 'react';
import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/20726113/pexels-photo-20726113/free-photo-of-a-view-of-the-city-of-siena-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            className={styles.img}
            alt=""
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          aliquam voluptas aperiam possimus deleniti odit, architecto labore
          reprehenderit impedit? Aut corrupti repudiandae cum amet delectus
          aliquid illo doloremque nobis dolores.
        </p>
        <Link className={styles.link} href={'/blog/post'}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
