import headerStyles from '../styles/Header.module.css'
import React from "react";

export default function Header() {
    return (
        <div>
            <h6 className={headerStyles.title} >
                👨‍💻Next.js app
            </h6>
        </div>
    )
}
