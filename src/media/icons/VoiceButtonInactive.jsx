import * as React from "react"
import Svg, {
    Circle,
    Rect,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg"

const VoiceButtonInactive = (props) => (
    <Svg
        width={110}
        height={110}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={55} cy={55} r={55} fill="url(#a)" />
        <Rect
            x={47.53}
            y={24.344}
            width={13.457}
            height={33.638}
            rx={6.729}
            stroke="#fff"
            strokeWidth={4}
        />
        <Path
            d="M38.672 51.679v2.637c0 4.642 2.063 9.043 5.63 12.012v0a15.752 15.752 0 0 0 10.044 3.616v0c3.55 0 7.076-1.216 9.87-3.405v0c3.917-3.067 6.253-7.803 6.253-12.777v-2.083"
            stroke="#fff"
            strokeWidth={4}
            strokeLinecap="round"
        />
        <Path fill="#fff" d="M53.012 69.944h3.741v17.712h-3.741z" />
        <Rect
            x={45.53}
            y={87.656}
            width={3.321}
            height={19.951}
            rx={1.66}
            transform="rotate(-90 45.53 87.656)"
            fill="#fff"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={55}
                y1={0}
                x2={55}
                y2={110}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#AA80F9" />
                <Stop offset={1} stopColor="#6165D7" />
            </LinearGradient>
        </Defs>
    </Svg>
)

export default VoiceButtonInactive
