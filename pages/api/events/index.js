// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { events } = require('./data.json');

export default (req, res) => {
	if (req.method === 'GET') {
		res.status(200).json(events);
	} else {
		res.setHeader('Allow', ['GET']);
	}
};
