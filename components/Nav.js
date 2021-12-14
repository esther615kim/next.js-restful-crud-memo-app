import navStyles from '../styles/Nav.module.css'; //변수명 마음대로 커이
import Link from 'next/link';
import React from "react";

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/message">Message</Link>
                </li>
                <li>
                    <Link href="/">News API</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
