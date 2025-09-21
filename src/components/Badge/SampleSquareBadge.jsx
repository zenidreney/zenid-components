import Badge from "./Badge"

const colorOptionsArray = ["grey", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]

const SampleBadge = colorOptionsArray.map((color) => (


    <Badge
        key={color}
        color={color}
        variant="square" />
))


export default SampleBadge