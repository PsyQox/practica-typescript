import {useState} from 'react'
import { Sub } from '../types'

interface FormState{
   inputValues: Sub
}

interface FormProps{
    // onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>
    onNewSub:(newSub:Sub) => void
}

const Form =({onNewSub}:FormProps)=>{
    const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
        nick:'',
        subMonths:0,
        avatar:'',
        description:''
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        onNewSub(inputValues)
    }

    const handleChange =(event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setInputValues({
            ...inputValues, [event.target.name]:[event.target.value]
        })
    }

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={inputValues.nick} name="nick" placeholder="nick" />
                <input onChange={handleChange} type="number" value={inputValues.subMonths} name="subMonths" placeholder="subMonths" />
                <input onChange={handleChange} type="text" value={inputValues.avatar} name="avatar" placeholder="avatar" />
                <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description" />
                <button>Save new sub!</button>
            </form>
        </div>
    )
}

export default Form