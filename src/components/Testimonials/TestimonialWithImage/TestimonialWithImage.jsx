import { BiSolidQuoteAltLeft } from "react-icons/bi";
import "./TestimonialWithImage.css"

export default function TestimonialWithImage() {
    return (
        <div className="testimonial-container">
            <div className="pic-container">
                <img src="/SampleImg.jpg" alt="Profile picture." className="profile" />
            </div>

            <div className="text-container">
                <BiSolidQuoteAltLeft className="testimonial-icon"/>
                <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </p>
                </blockquote>
                <div className="info-container">
                    <p className="name">May Anderson</p>
                    <p className="location">Workcation, CTO</p>
                </div>
            </div>
        </div>

    )
}