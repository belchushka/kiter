import * as React from "react"
import Svg, { Rect } from "react-native-svg"

const BurgerMenu = (props) => (
    <Svg
        width={50}
        height={42}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={50} height={8.077} rx={4.038} fill="#fff" />
        <Rect y={16.962} width={50} height={8.077} rx={4.038} fill="#fff" />
        <Rect y={33.923} width={50} height={8.077} rx={4.038} fill="#fff" />
    </Svg>
)

export default BurgerMenu
