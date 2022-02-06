import classes from './MainNavigation.module.css';
import Link from 'next/link';


function MainNavigation(props) {
  

  return (
    <header className={classes.header}>
      <div className="d-inline text-center"><h3 className='text-white'>Xavier Ravi- EX PO, 2 of 86 Batch  </h3> 
      
      </div>
      <div className="d-inline text-center"><h3 className='text-white'>Fund Raising For Medical Expenses </h3> 
      
      </div>
     
    </header>
  );
}

export default MainNavigation;