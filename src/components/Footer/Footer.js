import React from 'react';
import { Link } from 'react-router-dom';
import { CURRENT_YEAR } from '../../config';

import styles from './footer.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Link to="/" className={styles.logo}>
                <img alt="nba logo" src="/images/nba_logo.png" />
            </Link>
            <div className={styles.right}>
                @NBA {CURRENT_YEAR} All right reserved.
            </div>
        </div>
    );
};

export default Footer;