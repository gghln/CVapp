import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp,faAngleDown, faBriefcase, faPlus} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function JobExperience(){
    const [arrow,setArrow] = useState(<FontAwesomeIcon icon={faAngleDown} />)
    const plusButton = <FontAwesomeIcon icon={faPlus} />
    const work = <FontAwesomeIcon icon = {faBriefcase} />
    const [open, setOPen] = useState(false);
    const width = 400;
    const [height,setHeight] = useState(80)
    const [companyName,setCompanyName] = useState('')
    const [jobTitle,setJobTitle] = useState('')
    const [startDate,setStartDate] = useState('')
    const [endDate,setEndDate] = useState('')

    const handleSumbit = event => {
        event.preventDefault()

        console.log(companyName)
        console.log(jobTitle)
        console.log(startDate)
        console.log(endDate)

        setCompanyName('')
        setJobTitle('')
        setStartDate('')
        setEndDate('')
    }

    const Toggle = () => {
        setOPen(!open)
        if(height==500){
            setHeight(80)
            setArrow(<FontAwesomeIcon icon={faAngleDown} />)
        }else{
            setHeight(500)
            setArrow(<FontAwesomeIcon icon={faAngleUp} />)
        }  
   }
    return(
        <div className='flex-item' style={{width:width+'px',height:height+'px'}}>
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