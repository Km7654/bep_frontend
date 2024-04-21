
import logo from '/bepLogo.png'
import './App.css'

function App() {


  return (
    <>
     <div className='navbar'>
        <div className='navlogo'>
          <img src={logo} alt="" />
          <a href="/"><h3>BEP</h3></a>
        </div>
        <div className='options'>
          <ul>
            <li><a href="#docx">About</a></li>
            <li><a href="#install">Guide</a></li>
            <li><a href="#Contri">Contributers</a></li>
            <li><a href="https://github.com/bishalde/bep"><i class="fa fa-github fa_custom fa-2x"></i></a></li>
          </ul>
        </div>
     </div>
    </>
  )
}

export default App
