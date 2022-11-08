import ModalPop from "./ModalPop";
function NewForm(props){
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
    
        };
        props.onAddExpense(expenseData);
      };
    return(
        <>
        <ModalPop onSaveExpenseData={saveExpenseDataHandler} />
        </>
    )
}
export default NewForm;