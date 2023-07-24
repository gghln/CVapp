/* eslint-disable react/prop-types */
import './styles/CV.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'

function CV (props){
    const {firstName,lastName,email,phoneNumber,jobTitle,companyName,startDate,endDate,schoolName,degreeTitle,schoolStartDate,schoolEndDate} = props
    const iconUser = <FontAwesomeIcon icon={faUser} />
    const iconEmail = <FontAwesomeIcon icon={faEnvelope} />
    const iconTelephone = <FontAwesomeIcon icon={faPhone} />
    return(
        <>  
            <div id='personal-infos'>
                <div className='container'>
                    <i id="user-icon">{iconUser}</i><div className='user-full-name'>{firstName}</div>
                    <div className='user-full-name'>{lastName}</div>
                </div>
                <div className='container'>
                    <i className='icon-contact'>{iconTelephone}</i><div className='user-contact'>{email}</div>
                    <i className='icon-contact'>{iconEmail}</i><div className='user-contact'>{phoneNumber}</div>
                </div>
            </div>
            <div id='education-container'>
                <div className='education-card'>
                    <div className='education-info'>
                        <div className='education-item'>{degreeTitle}</div>
                        <div className='education-item'>@</div>
                        <div className='education-item'>{schoolName}</div>
                    </div>
                    <div className='education-date'>
                        <div className='education-item'>
                            <h4>From</h4>
                            {schoolStartDate}
                        </div>
                        <div className='education-item'>
                            <h4>Until</h4>
                            {schoolEndDate}
                        </div>
                    </div>
                </div>
            </div>
            <div className='job-container'>
                <div className='job-card'>
                    <div className='job-info'>
                        <div className='job-item'>{jobTitle}</div>
                        <div className='job-item'>@</div>
                        <div className='job-item'>{companyName}</div>
                    </div>
                    <div className='job-date'>
                        <div className='job-item'>
                            <h4>From</h4>
                            {startDate}
                        </div>
                        <div className='job-item'>
                            <h4>Until</h4>
                            {endDate}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CV