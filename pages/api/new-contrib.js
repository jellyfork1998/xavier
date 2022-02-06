import {MongoClient} from 'mongodb'

async function handler(req, res){
    if(req.method==='POST'){
        const data = req.body;
       // console.log(data)
        const client = await MongoClient.connect('mongodb+srv://chandra68:mEQlqpTEI12rKjCE@cluster0.foyom.mongodb.net/xaviersave?retryWrites=true&w=majority');
        const db = client.db();
        const meetupsCollection=db.collection('xaviermemb')
        const result = await meetupsCollection.insertOne(data)
        console.log(result)
        client.close();
        res.status(201).json({message:'Inserted one record'})
        }


    }


export default handler