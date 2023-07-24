/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp,faAngleDown, faBriefcase, faPlus} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

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
    const work = <FontAwesomeIcon icon = {faBriefcase} />
    const [open, setOPen] = useState(false);
    const [height,setHeight] = useState(80)

    const handleSumbit = event => {
        event.preventDefault()
        setIsSubmited(true)
    }

    const Toggle = () => {
        setOPen(!open)
        if(height==480){
            setHeight(80)
            setArrow(<FontAwesomeIcon icon={faAngleDown} />)
        }else{
            setHeight(480)
            setArrow(<FontAwesomeIcon icon={faAngleUp} />)
        }  
   }
    return(
        <div className='flex-item' style={{width:'400px',height:height+'px'}}>
            <span>
                <i className="icon">{work}</i>
                <h2>Job Experience</h2> 
                <button onClick={Toggle}>{arrow}</button>
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
                    <button type='submit'>{plusButton}</button>
                </form> 
            )}
        </div>
    )
}

export default JobExperience