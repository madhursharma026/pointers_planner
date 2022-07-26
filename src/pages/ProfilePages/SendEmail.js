import { Link } from 'react-router-dom';

function SendEmail() {
    return (
        <>
            <h4><i className="fa fa-user-circle-o"></i> Users/Email</h4>
            <div className="compose_email mt-5">
                <div className="bg-dark">
                    <p className='text-light p-2' style={{ fontSize: "20px" }}>&ensp;<i className="fa fa-commenting"></i>&emsp; Send to johndoe123@gmail.com</p>
                </div>
                <h5 className='mt-4'>From: <input type="email" className='mt-5' style={{ width: "80%", borderTop: "0", borderLeft: "0", borderRight: "0" }} /></h5>
                <h5 className='mt-4'>Subject: <input type="text" style={{ width: "80%", borderTop: "0", borderLeft: "0", borderRight: "0" }} /></h5>
                <textarea rows="5" className='mt-3' style={{ width: "100%" }}></textarea>
                <button type="button" className="btn" style={{ float: "right", background: "#EFECCE", fontSize: "18px" }}><b>Send Emails</b></button>
            </div>
        </>
    );
}

export default SendEmail;
