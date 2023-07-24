import './App.css'
import GeneralInfos from './components/information.jsx'
import Education from './components/Education'
import JobExperience from './components/Job_Exprerience'
import CV from './components/CV_Template';
import { useState } from 'react';

function App() {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [isSubmited,setIsSubmited] = useState(false)

  return(
    <div id='app-container'>
        <div id='cards-container'>
          <GeneralInfos 
            firstName={firstName}
            lastName={lastName}
            email={email}
            phoneNumber={phoneNumber}
            isSubmited={isSubmited}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            setPhoneNumber={setPhoneNumber}
            setIsSubmited={setIsSubmited}
          />
          <Education />
          <JobExperience />
        </div>
        <div id='cv-container'>
          {isSubmited && <CV firstName={firstName} lastName={lastName} email={email} phoneNumber={phoneNumber}/>}
        </div>
    </div>
  )
}

export default App