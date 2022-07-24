import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function MyProfile(props) {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="container-xl pt-5 profile_data_before_md_srcn">
                <div className="row px-3">
                    <div className="col-md-3 col-lg-2 dashboard_left_side">
                        <Link to="/my_profile" style={{ textDecoration: "none", color: "black" }}><h5 className="py-2 sub_heading text-dark"><i className="fa fa-user"></i> My Profile</h5></Link>
                        <Link to="/my_profile/order" style={{ textDecoration: "none", color: "black" }}><h5 className="py-2 sub_heading text-dark"><i className="fa fa-first-order"></i> Orders</h5></Link>
                        <Link to="/my_profile/user" style={{ textDecoration: "none", color: "black" }}><h5 className="py-2 sub_heading text-dark"><i className="fa fa-user-circle-o"></i> Users</h5></Link>
                        <Link to="/my_profile/emails" style={{ textDecoration: "none", color: "black" }}><h5 className="py-2 sub_heading text-dark"><i className="fa fa-envelope"></i> Emails</h5></Link>
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}><h5 className="py-2 sub_heading text-dark"><i className="fa fa-gear"></i> Setting</h5></Link>
                    </div>
                    <div className="col-md-9 col-lg-10 px-5" style={{ borderLeft: "1px solid black" }}>
                        {props.page}
                    </div>
                </div>
            </div>

            <div className="container-xl pt-5 profile_data_after_md_srcn">
                {props.page}
            </div>
            <br /><br /><br /><br /><br />
        </>
    );
}

export default MyProfile;
