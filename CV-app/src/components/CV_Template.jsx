/* eslint-disable react/prop-types */
import './styles/CV.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'

function CV ({firstName,lastName,email,phoneNumber}){
    const iconUser = <FontAwesomeIcon icon={faUser} />
    const iconEmail = <FontAwesomeIcon icon={faEnvelope} />
    const iconTelephone = <FontAwesomeIcon icon={faPhone} />
    return(
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
    )
}

export default CV