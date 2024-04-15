import React from 'react';
import styles from './postuser.module.css';
import { getUser } from '@/lib/data';

// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );

//   if (!res.ok) {
//     throw new Error('Something went wrong');
//   }

//   return res.json();
// };

const Postuser = async ({ userId }) => {
  //   const user = await getData(userId);

  const user = await getUser(userId);

  return (
    <div>
      <div className={styles.detailText}>
        <span className={styles.detailTitle}>Author </span>
        <span className={styles.detailValue}>{user.username}</span>
      </div>
    </div>
  );
};

export default Postuser;
