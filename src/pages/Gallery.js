import LuxuryWeddingImg from '../content/images/LuxuryWeddingImg.jpg'
import MakeupImg from '../content/images/MakeupImg.jpg'
import DecorationImg from '../content/images/DecorationImg.jpg'
import { useEffect } from 'react';
import GalleryImageSection from './GalleryImageSection/GalleryImageSection';

function Gallery() {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="pt-4 text-center">
                <h1 className="main_heading">
                    Gallery
                </h1>
                <p>
                    <b>Checkout our luxury wedding photography, Videography, Makeup & c. Declaration</b>
                </p>
            </div>
            <div className="photography_div container-xl px-3">
                <h3 className="sub_heading">
                    Photography
                </h3>
                <GalleryImageSection />
                {/* <div className="row">
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
                </div> */}
            </div>


            <div className="videography_div container-xl px-3">
                <h3 className="sub_heading">
                    Videography
                </h3>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3 p-2 videography1">
                        <video src="http://techslides.com/demos/sample-videos/small.mp4" controls className='w-100'>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 p-2 videography2">
                        <video src="http://techslides.com/demos/sample-videos/small.mp4" controls className='w-100'>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 p-2 videography3">
                        <video src="http://techslides.com/demos/sample-videos/small.mp4" controls className='w-100'>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 p-2 videography4">
                        <video src="http://techslides.com/demos/sample-videos/small.mp4" controls className='w-100'>
                            Your browser does not support the video tag.
                        </video>
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
                        <button type="button" className="btn btn-dark py-2 px-3" style={{ float: "right" }}>Reserves the date</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gallery;
