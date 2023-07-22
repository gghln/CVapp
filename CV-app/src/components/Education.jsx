import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleUp,faAngleDown, faGraduationCap,faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Education() {
    const [arrow,setArrow] = useState(<FontAwesomeIcon icon={faAngleDown} />)
    const plusButton = <FontAwesomeIcon icon={faPlus} />
    const education = <FontAwesomeIcon icon = {faGraduationCap} />
    const [open, setOPen] = useState(false);
    const width = 400;
    const [height,setHeight] = useState(80)
    const [schoolName,setSchoolName] = useState('')
    const [degreeTitle,setDegreeTitle] = useState('')
    const [startDate,setStartDate] = useState('')
    const [endDate,setEndDate] = useState('')

    const handleSumbit = event => {
        event.preventDefault()

        console.log(schoolName)
        console.log(degreeTitle)
        console.log(startDate)
        console.log(endDate)

        setSchoolName('')
        setDegreeTitle('')
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
                <i className="icon">{education}</i>
                <h2>Education</h2> 
                <button onClick={Toggle}>{arrow}</button>
            </span>
            { open && (
                <form onSubmit={handleSumbit}>
                    <label>School Name:</label>
                    <input type="text" name="schoolName" placeholder='School Name' value={schoolName} onChange={event => setSchoolName(event.target.value)}/>
                    <label>Title of study:</label>
                    <input type="text"  name="titleName" placeholder='Degree Title' value={degreeTitle} onChange={event => setDegreeTitle(event.target.value)}/>
                    <label>From:</label>
                    <input type="date" name="from" placeholder='From' value={startDate} onChange={event => setStartDate(event.target.value)}/>
                    <label >Until:</label>
                    <input type="date" name="until" placeholder='Until' value={endDate} onChange={event => setEndDate(event.target.value)}/>
                    <button type='submit'>{plusButton}</button>
                </form> 
            )}
        </div>
    )
}

export default Education