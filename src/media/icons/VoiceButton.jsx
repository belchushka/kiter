import * as React from "react"
import Svg, {
    G,
    Circle,
    Rect,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const VoiceButton = (props) => (
    <Svg
        width={144}
        height={144}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G filter="url(#a)">
            <Circle cx={72} cy={72} r={55} fill="url(#b)" />
        </G>
        <Rect
            x={62.53}
            y={39.344}
            width={17.457}
            height={37.638}
            rx={8.729}
            fill="#fff"
        />
        <Path
            d="M55.672 68.679v2.637c0 4.642 2.063 9.043 5.63 12.012v0a15.752 15.752 0 0 0 10.044 3.616v0c3.55 0 7.076-1.216 9.87-3.405v0c3.917-3.067 6.253-7.803 6.253-12.777v-2.083"
            stroke="#fff"
            strokeWidth={4}
            strokeLinecap="round"
        />
        <Path fill="#fff" d="M70.012 86.944h3.741v17.712h-3.741z" />
        <Rect
            x={62.53}
            y={104.656}
            width={3.321}
            height={19.951}
            rx={1.66}
            transform="rotate(-90 62.53 104.656)"
            fill="#fff"
        />
        <Defs>
            <LinearGradient
                id="b"
                x1={72}
                y1={17}
                x2={72}
                y2={127}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#AA80F9" />
                <Stop offset={1} stopColor="#6165D7" />
            </LinearGradient>
        </Defs>
    </Svg>
)

export default VoiceButton
