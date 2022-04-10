import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    ScrollView,
    TouchableOpacity
} from "react-native";
import {GestureHandlerRootView, PanGestureHandler, State} from "react-native-gesture-handler";
import {Video} from "expo-av";
import Animated, {useAnimatedStyle, useSharedValue} from "react-native-reanimated";
import PlayBtn from "../../media/icons/PlayBtn";

const height = Math.round(Dimensions.get("window").height)


const VerticalSlider = ({onSlideChange,data,resultSubmitVisible}) => {
    const scrollViewRef = useRef()
    const visibility = useSharedValue(0)
    const video = React.useRef([]);
    const totalSlides = data.length
    const [currentSlide, setCurrentSlide] = useState(0)
    useEffect(()=>{
        if (resultSubmitVisible){
            video.current[currentSlide].playing = false
            video.current[currentSlide].video.pauseAsync()
            visibility.value=1
        }
    },[video, resultSubmitVisible])
    const panGestureEvent =useCallback(({nativeEvent}) => {
        const translation = nativeEvent.translationY
        const startPoint = currentSlide * height
        const direction = translation > 0
        if (currentSlide != 0) {
            if (currentSlide != totalSlides - 1 || (currentSlide == totalSlides - 1 && direction)) {
                scrollViewRef.current.scrollTo({
                    y: startPoint - translation,
                    animated: false
                })
            }
        }
        if ((currentSlide == 0 && !direction)) {
            scrollViewRef.current.scrollTo({
                y: startPoint - translation,
                animated: false
            })
        }
    },[currentSlide])
    const panGestureEventChange =useCallback(({nativeEvent}) => {
        const translation = nativeEvent.translationY
        const startPoint = currentSlide * height
        const direction = translation > 0
        if (nativeEvent.state === State.END) {
            if (!direction) {
                if (currentSlide != totalSlides - 1) {
                    if (Math.abs(parseInt(translation)) < height / 10) {
                        scrollViewRef.current.scrollTo({
                            y: startPoint,
                            animated: true
                        })

                    } else if (Math.abs(parseInt(translation)) > height / 10) {
                        scrollViewRef.current.scrollTo({
                            y: startPoint + height,
                            animated: true
                        })
                        video.current[currentSlide].video.stopAsync()
                        video.current[currentSlide].playing = false
                        setCurrentSlide(state=>state+1)
                        if (visibility.value!=1){
                            video.current[currentSlide+1].video.playAsync()
                            video.current[currentSlide+1].playing = false
                        }


                    }
                }

            } else if (direction) {
                if (currentSlide != 0) {
                    if (Math.abs(parseInt(translation)) < height / 10) {
                        scrollViewRef.current.scrollTo({
                            y: startPoint,
                            animated: true
                        })

                    } else if (Math.abs(parseInt(translation)) > height / 10) {
                        scrollViewRef.current.scrollTo({
                            y: startPoint - height,
                            animated: true
                        })
                        video.current[currentSlide].video.stopAsync()
                        video.current[currentSlide].playing = false
                        setCurrentSlide(state=>state-1)
                        if (visibility.value!=1){
                            video.current[currentSlide-1].video.playAsync()
                            video.current[currentSlide-1].playing = true
                        }

                    }
                }

            }
        }
    }, [video, currentSlide]);
    const animatedStyles = useAnimatedStyle(() => {
        return {
            opacity: visibility.value,
        };
    });
    useEffect(()=>{
        if (video.current[0]?.video){
            video.current[0].video.playAsync()
            video.current[0].playing = true
        }
    },[video])

    useEffect(()=>{
        if (video?.current[currentSlide])
             onSlideChange(video?.current[currentSlide])
    },[video,currentSlide])
    return (

        <GestureHandlerRootView style={{flex: 1}}>
            <PanGestureHandler onGestureEvent={panGestureEvent} onHandlerStateChange={panGestureEventChange}>
                <ScrollView ref={ref => scrollViewRef.current = ref} contentContainerStyle={{flexGrow: 1}}
                            style={[styles.scrollContainer]}>
                    {data && data.map((el, ind)=>{
                        return <View key={ind} style={{
                            width: "100%",
                            height: height,
                            position: "relative"
                        }}>
                            <TouchableOpacity onPress={()=>{
                                if (!video.current[ind].playing){
                                    video.current[ind].video.playAsync()
                                    video.current[ind].playing = true
                                    visibility.value = 0
                                }else{
                                    video.current[ind].video.pauseAsync()
                                    video.current[ind].playing = false
                                    visibility.value = 1
                                }
                            }}>
                                <Video
                                    ref={ref => video.current[ind] = {
                                        video:ref,
                                        playing:false,
                                        translation:el.en_translation
                                    }}
                                    style={{
                                        width:"100%",
                                        height:"100%"
                                    }}
                                    source={{
                                        uri: "http://10.17.64.60:8000/static/"+el.link,
                                    }}
                                    useNativeControls={false}
                                    resizeMode="cover"
                                    isLooping
                                />
                                <Animated.View style={[styles.playBtn,animatedStyles]}>
                                    <PlayBtn/>
                                </Animated.View>

                            </TouchableOpacity>


                        </View>
                    })}

                </ScrollView>
            </PanGestureHandler>
        </GestureHandlerRootView>
    );
};



const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        height: "auto"
    },

    scrollContainerContent: {
        flexGrow: 1
    },
    playBtn: {
        position:"absolute",
        alignSelf:"center",
        top:"45%",
    }
})

export default VerticalSlider;