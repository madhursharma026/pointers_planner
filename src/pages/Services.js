import { useEffect } from "react";

function Services() {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="service_div container-xl">
                <div className="pt-4 text-center pb-5">
                    <h1 className="main_heading">
                        Our Services
                    </h1>
                    <p>
                        <b>You can select One or Multiple services with your Location.</b>
                    </p>
                </div>
                <div className="px-3">
                    <select style={{ borderTop: "0", borderLeft: "0", borderRight: "0" }}>
                        <option>Multiple days event&emsp;</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </div>
                <div className="row px-3">
                    <div className="col-md-3 col-6 pt-3">
                        <select style={{ borderTop: "0", borderLeft: "0", borderRight: "0", width: "100%" }}>
                            <option>Select Services&emsp;</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                    <div className="col-md-3 col-6 pt-3">
                        <select style={{ borderTop: "0", borderLeft: "0", borderRight: "0", width: "100%" }}>
                            <option>Enter your city&emsp;</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                    <div className="col-md-3 col-6 pt-3">
                        <select style={{ borderTop: "0", borderLeft: "0", borderRight: "0", width: "100%" }}>
                            <option>Start date&emsp;</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                    <div className="col-md-3 col-6 pt-3">
                        <select style={{ borderTop: "0", borderLeft: "0", borderRight: "0", width: "100%" }}>
                            <option>End date&emsp;</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                </div>
                <div className="image_and_intro_div container-xl">
                    <div className="row pt-5">
                        <div className="col-lg-6 col-xl-5 image_section order-lg-2">
                            <div className="card">
                                <div className="card-body" style={{ border: "1px solid black" }}>
                                    <img src="https://www.theknot.com/tk-media/images/4f509983-0edc-4320-81f3-bb67621fd9af~rs_768.h" alt="#ImgNotFound" className='w-100' style={{ maxHeight: "400px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7 detail_section order-lg-1">
                            <img src="https://newhorizon-bsh.s3.ap-south-1.amazonaws.com/nhengineering/bsh/wp-content/uploads/2020/01/17113522/default_image_01.png" alt="#ImgNotFound" width="50px" height="50px" className="my-3 my-lg-0" />
                            <h3 className="sub_heading_with_color pt-3">
                                How we work
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate voluptates ut iusto autem, enim dolore vitae laboriosam maiores iste repellendus ad, tenetur odit dignissimos sint quidem asperiores! Dolor, excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate voluptates ut iusto autem.</p>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col-lg-6 col-xl-5 image_section">
                            <div className="card">
                                <div className="card-body" style={{ border: "1px solid black" }}>
                                    <img src="https://setmywed.com/blog/wp-content/uploads/2019/12/entry.jpg" alt="#ImgNotFound" className='w-100' style={{ maxHeight: "400px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7 detail_section">
                            <img src="https://newhorizon-bsh.s3.ap-south-1.amazonaws.com/nhengineering/bsh/wp-content/uploads/2020/01/17113522/default_image_01.png" alt="#ImgNotFound" width="50px" height="50px" className="my-3 my-lg-0" />
                            <h3 className="sub_heading_with_color pt-3">
                                About Us
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate voluptates ut iusto autem, enim dolore vitae laboriosam maiores iste repellendus ad, tenetur odit dignissimos sint quidem asperiores! Dolor, excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate voluptates ut iusto autem.</p>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col-lg-6 col-xl-5 image_section order-lg-2">
                            <div className="card">
                                <div className="card-body" style={{ border: "1px solid black" }}>
                                    <img src="https://www.theknot.com/tk-media/images/4f509983-0edc-4320-81f3-bb67621fd9af~rs_768.h" alt="#ImgNotFound" className='w-100' style={{ maxHeight: "400px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7 detail_section order-lg-1">
                            <img src="https://newhorizon-bsh.s3.ap-south-1.amazonaws.com/nhengineering/bsh/wp-content/uploads/2020/01/17113522/default_image_01.png" alt="#ImgNotFound" width="50px" height="50px" className="my-3 my-lg-0" />
                            <h3 className="sub_heading_with_color pt-3">
                                How we work
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate voluptates ut iusto autem, enim dolore vitae laboriosam maiores iste repellendus ad, tenetur odit dignissimos sint quidem asperiores! Dolor, excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate voluptates ut iusto autem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
