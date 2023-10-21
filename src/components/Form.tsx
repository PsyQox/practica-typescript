import useNewSubForm from '../hooks/useNewSubForm'
import { Sub } from '../types'


interface FormProps{
    // onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>
    onNewSub:(newSub:Sub) => void
}


const Form =({onNewSub}:FormProps)=>{

   
    // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)
    // const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE)
    const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        onNewSub(inputValues)
        handleClear()
    }

    const handleChange =(event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        // const {name, value} = event.target
       dispatch({
            type:"change_value",
            payload: {
                inputName: event.target.name,
                inputValue: event.target.value
            }
       })
       
        // setInputValues({
        //     ...inputValues, [event.target.name]:[event.target.value]
        // })
    }

    const handleClear = ()=>{
        dispatch({
            type:"clear"
        })
    }

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={inputValues.nick} name="nick" placeholder="nick" />
                <input onChange={handleChange} type="number" value={inputValues.subMonths} name="subMonths" placeholder="subMonths" />
                <input onChange={handleChange} type="text" value={inputValues.avatar} name="avatar" placeholder="avatar" />
                <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description" />
                <button onClick={handleClear} type="button">Clear de form</button>
                <button type='submit'>Save new sub!</button>
            </form>
        </div>
    )
}

export default Form