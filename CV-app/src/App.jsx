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
  const [companyName,setCompanyName] = useState('')
  const [jobTitle,setJobTitle] = useState('')
  const [startDate,setStartDate] = useState('')
  const [endDate,setEndDate] = useState('')
  const [schoolName,setSchoolName] = useState('')
  const [degreeTitle,setDegreeTitle] = useState('')
  const [schoolStartDate,setSchoolStartDate] = useState('')
  const [schoolEndDate,setSchoolEndDate] = useState('')

  return(
    <>
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
          <Education
            schoolName={schoolName}
            degreeTitle={degreeTitle}
            schoolStartDate={schoolStartDate}
            schoolEndDate={schoolEndDate}
            isSubmited={isSubmited}
            setSchoolName={setSchoolName}
            setDegreeTitle={setDegreeTitle}
            setSchoolStartDate={setSchoolStartDate}
            setSchoolEndDate={setSchoolEndDate}
            setIsSubmited={setIsSubmited}
          />
          <JobExperience 
            jobTitle={jobTitle}
            companyName={companyName}
            startDate={startDate}
            endDate={endDate}
            isSubmited={isSubmited}
            setCompanyName={setCompanyName}
            setJobTitle={setJobTitle}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setIsSubmited={setIsSubmited}
            />
        </div>
        <div id='cv-container'>
          {isSubmited && 
            <CV 
              firstName={firstName} 
              lastName={lastName} 
              email={email} 
              phoneNumber={phoneNumber}
              jobTitle={jobTitle}
              companyName={companyName}
              startDate={startDate}
              endDate={endDate}
              schoolName={schoolName}
              degreeTitle={degreeTitle}
              schoolStartDate={schoolStartDate}
              schoolEndDate={schoolEndDate}
              />
            }
        </div>
    </>
  )
}

export default App