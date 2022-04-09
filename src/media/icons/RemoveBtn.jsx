import * as React from "react"
import Svg, { Circle, Rect } from "react-native-svg"

const RemoveBtn = (props) => (
    <Svg
        width={62}
        height={62}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={31} cy={31} r={31} fill="#fff" />
        <Rect
            x={17}
            y={40.353}
            width={33.026}
            height={5.335}
            rx={2.667}
            transform="rotate(-45 17 40.353)"
            fill="#AA80F9"
        />
        <Rect
            x={20.773}
            y={17}
            width={33.026}
            height={5.335}
            rx={2.667}
            transform="rotate(45 20.773 17)"
            fill="#AA80F9"
        />
    </Svg>
)

export default RemoveBtn
