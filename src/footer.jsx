import './footer.css'

function Footer() {
    return (
        <>
            <div>
                <div className='footer'>
                    <div className='left'>
                        <h1>
                            BEP
                        </h1>
                        <p>
                            
                        A software tool that helps software teams manage changes to source code over time. VCS is also known as SCM (Source Code Management) or RCS (Revision Control System)

                        </p>
                    </div>
                    <div className='right'>
                        <a href="#"><i class="fa fa-github fa_custom fa-2x"></i></a>
                        <a href="#"><i class="fa fa-linkedin fa_custom fa-2x"></i></a>
                        <a href="#"><i class="fa fa-github fa_custom fa-2x"></i></a>
                        <a href="#"><i class="fa fa-linkedin fa_custom fa-2x"></i></a>
                    </div>
                </div>

                <div className='copyright'>
                    <hr />
                    <p>© copyright 2024 BEP</p>
                </div>

            </div>



        </>
    )
}
export default Footer;