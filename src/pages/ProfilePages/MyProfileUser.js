import { Link } from 'react-router-dom';

function MyProfileUser() {
    return (
        <>
            <h4><i className="fa fa-comment"></i> Messages</h4>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <img src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png" alt="#ImgNotFound" width="30px" height="30px" style={{ borderRadius: "100%" }} />
                            &emsp; John Doe
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.
                            <Link to="/my_profile/send_email" type="button" className="btn" style={{ float: "right", background: "#EFECCE", fontSize: "18px" }}><b>Send Emails</b></Link>
                        </div><br />
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <img src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png" alt="#ImgNotFound" width="30px" height="30px" style={{ borderRadius: "100%" }} />
                            &emsp; John Doe
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.
                            <Link to="/my_profile/send_email" type="button" className="btn" style={{ float: "right", background: "#EFECCE", fontSize: "18px" }}><b>Send Emails</b></Link>
                        </div><br />
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <img src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png" alt="#ImgNotFound" width="30px" height="30px" style={{ borderRadius: "100%" }} />
                            &emsp; John Doe
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                            <Link to="/my_profile/send_email" type="button" className="btn" style={{ float: "right", background: "#EFECCE", fontSize: "18px" }}><b>Send Emails</b></Link>
                        </div><br />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyProfileUser;
