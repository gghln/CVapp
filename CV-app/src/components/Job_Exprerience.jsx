import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBriefcase} from '@fortawesome/free-solid-svg-icons'
function JobExperience(){
    const arrow = <FontAwesomeIcon icon={faAngleDown} />
    const work = <FontAwesomeIcon icon = {faBriefcase} />
    return(
        <div className='flex-item'>
            <span>
                <i className="icon">{work}</i>
                <h2>Job Experience</h2> 
                <button>{arrow}</button>
            </span>
            <form>
                <label>Company Name:</label>
                <input type="text" name="companyName"/>
                <label>Position Title:</label>
                <input type="text"  name="positionTitle"/>
                <label>Main Responsibilities:</label>
                <input type="text" name="mainResponsibilities"/>
                <label>Start Date:</label>
                <input type="text" name="from"/>
                <label >End Date:</label>
                <input type="number" name="until"/>
            </form> 
        </div>
    )
}

export default JobExperience