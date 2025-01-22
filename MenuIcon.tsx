import { IconProps } from "./common/IconProps";
import { GoogleSVG } from "./common/GoogleSVG";

// Plain closed book
export function MenuIcon(props: IconProps) {
    const {color, dim} = props

    return (
        <GoogleSVG
            color={color}
            dim={dim}
        >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </GoogleSVG>
    )
}