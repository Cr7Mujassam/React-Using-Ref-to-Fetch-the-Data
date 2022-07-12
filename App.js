import './App.css';
import React, {useRef,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  const initialRef = useRef();

  function click(){
    const enteredValue = initialRef.current.value;
    console.log(enteredValue);
  }
 
  return (
    <div className="container-fluid"> 
      <label>Name</label>
      <input ref={initialRef}  type="text" placeholder='Name'></input>
      <button onClick={click} type="button">Submit</button>
    </div>
  );
}
export default App;
