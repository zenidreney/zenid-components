import { HiOutlineCloudUpload } from "react-icons/hi";

const defaultValues = {
    icon: <HiOutlineCloudUpload />,
    iconBgColor: "#3F75FE",
    title: "Easy Deployment",
    text: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
}

export default function Card({
    icon = defaultValues.icon,
    iconBgColor = defaultValues.iconBgColor,
    title = defaultValues.title,
    children = defaultValues.text,
}) {

    return (

        <div className="card-container">
            <div
                className="icon-container"
                style={{ backgroundColor: iconBgColor }}>
                {icon}
            </div>
            <h2>
                {title}
            </h2>
            <p>{children}</p>
        </div>


    )
}