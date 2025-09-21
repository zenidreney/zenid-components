import Card from "./Card"
import { RxUpload } from "react-icons/rx";

const iconStyles = {
    backgroundColor: "#3F75FE",
    color: "#ffffff",
    fontSize: "1.5em",
    width: "3em",
    height: "3em",
    borderRadius: "6px",
    padding: "0.4em"
}

const SampleCard = <Card

    icon={<RxUpload
        style={iconStyles}
    />}

/>

export default SampleCard
