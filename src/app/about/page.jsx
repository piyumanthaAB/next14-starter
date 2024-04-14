import React from 'react';
import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/20726113/pexels-photo-20726113/free-photo-of-a-view-of-the-city-of-siena-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={500}
          height={500}
        />
      </div> */}
      {/* <Image src="/about.png" alt="" width={500} height={500} /> */}

      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic in
          impedit tempora odio aperiam cum ab. Atque veritatis quo nobis
          molestias adipisci amet, tempore similique eveniet, nihil sequi
          repudiandae sunt.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image className={styles.img} src="/about.png" alt="about image" fill />
      </div>
    </div>
  );
};

export default AboutPage;
