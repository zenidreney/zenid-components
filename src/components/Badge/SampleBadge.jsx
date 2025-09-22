import Badge from "./Badge"

const colorOptionsArray = ["grey", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]
const badgeContentArray = ["You", "can", "pass", "your", "own", "props", "to", "badge"]

const SamplePillBadge = colorOptionsArray.map((color, i) => {

    return <Badge
        key={color}
        color={color}
        variant="pill" > {badgeContentArray[i]}</Badge>
}
)

const SampleSquareBadge = colorOptionsArray.map((color) => (


    <Badge
        key={color}
        color={color}
        variant="square" />
))


export { SamplePillBadge, SampleSquareBadge }