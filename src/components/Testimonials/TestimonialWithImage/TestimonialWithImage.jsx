import { BiSolidQuoteAltLeft } from "react-icons/bi";
import "./TestimonialWithImage.css"

const defaultValues = {
    imgSrc: "/SampleImg.jpg",
    bgColor: "#2545B5",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.",
    name: "May Anderson",
    title: "Workcation, CTO"
}

export default function TestimonialWithImage({
    children = defaultValues.quote,
    imgSrc = defaultValues.imgSrc,
    bgColor = defaultValues.bgColor,
    name = defaultValues.name,
    title = defaultValues.title
}) {



    return (
        <div className="testimonial-container" style={{ backgroundColor: bgColor }}>
            <div className="pic-container">
                <img src={imgSrc} alt="Profile picture." className="profile" />
            </div>

            <div className="text-container">
                <BiSolidQuoteAltLeft className="testimonial-icon" />
                <blockquote>
                    <p>{children}</p>
                </blockquote>
                <div className="info-container" >
                    <p className="name">{name} </p>
                    <p className="location">{title}</p>
                </div>
            </div>
        </div>

    )
}