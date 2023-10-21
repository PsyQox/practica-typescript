import { useEffect, useState } from 'react'
import './App.css'
import List from './components/List'
import Form from './components/Form'
import {Sub} from './types'

interface AppState {
  subs: Array<Sub>,
  newSubsNumber: number
}

function App() {
  
  // const [subs, setSubs] = useState<Array<Sub>>([]);
  const [subs, setSubs] = useState<AppState['subs']>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0)

useEffect(()=>{
  
},[])
//El void indica que no devolvera un valor, osea solamente ejecutara una funcion
const handleNewSub=(newSub: Sub):void=>{
  setSubs((subs)=> [...subs, newSub])
  setNewSubsNumber(n => n + 1)
}
  return (
    <>
      <h1>Subs</h1>
        <List subs={subs}/>
        New subs number: {newSubsNumber}
        <Form onNewSub={handleNewSub}/>
    </>
  )
}

export default App
