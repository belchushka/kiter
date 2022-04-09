import * as React from "react"
import Svg, { Circle, Rect } from "react-native-svg"

const SubmitBtn = (props) => (
    <Svg
        width={62}
        height={62}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={31} cy={31} r={31} fill="#fff" />
        <Rect
            x={15.5}
            y={28.417}
            width={28.413}
            height={6.458}
            rx={3.229}
            fill="#AA80F9"
        />
        <Rect
            x={27.469}
            y={41.793}
            width={20.743}
            height={6.458}
            rx={3.229}
            transform="rotate(-45 27.469 41.793)"
            fill="#AA80F9"
        />
        <Rect
            width={20.743}
            height={6.458}
            rx={3.229}
            transform="scale(1 -1) rotate(-45 -12.22 -43.422)"
            fill="#AA80F9"
        />
    </Svg>
)

export default SubmitBtn
