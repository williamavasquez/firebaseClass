import React, { createContext, useContext, useReducer } from 'react'
import Firebase from './config/config'

const firebaseStore = new Firebase()

const reducer = (state, action)=>{ 
  switch (action.type) {
    case 'increase':{ 
      return  {
        ...state, 
        counter: state.counter+1
      }
    }
    case "intialState":
      return {
        ...action.payload
      }  
    default:
      return state
  }
}

const firebaseContext = createContext(null)
const {Provider} = firebaseContext

const FirebaseProvider = ({value, ...props})=>{ 
  const [state, dispatch] = useReducer(reducer, {counter:0})
  return <Provider value={[state,dispatch]} {...props} />
}

const useFirebaseContext = ()=> useContext(firebaseContext)


export { FirebaseProvider, useFirebaseContext, firebaseStore}