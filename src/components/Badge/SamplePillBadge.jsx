import Badge from "./Badge"

const colorOptionsArray = ["grey", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
const badgeContentArray = ["You", "can", "pass", "your", "own", "word", "to", "badge"]

const SampleBadge = colorOptionsArray.map((color, i) => {

    return <Badge
        key={color}
        color={color}
        variant="pill" > {badgeContentArray[i]}</Badge>
}
)


export default SampleBadge