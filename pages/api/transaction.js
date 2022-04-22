import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    let userinfo = JSON.parse(req.body)
    await req.db.collection('transaction').insertOne(userinfo)
    res.json({success: "ok"})
});

export default handler;