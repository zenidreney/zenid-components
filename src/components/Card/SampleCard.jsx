import Card from "./Card"
import { RxUpload } from "react-icons/rx";


const SampleCard = <>
    <Card />

    <br />


    <Card
        icon={<RxUpload 
                style={{backgroundColor:"brown"}}
        />}
        
        title="Props Based"
    >Some sample text</Card>

</>

export default SampleCard
