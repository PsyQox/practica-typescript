import { Sub } from "../types"

interface Props {
    subs: Array<Sub>
}


// function List ({subs}: Props){
// const List: React.FunctionComponent<Props> = (props)=>{
// const List: React.FC<Props> = (props)=>{

function List (props: Props){
    const {subs} = props
    const renderList = (): JSX.Element[] =>{
        return subs.map(sub =>{
            return(
                <li key={sub.nick}>
                        <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                        <h4>{sub.nick}(<small>{sub.subMonths}</small>)</h4>
                        <p>{sub.description}</p>
                </li>)
        })
        
    }

return(
        <>
        <ul>
        {renderList()}
      </ul>
        </>
    )
}

export default List