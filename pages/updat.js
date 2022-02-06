import Contrib from '../pages/components/Subcomp/Contributor'
import {useRouter} from 'next/router'



function MemberContribution(props){
    const router=useRouter();
    async function newContribution(enteredMeetUpData){
        const response= await fetch("/api/update-data",{
            method:'POST',
            body:JSON.stringify(enteredMeetUpData),
           
            headers:{
                'Content-Type': 'application/json'
            }
        });

        console.log(response);
        const data = await response.json();
        router.push('/')

    }
   
    

    return <Contrib onAddContrib={newContribution}
    name={props.name}
    money={props.money}
    number={props.number}
    verify={props.verify}
    id={props.id}
    pdd={props.pdd}
    description={props.description}
     />
    

}

export default MemberContribution;