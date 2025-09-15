import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

function AboutUS() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 pt-3">
                    <small className="text-uppercase" style="color: #9B5DE5;">Welcome to Our Journey</small>
                    <h1 className="h2 mb-4" style="font-weight: 600;">About Our <span style="color: #9B5DE5;">Company</span>
                    </h1>
                    <p className="text-secondary" style="line-height: 2;">Embark on a journey with us as we strive to
                        redefine excellence and innovation in every step. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Suscipit repellat iure laboriosam cum voluptatum, nam minima deserunt aut?
                        Distinctio voluptatibus dolor quaerat quo omnis illo sequi at velit, odit quod!</p>
                </div>
                <div className="col-md-6 text-center">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <img src={image1} className="w-100 rounded" alt="" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <img src={image2} className="w-100 rounded" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUS;