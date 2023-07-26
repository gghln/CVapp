/* eslint-disable react/prop-types */
import './styles/Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp,faAngleDown, faUser, faPlus} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Button from './Button'
function GeneralInfos(props){  
    const {
        firstName, 
        lastName, 
        email, 
        phoneNumber, 
        setFirstName, 
        setLastName,
        setEmail, 
        setPhoneNumber, 
        setIsSubmited} = props
    const [arrow,setArrow] = useState(<FontAwesomeIcon icon={faAngleDown} />)
    const plusButton = <FontAwesomeIcon icon={faPlus} />
    const [open, setOPen] = useState(false);
    const [height,setHeight] = useState(10)

    const handleSubmit = event => {
        event.preventDefault()
        setIsSubmited(true)
    }


    const Toggle = () => {
        setOPen(!open)
        if(height==70){
            setHeight(10)
            setArrow(<FontAwesomeIcon icon={faAngleDown} />)
        }else{
            setHeight(70)
            setArrow(<FontAwesomeIcon icon={faAngleUp} />)
        }  
    }

    return(
        <>
            <div className='flex-item' style={{width:'400px',height:height+'%'}}>
                <span>
                    <i className="icon"><FontAwesomeIcon icon={faUser} /></i>
                    <h2>Personal Information</h2> 
                    <Button toggle={Toggle} value={arrow}/>
                </span>  
                { open && (
                    <form onSubmit={handleSubmit}>
                        <label>First name</label>
                        <input  type="text" placeholder='First Name' value={firstName} onChange={event => setFirstName(event.target.value)}/>
                        <label>Last name</label>
                        <input type="text" placeholder='Last Name' value={lastName} onChange={event => setLastName(event.target.value)}/>
                        <label>Email</label>
                        <input type="email" placeholder='Email' value={email} onChange={event => setEmail(event.target.value)} />
                        <label >Phone</label>
                        <input type="tel" placeholder='Phone Number' value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)}/>
                        <Button value={plusButton}/>
                    </form> 
                 )} 
            </div> 
        </>
    )
}



export default GeneralInfos