export default function getById(req, res) {
	res.json({ id: req.query.id })
}