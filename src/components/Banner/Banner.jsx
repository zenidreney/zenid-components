import { FcOk } from "react-icons/fc";
import { IoIosWarning } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { FcInfo } from "react-icons/fc";
import classnames from "classnames"



export default function Banner({ children, text, variant }) {

    const variantClass = variant && `banner-${variant}`
    const classNames = classnames("banner-container", variantClass)
    
    const icon = (variant === "success") ? <FcOk /> :
                 (variant === "warning") ? <IoIosWarning className="warning-icon" /> : 
                 (variant === "error") ? <IoIosCloseCircle className="error-icon" /> :
                 (variant === "neutral") ? <FcInfo /> : ""


    const bannerText = text ? text :
                        (variant === "success") ? "Congratulations!" :
                        (variant === "warning") ? "Attention" :
                        (variant === "error") ? "There is a problem with your application" :
                        (variant === "neutral") ? "Update available" : ""

    const infoText = <p>{children}</p>

    return (

        <div className={classNames}>

            <div className="banner-header-row">
                {icon}
                <h2 className="banner-header">{bannerText}</h2>
            </div>
            
            {children ? <div  className="banner-header-row">
                {icon}
                {infoText}
            </div> : ""}
            
        </div>
    )
}