'use client';
import Link from 'next/link';
import React from 'react';
import styles from './NavBarStyles.module.css';

const NavBar = () => {
  return (
    <>
      <nav className={styles.NavBar}>
        <Link className={styles.link} href={'/'}>
          Home
        </Link>
        <Link className={styles.link} href={'/createNote'}>
          Create Note
        </Link>
        <Link className={styles.link} href={'/list_of_invitations'}>
          List of invitations
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
