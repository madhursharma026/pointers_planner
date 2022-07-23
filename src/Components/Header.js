import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import Logo from '../content/images/Logo.png'

function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light header_before_lg_scrn">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        <img src={Logo} alt="#ImgNotFound" style={{ width: "200px" }} />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item px-2">
                                <Link class="nav-link active" aria-current="page" to="/"><b>Home</b></Link>
                            </li>
                            <li class="nav-item px-2">
                                <Link class="nav-link" to="/"><b>About</b></Link>
                            </li>
                            <li class="nav-item px-2">
                                <Link class="nav-link" to="/"><b>Gallery</b></Link>
                            </li>
                            <li class="nav-item px-2">
                                <Link class="nav-link" to="/"><b>Services</b></Link>
                            </li>
                            <li class="nav-item px-2">
                                <Link class="nav-link" to="/"><b>Reserved the date</b></Link>
                            </li>
                            <li class="nav-item px-2">
                                <Link class="nav-link" to="/"><b>Contact</b></Link>
                            </li>
                        </ul>
                    </div>
                    <i class="fa fa-search px-3" style={{ fontSize: "22px" }}></i>
                    <div class="btn-group dropstart p-3">
                        <i class="fa fa-user-circle-o" data-bs-toggle="dropdown" style={{ fontSize: "22px", cursor: "pointer" }}></i>
                        <ul class="dropdown-menu">
                            <Link to="/" style={{ textDecoration: "none" }}><li className='px-3 py-2 text-dark'>My profile</li></Link>
                            <Link to="/" style={{ textDecoration: "none" }}><li className='px-3 py-2 text-dark'>My profile</li></Link>
                            <Link to="/" style={{ textDecoration: "none" }}><li className='px-3 py-2 text-dark'>My profile</li></Link>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg bg-light header_after_lg_scrn">
                <div class="container-fluid">
                    <div className="row">
                        <div className="col-6 col-md-5">
                            <div className='row'>
                                <div className="col-3 col-sm-2">
                                    <button class="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                                <div className="col-9 col-sm-8"><Link class="navbar-brand px-3" to="/">
                                    <img src="https://www.qceventplanning.com/blog/wp-content/themes/qcevent_blog/images/pointers-for-planners-logo.png" alt="#ImgNotFound" className='w-100' />
                                </Link>
                                </div>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 pt-3">
                                        <li class="nav-item px-2">
                                            <Link class="nav-link active" aria-current="page" to="/"><b>Home</b></Link>
                                        </li>
                                        <li class="nav-item px-2">
                                            <Link class="nav-link" to="/"><b>About</b></Link>
                                        </li>
                                        <li class="nav-item px-2">
                                            <Link class="nav-link" to="/"><b>Gallery</b></Link>
                                        </li>
                                        <li class="nav-item px-2">
                                            <Link class="nav-link" to="/"><b>Services</b></Link>
                                        </li>
                                        <li class="nav-item px-2">
                                            <Link class="nav-link" to="/"><b>Reserved the date</b></Link>
                                        </li>
                                        <li class="nav-item px-2">
                                            <Link class="nav-link" to="/"><b>Contact</b></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-7" style={{ textAlign: "right" }}>
                            <div>
                                <i class="fa fa-search px-3" style={{ fontSize: "22px" }}></i>
                                <div class="btn-group dropstart p-3">
                                    <i class="fa fa-user-circle-o" data-bs-toggle="dropdown" style={{ fontSize: "22px", cursor: "pointer" }}></i>
                                    <ul class="dropdown-menu">
                                        <Link to="/1" style={{ textDecoration: "none" }}><li className='px-3 py-2 text-dark'>My profile</li></Link>
                                        <Link to="/2" style={{ textDecoration: "none" }}><li className='px-3 py-2 text-dark'>My profile</li></Link>
                                        <Link to="/3" style={{ textDecoration: "none" }}><li className='px-3 py-2 text-dark'>My profile</li></Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
