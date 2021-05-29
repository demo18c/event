import React from 'react';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import { parseCookies } from '@/helpers/index';
import { API_URL } from '@/config/index';

import styles from '@/styles/Dashboard.module.css';

import DashboardEvent from '@/components/DashboardEvent';

export async function getServerSideProps({ req }) {
	const { token } = parseCookies(req);

	const res = await fetch(`${API_URL}/events/me`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`
		}
	});

	const events = await res.json();
	return {
		props: {
			events,
			token
		}
	};
}

const Dashboard = ({ events, token }) => {
	const router = useRouter();

	const deleteEvent = async id => {
		const res = await fetch(`${API_URL}/events/${id}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		const data = await res.json();

		if (!res.ok) {
			toast.error(data.message);
		} else {
			router.reload('/events');
		}
	};

	return (
		<Layout title="User Dashboard">
			<div className={styles.dash}>
				<h1>Dasboard</h1>
				<h3>My Events</h3>
				{events.map(evt => (
					<DashboardEvent key={evt.id} evt={evt} handleDelete={deleteEvent} />
				))}
			</div>
		</Layout>
	);
};

export default Dashboard;
