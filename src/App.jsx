
import './App.css';

import {useState} from 'react'
import Counter from './Counter';

function App() {
  // zero is a default value and the return should be an array(2)//
    const[count,setCount] = useState(0)
   
  const addCount =()=>{
    setCount(count+1)  
  }

  //spread
  let obj = {
    title:'1st counter'
    ,    
  }

  
  return (
    <div>
      <button onClick={addCount}>Add</button>
      <Counter {...obj}/>
     <Counter title ='1st'count = {count}/>
     <Counter title = '2nd'count = {count}/>

    </div>
  );
}

export default App;
