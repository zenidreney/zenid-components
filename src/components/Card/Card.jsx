import { HiOutlineCloudUpload } from "react-icons/hi";



const defaultIcon = <HiOutlineCloudUpload />
const defaultTitle = "Easy Deployment"
const defaultText = "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."

export default function Card({
                            children = defaultText,
                            icon = defaultIcon,
                            title = defaultTitle,
                           }) {

                            
    return (

        <div className="card-container">
            {icon}
            <h2>
                {title}
            </h2>
            <p>{children}</p>
        </div>


    )
}