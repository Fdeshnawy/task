import React, { useState } from "react";
import './MSelect.css';
import Multiselect from 'multiselect-react-dropdown'

function MSelect() {
    const[opt,setopt]=useState([ {
        cat: 'Group 1',
        key: 'Active'
      },
      {
        cat: 'Group 1',
        key: 'Inactive'
      },
      {
        cat: 'Group 1',
        key: 'Locked'
      },
      {
        cat: 'Group 2',
        key: 'Any'
      },
      {
        cat: 'Group 2',
        key: 'Option 5'
      },
      {
        cat: 'Group 2',
        key: 'Option 6'
      },
      {
        cat: 'Group 2',
        key: 'Option 7'
      }])
return(
    <>
    <Multiselect style={{width:'10% '}}
  displayValue="key"
  onKeyPressFn={function noRefCheck(){}}
  onRemove={(e)=>{console.log(e)}}
  onSearch={(e)=>{console.log(e)}}
  onSelect={(e)=>{console.log(e)}}
  options={opt}
  placeholder='Any'
  showCheckbox
/>
    </>
)
}


export default MSelect;