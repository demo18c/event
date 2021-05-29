import React from 'react';
import Link from 'next/link';
import { PER_PAGE } from '@/config/index';

const Pagination = ({ page, total }) => {
	const lastpage = Math.ceil(total / PER_PAGE);

	return (
		<>
			{page > 1 && (
				<Link href={`/events?page=${page - 1}`}>
					<a className="btn-secondary">prev</a>
				</Link>
			)}

			{page < lastpage && (
				<Link href={`/events?page=${page + 1}`}>
					<a className="btn-secondary">next</a>
				</Link>
			)}
		</>
	);
};

export default Pagination;
