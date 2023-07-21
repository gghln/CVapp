import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faGraduationCap  } from '@fortawesome/free-solid-svg-icons'

function Education() {
    const arrow = <FontAwesomeIcon icon={faAngleDown} />
    const education = <FontAwesomeIcon icon = {faGraduationCap} />
    return(
        <div className='flex-item'>
            <span>
                <i className="icon">{education}</i>
                <h2>Education</h2> 
                <button>{arrow}</button>
            </span>
            <form>
                <label>School Name:</label>
                <input type="text" name="schoolName"/>
                <label>Title of study:</label>
                <input type="text"  name="titleName"/>
                <label>From:</label>
                <input type="number" name="from"/>
                <label >Until:</label>
                <input type="number" name="until"/>
            </form> 
        </div>
    )
}

export default Education