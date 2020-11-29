import React, {useEffect }from 'react'
import logo from './logo.svg';
import './App.css';
import {useFirebaseContext, firebaseStore} from './firebaseContex'
function App() {
  const [state,dispatch] = useFirebaseContext()

   useEffect(()=>{
    firebaseStore.dbRoot().once("value").then(
      data=> dispatch({type:"intialState", payload:data.val()}))
  },[])

  const counter = ()=>{ 
    console.log(state.counter)
    firebaseStore.dbRoot().update({counter:state.counter+1}).then(()=>{
      dispatch({type: 'increase' })
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Counter Value: {state.counter}</h1>
        <button onClick={counter}> Click ME</button>
      </header>
    </div>
  );
}

export default App;
