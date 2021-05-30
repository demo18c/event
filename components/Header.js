import React, { useContext } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import Search from './Search';
import AuthContext from '@/context/AuthContext';

const Header = () => {
	const { user, logout } = useContext(AuthContext);
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href="/">
					<a>DJ Events</a>
				</Link>
			</div>
			<Search />
			<nav>
				<ul>
					{/* <li>
						<Link href="/events">
							<a>Events</a>
						</Link>
					</li> */}
					{user ? (
						//if logged in
						<>
							<li>
								<Link href="/events">
									<a>Events</a>
								</Link>
							</li>
							<li>
								<Link href="/events/add">
									<a>Add Event</a>
								</Link>
							</li>
							<li>
								<Link href="/accounts/dashboard">
									<a>Dashboard</a>
								</Link>
							</li>
							<li>
								<button onClick={() => logout()} className="btn-secondary btn-icon">
									<FaSignOutAlt /> Logout
								</button>
							</li>
						</>
					) : (
						//if logged out
						<>
							<li>
								<Link href="/accounts/login">
									<a className="btn-secondary btn-icon">Login In</a>
								</Link>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
