import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    let userinfo = JSON.parse(req.body)
    let doc = await req.db.collection('user').findOneAndUpdate({email: userinfo.email}, { $set: {role: userinfo.role, checkedItems: userinfo.checkedItems} })
    res.json({success: "ok"})
});

export default handler;