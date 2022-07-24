import { Link } from "react-router-dom";
import { useEffect } from "react";

function Signup() {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="Signup_container pt-5">
                <div className="Signup_container_data">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4 px-5 px-lg-1">
                            <div className="text-center">
                                <h1 className="main_heading pb-5">Signup</h1>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <input type="text" className="form-control p-2" placeholder="First Name" style={{ width: "100%", fontSize: "18px", borderRadius: "0", borderTop: "0", borderLeft: "0", borderRight: "0" }} />
                                </div>
                                <div className="col-6">
                                    <input type="text" className="form-control p-2" placeholder="First Name" style={{ width: "100%", fontSize: "18px", borderRadius: "0", borderTop: "0", borderLeft: "0", borderRight: "0" }} />
                                </div>
                            </div>
                            <input type="email" className="form-control p-2 mt-3" placeholder="Email" style={{ width: "100%", fontSize: "18px", borderRadius: "0", borderTop: "0", borderLeft: "0", borderRight: "0" }} />
                            <input type="text" className="form-control p-2 mt-3" placeholder="password" style={{ width: "100%", fontSize: "18px", borderRadius: "0", borderTop: "0", borderLeft: "0", borderRight: "0" }} />
                            <input type="text" className="form-control p-2 mt-3" placeholder="Create password" style={{ width: "100%", fontSize: "18px", borderRadius: "0", borderTop: "0", borderLeft: "0", borderRight: "0" }} />
                            <button type="button" className="btn btn-dark w-100 mt-5 py-2">Signup</button>
                            <h5 className="text-center pt-3"><span className="text-muted">Don't have an account</span> <Link to="/login" className="text-dark" style={{ textDecoration: "none" }}>Login</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
