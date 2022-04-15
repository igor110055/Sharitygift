import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    let userinfo = JSON.parse(req.body)
    let doc = await req.db.collection('user').findOne({email: userinfo.email})
    if (doc == null){
        newdoc = await req.db.collection('user').insert({email: userinfo.email, name: userinfo.name})
        let newdoc = await req.db.collection('user').findOne({email: userinfo.email})
        res.json(newdoc);
    } else {
        res.json(doc);
    }
});

export default handler;