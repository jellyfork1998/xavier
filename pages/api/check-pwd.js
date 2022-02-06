

async function handler(req, res){
    
    if(req.method==='POST'){
        const data = req.body;
        console.log('chandra', data.password)
        if(data.password==='x123hGKafgr121'){
            res.status(200).json({ pwd: 'true' })
        }     
      
       else {
        console.log('puvi', data.password)
        res.status(200).json({ pwd: 'false' })
       }
        }
    }


    


export default handler