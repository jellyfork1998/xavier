import { useRef } from 'react';

//import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      name: enteredTitle,
      snumber: enteredImage,
      money: enteredAddress,
      description: enteredDescription,
      verify:true,
    };

    props.onAddMeetup(meetupData);

    titleInputRef.current.value="";
    imageInputRef.current.value="";
    addressInputRef.current.value="";
    descriptionInputRef.current.value="";

  }

  return (
    <div className='card'>
      <form className={classes.form} onSubmit={submitHandler}>
      <h3> Contributors only </h3>
        <div className={classes.control}>
          <label htmlFor='title'>Name</label>
          <input type='text' required id='title' placeholder="Name" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='snumber'>Service Number</label>
          <input type='text' required id='snumber'  maxLength='50' placeholder="Service No, Trade, Batch etc.." ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Money</label>
          <input type='number' required id='address' placeholder="2000" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Details of Transaction</label>
          <textarea
            id='description'
            required
            rows='5'
            minLength='10'
            maxLength='30'
            placeholder="Transaction Id, other Messages"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Contribution Data</button>
        </div>
      </form>
    </div>
  );
}

export default NewMeetupForm;