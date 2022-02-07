import {MongoClient,ObjectId} from 'mongodb'

async function updatehandler(req, res){
    if(req.method==='POST'){
        const data = req.body;
        //console.log('chandra', data.id)
        const client = await MongoClient.connect('mongodb+srv://chandra68:mEQlqpTEI12rKjCE@cluster0.foyom.mongodb.net/xaviersave?retryWrites=true&w=majority');
        const db = client.db();
        const meetupsCollection=db.collection('xaviermemb')
        const result = await meetupsCollection.updateOne({_id:ObjectId(data.id)},{$set:{verify:data.verify}})
        console.log(result)
        client.close();
        res.status(201).json({message:'Updated one record'})
        }
    

    }


export default updatehandler