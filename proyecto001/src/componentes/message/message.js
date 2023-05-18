import styles from '@/styles/Home.module.css'
import { useContext } from 'react'
import { maincontextState } from '@/context/maincontextprovider'

export default function Message({ text }) {
    let context = useContext(maincontextState);
    let darkMode = context.darkMode;

    return (
        <>
            <span className={darkMode ? styles.dark : styles.light}>{ text }</span>
        </>
    )
}