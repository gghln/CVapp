import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './styles/Form.css'
import Button from "./Button"

// Render Form
function Form(props){
    const inputs = [
        { placeholder:'First Name', value: props.firstName, set: props.setFirstName},
        { placeholder:'Last Name', value: props.lastName, set: props.setLastName},
        { placeholder:'Email', value: props.email, set: props.setEmail},
        { placeholder:'Phone Number', value: props.phoneNumber, set: props.setPhoneNumber},
        { placeholder:'School Name', value: props.schoolName, set: props.setSchoolName},
        { placeholder:'Degree Title', value: props.degreeTitle, set: props.setDegreeTitle},
        { placeholder:'Start Date', value: props.schoolStartDate, set: props.setSchoolStartDate},
        { placeholder:'End Date', value: props.schoolEndDate, set: props.setSchoolEndDate},
        { placeholder:'Job Title', value: props.jobTitle, set: props.setJobTitle},
        { placeholder:'Company Name', value: props.companyName, set: props.setCompanyName},
        { placeholder:'Start Date', value: props.startDate, set: props.setStartDate},
        { placeholder:'End Date', value: props.endDate, set: props.setEndDate}
    ]
    const plusButton = <FontAwesomeIcon icon={faPlus} />

    // Event for submiting form
    const handleSubmit = event => {
        event.preventDefault()
        props.setIsSubmited(true)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>First name</label>
            <input  type="text" placeholder='First Name' value={props.firstName} onChange={event => props.setFirstName(event.target.value)}/>
            <label>Last name</label>
            <input type="text" placeholder='Last Name' value={props.lastName} onChange={event => props.setLastName(event.target.value)}/>
            <label>Email</label>
            <input type="email" placeholder='Email' value={props.email} onChange={event => props.setEmail(event.target.value)} />
            <label >Phone</label>
            <input type="tel" placeholder='Phone Number' value={props.phoneNumber} onChange={event => props.setPhoneNumber(event.target.value)}/>
            <Button type='submit' value={plusButton}/>
        </form>
    )
}

export default Form