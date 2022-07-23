import { Link } from 'react-router-dom';
import carousel1 from '../content/images/carousel1.jpg'
import carousel2 from '../content/images/carousel2.jpg'
import carousel3 from '../content/images/carousel3.jpg'
import LuxuryWeddingImg from '../content/images/LuxuryWeddingImg.jpg'
import MakeupImg from '../content/images/MakeupImg.jpg'
import DecorationImg from '../content/images/DecorationImg.jpg'
import ServiceCard from './HomepageComponent/ServicesCard';

function Home() {
    return (
        <>
            <div id="CarouselHomepageSlider" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#CarouselHomepageSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#CarouselHomepageSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#CarouselHomepageSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ maxHeight: "750px", minHeight: "100%" }}>
                        <img src={carousel2} className="d-block w-100 p-0" alt="#ImgNotFound" />
                    </div>
                    <div className="carousel-item" style={{ maxHeight: "750px", minHeight: "100%" }}>
                        <img src={carousel1} className="d-block w-100 p-0" alt="#ImgNotFound" />
                    </div>
                    <div className="carousel-item" style={{ maxHeight: "750px", minHeight: "100%" }}>
                        <img src={carousel3} className="d-block w-100 p-0" alt="#ImgNotFound" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#CarouselHomepageSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#CarouselHomepageSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className="service_div container-xl">
                <h1 className="main_heading">
                    Our Services
                </h1>
                <div id="ServiceDivCarousel" class="carousel slide pt-3" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4 serviceBox1">
                                    <ServiceCard />
                                </div>
                                <div className="col-md-6 col-lg-4 serviceBox2">
                                    <ServiceCard />
                                </div>
                                <div className="col-lg-4 serviceBox3">
                                    <ServiceCard />
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4 serviceBox1">
                                    <ServiceCard />
                                </div>
                                <div className="col-md-6 col-lg-4 serviceBox2">
                                    <ServiceCard />
                                </div>
                                <div className="col-lg-4 serviceBox3">
                                    <ServiceCard />
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4 serviceBox1">
                                    <ServiceCard />
                                </div>
                                <div className="col-md-6 col-lg-4 serviceBox2">
                                    <ServiceCard />
                                </div>
                                <div className="col-lg-4 serviceBox3">
                                    <ServiceCard />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#ServiceDivCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#ServiceDivCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            <div className="luxury_wedding_div container-xl px-3">
                <h1 className="main_heading">
                    Luxury Wedding
                </h1>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 luxury_wedding1">
                        <img src={LuxuryWeddingImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 luxury_wedding2">
                        <img src={LuxuryWeddingImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 luxury_wedding3">
                        <img src={LuxuryWeddingImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 luxury_wedding4">
                        <img src={LuxuryWeddingImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className="col-md-4 col-lg-3 p-2 luxury_wedding5">
                        <img src={LuxuryWeddingImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className="col-md-4 col-lg-3 p-2 luxury_wedding6">
                        <img src={LuxuryWeddingImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className="col-md-4 col-lg-3 p-2 luxury_wedding7">
                        <img src={LuxuryWeddingImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className="col-md-4 col-lg-3 p-2 luxury_wedding8">
                        <img src={LuxuryWeddingImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                </div>
            </div>


            <div className="makeup_div container-xl px-3">
                <h3 className="sub_heading">
                    Makeup
                </h3>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 p-2 makeup1">
                        <img src={MakeupImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 p-2 makeup2">
                        <img src={MakeupImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 p-2 makeup3">
                        <img src={MakeupImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                </div>
            </div>


            <div className="decoration_div container-xl px-3">
                <h3 className="sub_heading">
                    Decoration
                </h3>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 p-2 decoration1">
                        <img src={DecorationImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 p-2 decoration2">
                        <img src={DecorationImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 p-2 decoration3">
                        <img src={DecorationImg} alt="#ImgNotFound" className='w-100' />
                    </div>
                </div>
            </div>

            <div className="decoration_div container-xl px-3 pt-4 pb-md-4">
                <button type="button" class="btn go_to_gallary_btn px-3" style={{ border: "1px solid #D8C5AA" }}><b>Go to Gallery <i class="fa fa-long-arrow-right"></i></b></button>
            </div>

            <br />

            <div className="image_and_intro_div container-xl px-3">
                <div className="row">
                    <div className="col-md-6 col-xl-5 image_section order-md-2">
                        <div class="card">
                            <div class="card-body" style={{ border: "1px solid black" }}>
                                <img src="https://www.theknot.com/tk-media/images/4f509983-0edc-4320-81f3-bb67621fd9af~rs_768.h" alt="#ImgNotFound" className='w-100' style={{ maxHeight: "400px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-7 detail_section order-md-1">
                        <h3 className="sub_heading_with_color pt-3">
                            How we work
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate voluptates ut iusto autem, enim dolore vitae laboriosam maiores iste repellendus ad, tenetur odit dignissimos sint quidem asperiores! Dolor, excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate voluptates ut iusto autem.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate voluptates ut iusto autem, enim dolore vitae laboriosam maiores iste repellendus ad, tenetur odit dignissimos sint quidem asperiores! Dolor, excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate voluptates ut iusto autem.</p>
                    </div>
                </div>

                <div className="row pt-5">
                    <div className="col-md-6 col-xl-5 image_section">
                        <div class="card">
                            <div class="card-body" style={{ border: "1px solid black" }}>
                                <img src="https://setmywed.com/blog/wp-content/uploads/2019/12/entry.jpg" alt="#ImgNotFound" className='w-100' style={{ maxHeight: "400px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-7 detail_section">
                        <h3 className="sub_heading_with_color pt-3">
                            About Us
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate voluptates ut iusto autem, enim dolore vitae laboriosam maiores iste repellendus ad, tenetur odit dignissimos sint quidem asperiores! Dolor, excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate voluptates ut iusto autem.</p>
                    </div>
                </div>
            </div>

            <div className="date_intro_and_calendar container-xl p-5 mt-5 " style={{ background: "#F5F5F5" }}>
                <div className="row">
                    <div className="col-md-6 col-xl-5 image_section order-md-2">
                        <img src="https://st2.depositphotos.com/4266097/8304/v/950/depositphotos_83041714-stock-illustration-calendar-2016-in-green-color.jpg" alt="#ImgNotFound" className='w-100' style={{ maxHeight: "300px" }} />
                    </div>
                    <div className="col-md-6 col-xl-7 detail_section order-md-1">
                        <h3 className="sub_heading_with_color pt-3 pt-md-0">
                            Reserves the date
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate voluptates ut iusto autem, enim dolore vitae laboriosam maiores iste repellendus ad, tenetur odit dignissimos sint quidem asperiores! Dolor, excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate voluptates ut iusto autem.</p>
                        <button type="button" class="btn btn-dark py-2 px-3" style={{ float: "right" }}>Reserves the date</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
