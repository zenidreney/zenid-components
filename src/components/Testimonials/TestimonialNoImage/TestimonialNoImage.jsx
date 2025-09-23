import "./TestimonialNoImage.css"

const defaultValues = {
    bgColor: "#ffffff",
    color: "#000000",
    logoSrc: "./Logo.png",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.",
    name: "May Anderson",
    title: "Workcation, CTO"
}

export default function TestimonialNoImage({
    children = defaultValues.quote,
    bgColor = defaultValues.bgColor,
    color = defaultValues.color,
    logoSrc = defaultValues.logoSrc,
    name = defaultValues.name,
    title = defaultValues.title
}) {

    return (
        <div className="txt-cntr" style={{ backgroundColor: bgColor, color: color }}>
            <img src={logoSrc} />
            <blockquote>
                <p>"{children}"</p>
            </blockquote>
            <div className="info-cntr" >
                <p>{name} </p>
                <p>/</p>
                <p>{title}</p>
            </div>
        </div>
    )
}