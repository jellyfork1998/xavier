import {useState,useEffect} from 'react'
import { MongoClient } from 'mongodb'
import Contributor from './updat'
import Addform from './Cform'
import Adminform, {LoginContext} from './Cpass'





export default function Home(props) {
  const  navy_boys=props.meetups
  var totalCol=0;
  var totlen=navy_boys.length
  // const [totfund, setTotalFund]=useState(false)
  const [totf, setTotalF]=useState(0)
  const [loggedin, setLoggedIn]=useState(false)
  const pdd=props.pwd
  console.log(pdd)
useEffect(() => {
  setTotalF(totalCol);
} );

  return (
<div>
    <div className="jumbotron">
    <h1 className="display-3 text-center text-white" style={{background:"grey", borderRadius:'30px'}}>'Not everyone has the same path in life'</h1>
    <h1 className="display-4">Hi All!</h1>
    <p className="lead">Xavier Ravi, Ex-PO, does require to undergo lower foot amputation procedure within next couple of weeks.
     I 'm Chandrasekar, EX PO, his batchmet, trying  to raise fund Rs 50000  for his medical expenses. So those who are in better state,please extend your support. Thank you!..
     </p>
    
   
    <p className="lead">
    $ send to:   Bank Account No:xxxxxxxxxxxx  IFSC:xxxxxxx
    </p>
  </div>  
 
  
<div className='row'>
<div className='col-sm-12 col-md-4'>
<div className='mb-3'>
<LoginContext.Provider value={{loggedin, setLoggedIn}}>
<Adminform  
  
/>
</LoginContext.Provider>
</div>

<Addform/>
</div>
 <div className=' col-sm-12 col-md-8'>
 {/* <h1> From All our well wishers</h1> */}
 <h2>Total Collected:Rs. {totf}</h2>
  
 
   

   {navy_boys.map((navyb,index)=>{
     //console.log(index)
    totalCol= navyb.verify===true?totalCol+Number(navyb.money):totalCol;
  
   
    return (<div className='d-inline-flex  m-2 justify-content-center'  key={navyb.id}>
    <LoginContext.Provider value={{loggedin, setLoggedIn}}>
    <Contributor
     
    name={navyb.name}
    money={navyb.money}
    number={navyb.snumber}
    verify={navyb.verify}
    id={navyb.id}
    description={navyb.description}
    pdd={loggedin}
    /> 
   </LoginContext.Provider>
    </div>)
    
   })}



   
      
   
   
  
 </div>
    
    
    </div>
    </div>
  )
  

 
}

export async function getStaticProps(){

  const client = await MongoClient.connect('mongodb+srv://chandra68:mEQlqpTEI12rKjCE@cluster0.foyom.mongodb.net/xaviersave?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection=db.collection('xaviermemb')
  const meetups=await meetupsCollection.find().toArray();
  //const tot=meetupsCollection.aggregate([ { $match: { verify: "true" } }, { $group: {_id: "$verify", TotalSum: { $sum: "$money" } } } ]).toString()
   client.close()


  return {
      props:{
          meetups: meetups.map((meetup,index)=>({
              key:index,
              name:meetup.name,
              snumber:meetup.snumber,
              money:meetup.money,
              description:meetup.description,
              verify:meetup.verify,
              id:meetup._id.toString()
          }
          
          
          ))


      },
     
    
      revalidate:1
  }
 
}