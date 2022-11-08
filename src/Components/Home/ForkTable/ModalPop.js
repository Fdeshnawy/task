import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalPop(props) {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredWebsite, setEnteredWebsite] = useState('');
  const [enteredCompany, setEnteredCompany] = useState('');
  const [enteredCity, setEnteredCity] = useState('');



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    
  };

  const websiteChangeHandler = (event) => {
    setEnteredWebsite(event.target.value);
    
  };
  const companyChangeHandler = (event) => {
    setEnteredCompany(event.target.value);
    
  };
  const cityChangeHandler = (event) => {
    setEnteredCity(event.target.value);
    
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      name: enteredName,
      email: enteredEmail,
      website: enteredWebsite,
      company:enteredCompany,
      city:enteredCity
    };
   props.onSaveExpenseData(expenseData);
   
   setEnteredName('');
   setEnteredEmail('');
   setEnteredWebsite('');
   setEnteredCompany('');
   setEnteredCity('');
  }



  return (
    <>
     <Button  variant="success"  onClick={handleShow} > + Add New</Button>{' '}


      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ background:' #050e2d',color:'white'}} closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body className='' style={{background:'#f8fafb'}}>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3 d-flex flex-column" controlId="exampleForm.ControlInput1">
              <Form.Label style={{color:'  #050e2d',fontWeight:'bold'}}>Name</Form.Label>
              <Form.Control
              className='w-100'
                type="text"
                placeholder="name"
                autoFocus
                onChange={nameChangeHandler}
                value={enteredName}
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex flex-column" controlId="exampleForm.ControlInput1">
              <Form.Label style={{color:'  #050e2d',fontWeight:'bold'}}>Email address</Form.Label>
              <Form.Control
               className='w-100'
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={emailChangeHandler}
                value={enteredEmail}
              />
              
            </Form.Group>
            <Form.Group className="mb-3 d-flex flex-column" controlId="exampleForm.ControlInput1">
              <Form.Label style={{color:'  #050e2d',fontWeight:'bold'}}>User Name</Form.Label>
              <Form.Control
               className='w-100'
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={enteredWebsite}
                onChange={websiteChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex flex-column" controlId="exampleForm.ControlInput1">
              <Form.Label style={{color:'  #050e2d',fontWeight:'bold'}}>User Group</Form.Label>
              <Form.Control
               className='w-100'
                type="text"
                placeholder="Company"
                autoFocus
                onChange={companyChangeHandler}
                value={enteredCompany}
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex flex-column" controlId="exampleForm.ControlInput1">
              <Form.Label style={{color:'  #050e2d',fontWeight:'bold'}}>Assign Profile</Form.Label>
              <Form.Control
               className='w-100'
                type="text"
                placeholder="name@example.com"
                autoFocus
                onChange={cityChangeHandler}
                value={enteredCity}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
           Add User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalPop;
 
