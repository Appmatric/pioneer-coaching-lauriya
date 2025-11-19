import React from "react";
import ImageSlider from "../../../components/Common/slider/ImageSlider";


const Home = () =>{
    const Imageslider = [
        "https://storage.googleapis.com/assets.thehindustep.in/img%2Fproducts%2Fpd_bg_w_d77b0d1c1800743f720075e9e13261ef.png",
        "https://www.watermarkinsights.com/wp-content/uploads/2024/09/itemeditorimage_649188486323d-1-1024x512.webp",
        "https://www.mgiclasses.com/assets/front/images/220-SM744603.jpg",
    ]
    return(
        <>
         <ImageSlider images={Imageslider} />
        </>
    )
}
export default Home;