import Card from "./Card"
import { RxUpload } from "react-icons/rx";


const SampleDefaultCard =
    <Card />

const SamplePropsCard =

    <Card
        icon={<RxUpload />}
        iconBgColor="brown"
        title="Props Based"
    >Some sample text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
    </Card>

export { SampleDefaultCard, SamplePropsCard }
