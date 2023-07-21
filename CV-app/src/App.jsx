import './App.css'
import  './styles/info.css';
import GeneralInfos from './components/information.jsx'
import Education from './components/Education'
import JobExperience from './components/Job_Exprerience'

function App() {
  return(
    <div id='container'>
        <GeneralInfos />
        <Education />
        <JobExperience />
    </div>
  )
}

export default App
