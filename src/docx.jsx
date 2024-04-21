
import './docx.css'
import image from '/vcs.png'

function Docx() {


    return (
        <>
            <div className='main' id='docx'>
                <div className='main-1'>
                <h1>Introducing "BEP": A Lightweight Version Control System Built with Node.js</h1>
                </div>
                

                <div className='main-2'>
                    <div className='image'>
                        <img src={image} alt="" />
                    </div>
                    <div className='heading'>
                        <p>BEP is a minimalistic version control system designed to streamline your project management process. Built entirely with Node.js, it offers a straightforward solution for tracking changes, collaborating with your team, and maintaining project integrity.</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Docx
