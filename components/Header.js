import headerStyles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div>
            <h2 className={headerStyles.title}>
                Latest <span>COVID-19</span> News
            </h2>
            <p className={headerStyles.description}>Keep up to date with the latest COVID-19 news</p>
        </div>
    )
}
