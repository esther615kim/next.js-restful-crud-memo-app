import headerStyles from '../styles/Header.module.css'
import React from "react";

export default function Header() {
    return (
        <div>
            <h5 className={headerStyles.title} >
                👨‍💻👨‍💻Next.js memo-app
            </h5>
        </div>
    )
}
