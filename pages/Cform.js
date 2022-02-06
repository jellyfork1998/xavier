import Meetup from '../pages/components/Subcomp/NewMeetupForm'
import {useRouter} from 'next/router'



function NewContribution(){
    const router=useRouter();
    async function addContribution(enteredMeetUpData){
        const response= await fetch("/api/new-contrib",{
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
   
    

    return <Meetup onAddMeetup={addContribution}
     />
    

}

export default NewContribution;