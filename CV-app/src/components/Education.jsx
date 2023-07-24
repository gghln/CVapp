/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleUp,faAngleDown, faGraduationCap,faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Education(props) {
    const{
        schoolName,
        degreeTitle,
        schoolStartDate,
        schoolEndDate,
        setSchoolName,
        setDegreeTitle,
        setSchoolStartDate,
        setSchoolEndDate,
        setIsSubmited} = props
    const [arrow,setArrow] = useState(<FontAwesomeIcon icon={faAngleDown} />)
    const plusButton = <FontAwesomeIcon icon={faPlus} />
    const education = <FontAwesomeIcon icon = {faGraduationCap} />
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
                    <input type="date" name="from" placeholder='From' value={schoolStartDate} onChange={event => setSchoolStartDate(event.target.value)}/>
                    <label >Until:</label>
                    <input type="date" name="until" placeholder='Until' value={schoolEndDate} onChange={event => setSchoolEndDate(event.target.value)}/>
                    <button type='submit'>{plusButton}</button>
                </form> 
            )}
        </div>
    )
}

export default Education