
import { useRef } from 'react';
import classes from './NewMeetupForm.module.css';

function AdminForm(props) {
  const pwdInputref = useRef();
 

  function sHandler(event) {
    event.preventDefault();

    const pwd = pwdInputref.current.value;
    const pwdData={
        password:pwd
    };
    props.chkpass(pwdData)

  }

  return (
    <div className='card'>
      <form className={classes.form} onSubmit={sHandler}>
        <div className={classes.control}>
          <label htmlFor='pwdd'>Password(only for Admin)</label>
          <input type='text' required id='pwdd' ref={pwdInputref} />
        </div>
      
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AdminForm;