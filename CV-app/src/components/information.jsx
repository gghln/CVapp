import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faUser} from '@fortawesome/free-solid-svg-icons'

function GeneralInfos() {
    const arrow = <FontAwesomeIcon icon={faAngleDown} />
    const user = <FontAwesomeIcon icon={faUser} />
    return(
        <div className='flex-item'>
            <span>
                <i className="icon">{user}</i>
                <h2>Personal Information</h2> 
                <button>{arrow}</button>
            </span>
                <form>
                    <label>First name</label>
                    <input  type="text" id="fname" name="fname" value="John"/>
                    <label>Last name</label>
                    <input type="text" id="lname" name="lname" value="Doe"/>
                    <label>Email</label>
                    <input type="email" name="email"/>
                    <label >Phone</label>
                    <input type="tel" name="phone"/>
                </form> 
        </div>
        
    )
}

export default GeneralInfos