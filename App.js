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




Another that we fetch the data using useRef() and displaying the data in Browser using useState()

the Code is here


import './App.css';
import React, {useRef,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  const [name,setName] = useState('');
  const initialRef = useRef();

  function click(){
    const enteredValue = initialRef.current.value;
    setName(enteredValue);
    console.log(enteredValue);
  }
 
  return (
    <div className="container-fluid"> 
      <label>Name</label>
      <input ref={initialRef}  type="text" placeholder='Name'></input>
      <h1>{name}</h1>
      <button onClick={click} type="button">Submit</button>
    </div>
  );
}
export default App;

