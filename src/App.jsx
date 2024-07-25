import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About'

function App() {


  return (
  <>

<Navbar title="TextUtils" aboutText="About us"/>
<div className='container my-3'>
<TextForm heading="Enter the text to anlyze"/>
<About />
</div>
{/* <Navbar /> */}
  </>
  )
}

export default App
