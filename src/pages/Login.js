import { Link } from "react-router-dom";
import { useEffect } from "react";

function Login() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div id="img_upper_left"></div>
            <div id="img_lower_right"></div>
            <div className="login_container pt-5">
                <div className="login_container_data pt-5">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4 px-5 px-lg-1">
                            <div className="text-center">
                                <h1 className="main_heading pb-5">Login</h1>
                            </div>
                            <input type="email" className="form-control p-2" placeholder="Email" style={{ width: "100%", fontSize: "18px", borderRadius: "0", borderTop: "0", borderLeft: "0", borderRight: "0" }} />
                            <input type="text" className="form-control p-2 mt-3" placeholder="password" style={{ width: "100%", fontSize: "18px", borderRadius: "0", borderTop: "0", borderLeft: "0", borderRight: "0" }} />
                            <h6 className="pt-2"><Link to="/" className="text-muted" style={{ textDecoration: "none" }}>Forgotten Password</Link></h6>
                            <button type="button" className="btn btn-dark w-100 mt-3 py-2">Login</button>
                            <h5 className="text-center pt-3"><span className="text-muted">Don't have an account</span> <Link to="/signup" className="text-dark" style={{ textDecoration: "none" }}>Signup</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;