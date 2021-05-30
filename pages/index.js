import Link from 'next/link';
import { API_URL } from '@/config/index';
import Layout from '../components/Layout';
import EventItem from '../components/EventItem';

export default function HomePage(
	{
		// events
	}
) {
	return (
		<Layout>
			{/* <h1>up events</h1>
			{events.length === 0 && <h3>No events</h3>}
			{events.map(evt => (
				<EventItem key={evt.id} evt={evt} />
			))}
			{events.length > 0 && (
				<Link href="/events">
					<a className="btn-secondary">View All Events</a>
				</Link>
			)} */}
			<h1>Home Page</h1>
		</Layout>
	);
}

// export async function getServerSideProps() {
// 	const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
// 	const events = await res.json();

// 	return {
// 		props: { events }
// 	};
// }
