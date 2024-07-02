import React from "react";

import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()}dashboadr do meu site pessoal</p>
        </footer>
    );
};

export default Footer;