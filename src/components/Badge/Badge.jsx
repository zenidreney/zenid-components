import classnames from "classnames"

export default function Badge({color}) {
    console.log(color)

    const className = classnames("badge", color && `badge-${color}`)

    return (
        <span className={className}>Badge</span>
    )
}