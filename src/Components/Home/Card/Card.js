import { useState } from 'react';
import './Card.css'
import Table from '../ForkTable/Table';
import data from '../ForkTable/Data';
import NewForm from '../ForkTable/NewForm';
function Card(){
   
   
    const [expenses, setExpenses] = useState(data);
    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
          return [expense, ...prevExpenses];
        });
      };
    return(
        <div className='card--body'>
        <div className='card--title'>
            <h3>User Management</h3>
           <NewForm onAddExpense={addExpenseHandler}/>
        </div>
     
        <Table data={expenses}  />
       

        </div>
    )
}
export default Card;