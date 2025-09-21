import { HiOutlineCloudUpload } from "react-icons/hi";

const defaultIconStyles = {
    backgroundColor: "#3F75FE",
    color: "#ffffff",
    fontSize: "1.5em",
    width: "3em",
    height: "3em",
    borderRadius: "6px",
    padding: "0.4em"
}

const defaultIcon = <HiOutlineCloudUpload style={defaultIconStyles} />

export default function Card({ icon = defaultIcon} ) {
    return icon
}