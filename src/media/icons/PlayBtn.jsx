import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PlayBtn = (props) => (
    <Svg
        width={79}
        height={90}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            opacity={0.7}
            d="M75 38.072c5.333 3.079 5.333 10.777 0 13.856L12 88.301c-5.333 3.08-12-.77-12-6.928V8.627C0 2.469 6.667-1.38 12 1.699l63 36.373Z"
            fill="#fff"
        />
    </Svg>
)

export default PlayBtn
