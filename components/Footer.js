import React from 'react';
import Link from 'next/link';

import styles from '../styles/Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>dacac</p>
			<Link href="/about">About This</Link>
		</footer>
	);
};

export default Footer;
