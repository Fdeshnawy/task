import MSelect from "./MSelect";
import Form from 'react-bootstrap/Form';

function RowHeader(props){

    return(
        <>
      
               <Form.Control className=' me-4' size="lg" style={{padding:'1.5%',width:'25%'}} type="text" placeholder="User Name " />

               <MSelect className='me-4' />

<form>
<fieldset className="border " style={{borderRadius:'5px'}}>
   <legend style={{fontSize:'10px'}} className="float-none w-auto ">Date From</legend>
   <input style={{border:'none'}} type="date" placeholder=" All Time"  min='2019-01-01' max='2022-11-12' />

</fieldset>
</form>
<form>
<fieldset className="border mx-4 " style={{borderRadius:'5px',paddingTop:'0!important'}}>
   <legend style={{fontSize:'10px'}} className="float-none w-auto ">Date To</legend>
   <input style={{border:'none'}} type="date" placeholder=" All Time"  min='2019-01-01' max='2022-11-12' />

</fieldset>
</form>


        <p className='me-5' style={{color:'#4c9ffc',fontSize:'15px'}}>All Filters</p>
        </>
    )
}
export default RowHeader;