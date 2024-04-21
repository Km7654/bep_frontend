
import logo from '/bepLogo.png'
import './intro.css'

function Intro() {


  return (
    <>
     <div className='intro'>
        <div className='logo'>
            <img src={logo} alt="" />
            <h1>BEP</h1>
        </div>
        <div className='desc'>
            <h2>Control your code, shape your future: BEP , where versioning meets innovation</h2>
            <br />
            <a href="#install"><button>Getting Started</button></a>
            
        </div>
     </div>
    </>
  )
}

export default Intro
