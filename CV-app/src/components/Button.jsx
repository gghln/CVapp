import './styles/button.css'

function Button(props){
    return(
        <button onClick={props.toggle} type={props.type}>{props.value}</button>
    )
}
export default Button