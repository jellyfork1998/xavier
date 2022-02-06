import Adminform from './components/Subcomp/Adminform'
import { useState,createContext, useContext } from 'react';
import {useRouter} from 'next/router'

export const LoginContext = createContext({});


function AdminPwd(props){
    const router=useRouter();
    const {loggedin, setLoggedIn}=useContext(LoginContext)
    const [isAdmin,setisAdmin]=useState('false')
  

    // var data = {};
    
     async function addPass(pwdData){

     
        console.log('nnn',pwdData.password)
         
        const response= await fetch("/api/check-pwd",{
            method:'POST',
            body:JSON.stringify(pwdData),
           
            headers:{
                'Content-Type': 'application/json'
            }
        });

        
        const data = await response.json();
       
        setLoggedIn(data.pwd)
        router.push('/')

     }
   
    

    return <Adminform chkpass={addPass}
     />
    

}

   


export default AdminPwd;