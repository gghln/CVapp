/* eslint-disable react/prop-types */
import './styles/Form.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp,faAngleDown, faBriefcase, faPlus} from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

function JobExperience(props){
    const{
        jobTitle,
        companyName,
        startDate,
        endDate,
        setCompanyName,
        setJobTitle,
        setStartDate,
        setEndDate,
        setIsSubmited} = props
    const [arrow,setArrow] = useState(<FontAwesomeIcon icon={faAngleDown} />)
    const plusButton = <FontAwesomeIcon icon={faPlus} />
    const [open, setOPen] = useState(false);
    const [height,setHeight] = useState(10)

    const handleSumbit = event => {
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
        <div className='flex-item' style={{width:'400px',height:height+'%'}}>
            <span>
                <i className="icon"><FontAwesomeIcon icon={faBriefcase} /></i>
                <h2>Job Experience</h2> 
                <Button toggle={Toggle} value={arrow}/>
            </span>
            { open && (
                <form onSubmit={handleSumbit}>
                    <label>Company Name:</label>
                    <input type="text" name="companyName" placeholder='Company Name' value={companyName} onChange={event => setCompanyName(event.target.value)}/>
                    <label>Position Title:</label>
                    <input type="text"  name="positionTitle" placeholder='Position Title' value={jobTitle} onChange={event => setJobTitle(event.target.value)}/>
                    <label>Start Date:</label>
                    <input type="date" name="from" value={startDate} onChange={event => setStartDate(event.target.value)}/>
                    <label >End Date:</label>
                    <input type="date" name="until" value={endDate} onChange={event => setEndDate(event.target.value)}/>
                    <Button value={plusButton}/>
                </form> 
            )}
        </div>
    )
}

export default JobExperience