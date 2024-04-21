import './contributors.css'
import logo from '/bepLogo.png'

const data = [
    {
        "name": "Bishal De",
        "link1": "https://github.com/Km7654",
        "link2": "https://github.com/Km7654",
    },

    {
        "name": "Premansh Chanderia",
        "link1": "https://github.com/Km7654",
        "link2": "https://github.com/Km7654",
    },
    {
        "name": "Kaushik Singh",
        "link1": "https://github.com/Km7654",
        "link2": "https://github.com/Km7654",
    }
]

function Contributors() {
    return (
        <>
            <div className='contributors' >
                <h1>Our Contributors</h1>
                <div className='card-contri' id='Contri'>
                    {
                        data.map((item, index) => (
                            <div className='card'>
                                <img src={logo} alt="" />
                                <div className='link'>
                                    <a href={item.link1}><i class="fa fa-github fa_custom fa-2x"></i></a>
                                    <a href={item.link2}><i class="fa fa-linkedin fa_custom fa-2x"></i></a>
                                </div>

                                <h3>{item.name}</h3>
                            </div>
                        ))
                    }

                </div>
            </div>

        </>
    )
}

export default Contributors;