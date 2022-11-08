import Form from 'react-bootstrap/Form';
function Search(props){
    
    function setfilterHandler(e){
        props.onChangeFilter(e.target.value);
    }

    return(
        <div>
            <Form.Control className="w-100" type="text" placeholder="User Name" onChange={setfilterHandler} />

        </div>
    )
}
export default Search;