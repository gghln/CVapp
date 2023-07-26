/* eslint-disable react/prop-types */
import './styles/Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleUp,faAngleDown, faGraduationCap,faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Button from './Button'
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
                <i className="icon"><FontAwesomeIcon icon = {faGraduationCap} /></i>
                <h2>Education</h2> 
                <Button toggle={Toggle} value={arrow}/>
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
                    <Button value={plusButton}/>
                </form> 
            )}
        </div>
    )
}

export default Education