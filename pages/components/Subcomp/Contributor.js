import {useState, useEffect} from 'react'



function ContributorTable(props){

   // const [isVerify, setIsVerify] = useState(false)
    // const [isAdmin, setAdmin] = useState(false)
    // if(props.pd===true){
    //     setAdmin(true)
    // } else {
    //     setAdmin(false)
    // }

    function updateTrue(bl){
        const contribData = {
            id: props.id,
            verify:bl,
          };
        console.log(contribData)
        props.onAddContrib(contribData)
    }

    return <div className='align-items-start' style={{marginBottom:"10px"}}>
    <div className="card " style={{backgroundColor: "#0093E9",backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",width:"200px", height:'300px'}}>
    
        <div className="card-title mt-3">
       
           <div className=" d-flex justify-content-between align-items-start"> {props.verify?<img className="ps-3" src="/ty.png" width='40%'/>:<img className="ps-3" src="/insp.png" width='42%' />} 
            
            <div>
            <h3 className="text-center text-white pe-3">{props.name}</h3>
            <h6 className="text-center text-white pe-3">{props.number}</h6>
            </div>
            
            </div>
            </div>
            <div className="card-body text-center">
            <div className="card-text">
            <h6 className="mb-3"> Contributed: </h6>
            <h2 className="mb-3">  Rs. {props.money} </h2>

             

    {/* {isAdmin===true?  */}
   
    {props.pdd==='true'?
    <div>       
    <div className='m-3'>
    <p>{props.description}</p>
           <div onClick={()=>updateTrue(true)} className="btn btn-primary mx-3"> Yes </div>
            <div onClick={()=>updateTrue(false)} className="btn btn-primary mx-3"> No </div>
            
    </div> 
    <p>{props.verify?"Verified":"Not Verified"} </p></div>:
            
            <div className={props.verify?"btn btn-primary":"btn btn-danger"}> {props.verify?"Verified 👍":"Not Verified"} </div>}
           

            </div>

            </div>
        </div>
    </div>
   

}

export default ContributorTable;