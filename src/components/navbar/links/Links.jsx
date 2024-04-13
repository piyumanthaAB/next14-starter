'use client';

import React, { useState } from 'react';
import styles from './links.module.css';
import NavLink from './navLink/navLink';

const urlList = [
  {
    title: 'Homepage',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];
const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {urlList.map((url) => (
          <NavLink item={url} key={url.title} />
        ))}

        {session ? (
          isAdmin && (
            <>
              <NavLink item={{ title: 'Admin', path: '/admin' }} />
              <button className={styles.logout}>logout</button>
            </>
          )
        ) : (
          <NavLink item={{ title: 'Login', path: '/login' }} />
        )}
      </div>
      <button onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {urlList.map((url) => (
            <NavLink item={url} key={url.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;