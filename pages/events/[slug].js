import React from 'react';
import { API_URL } from '@/config/index';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import styles from '@/styles/Eve.module.css';

// export async function getStaticPaths() {
// 	return {
// 		paths: [{ params: {} }]
// 	};
// }

export async function getServerSideProps({ query: { slug } }) {
	console.log(slug);
	const res = await fetch(`${API_URL}/api/events/${slug}`);
	const events = await res.json();
	return {
		props: {
			evt: events[0]
		}
	};
}

const EventPage = ({ evt }) => {
	const deleteEvent = e => {
		console.log('delete');
	};
	return (
		<Layout>
			<div className={styles.event}>
				<div className={styles.controls}>
					<Link href={`/events/edit/${evt.id}`}>
						<a>Edit</a>
					</Link>
					<a href="#" onClick={deleteEvent} className={styles.delete}>
						Delete
					</a>
				</div>
				<span>
					{evt.date} at {evt.time}
				</span>
				<h1>{evt.name} </h1>
				<h3>Performers : </h3>
				<p>{evt.performers} </p>
				<h3> Description :</h3>
				<p>{evt.description} </p>
				<h3>Venue : {evt.venue} </h3>
				<p>{evt.address} </p>
				<Link href="/events">
					<a className={styles.back}>Go Back</a>
				</Link>
			</div>
		</Layout>
	);
};

export default EventPage;
