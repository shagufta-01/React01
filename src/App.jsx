import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About'
import { useState } from 'react'
import Alert from './Components/Alert'



function App() {
const [mode, setMode] = useState('grey')
const [alert, setAlert] = useState(null)
const showAlert =(msg, type)=>{
setAlert({
  message:msg
  ,types:type

})
setTimeout(()=>{
  setAlert(null)
},2000 )
}
const toggleMode =()=>{
 if(mode === 'light'){
  setMode('dark')
  document.body.style.backgroundColor='grey'
showAlert("Dark mode has been enable", "success")
document.title ="TextUtilss - Dark Mode"
// setInterval(()=>{
//   document.title='TextUtils is Amazing Mode'
// },2000)
// setInterval(()=>{
//   document.title ='Install TextUtils Now'
// },1500) ///thisss is not a goood UI
 }
 else{
  setMode('light')
  document.body.style.backgroundColor='white'
  showAlert("Light mode has been enable", "success")
  document.title ="TextUtilss - Light Mode"
 }
}
  return (
  <>
<Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode ={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>
 <TextForm heading="Enter the text to Analyzed " showaLert ={showAlert} mode={mode}/>
{/* <TextForm heading="Enter the text to Analyzed " showaLert ={showAlert} mode={mode}/> */}
 <About />
{/* <About /> */}
</div>
{/* <Navbar /> */}

  </>
  )
}

export default App
