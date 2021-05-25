import React from 'react';
// import { FaExclamationTriangle } from 'react-icons';
import Layout from '../components/Layout';
import styles from '../styles/404.module.css';

const NotFound = () => {
	return (
		<Layout title="Page Not FOund">
			<div className={styles.error}>
				<h1>
					{/* <FaExclamationTriangle /> */}
					404
				</h1>
				<h4>Nothing to see</h4>
			</div>
		</Layout>
	);
};

export default NotFound;
