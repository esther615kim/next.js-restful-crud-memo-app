import styles from '../styles/Layout.module.css'; // 스타일스로 작명해도 괜찮음?
import React from 'react'
import Nav from './Nav';
import Header from './Header';

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <Header />
            <div className={styles.container}>
                <main className={styles.main}>{children}</main>
            </div>
        </>
    )
}
