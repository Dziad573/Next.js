'use client';
import { useState } from 'react';
import styles from './LanguageSelector.module.css';

export function LanguageSelector() {

    const [language, setLanguage] = useState("en");

    return (
        <>
            <p>wybrano: {language}</p>
            <select className={styles.languageSelector}
                onChange={(e) => setLanguage(e.target.value)}
            >
                <option value="en">English</option>
                <option value="pl">Polski</option>
            </select>
        </>
    );
}