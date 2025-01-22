import { IconProps } from "./common/IconProps";
import { GoogleSVG } from "./common/GoogleSVG";

export function KeyboardArrowDownIcon(props: IconProps) {
    const {color, dim} = props

    return (
        <GoogleSVG
            color={color}
            dim={dim}
        >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </GoogleSVG>
    )
}