import {useState, useEffect} from 'react'
import tk from "../../../public/thankyou.png"


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

    return <div style={{marginBottom:"10px"}}>
    <div className="card" style={{backgroundColor: "#0093E9",backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"}}>
        <div className="card-title">
            <h6 className="text-center text-white">{props.name} {props.number}</h6>
            <div className="card-body">
            <div className="card-text">
            <h6 className="mb-3"> Contributed: Rs. {props.money} </h6>

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
            {/* <div> {props.verify?<img src="/thankyou.png" width='10%'/>:<img src="" />} </div> */}

            </div>

            </div>
        </div>
    </div>
    </div>

}

export default ContributorTable;