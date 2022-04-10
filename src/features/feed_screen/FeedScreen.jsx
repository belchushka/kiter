import React, {useCallback, useEffect, useState} from 'react';
import ContentView from "../../components/content_view/ContentView";
import ContentContainer from "../../components/content_container/ContentContainer";
import VerticalSlider from "../../components/vertical_slider/VerticalSlider";
import {TouchableOpacity, Text, StyleSheet, View, ImageBackground,ActivityIndicator} from "react-native";
import ShadowBg from "../../media/imgs/ShadowBg.png"
import BurgerMenu from "../../media/icons/BurgerMenu";
import Subtitles from "../../media/icons/Subtitles";
import VoicButton from "../../components/voice_button/VoicButton";
import SubmitVoiceResult from "../../components/submit_voice_result/SubmitVoiceResult";
import RemoveBtn from "../../media/icons/RemoveBtn";
import SubmitBtn from "../../media/icons/SubmitBtn";
import {useDispatch, useSelector} from "react-redux";
import {checkValidity, getVideos} from "../../store/actions/videoActions";
import ResultModal from "../../components/result_modal/ResultModal";

const FeedScreen = () => {
    const [resultSubmitVisible, setResultSubmitVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultModalVisible, setResultModalVisible] = useState(false)
    const [speechEnded, setSpeechEnded] = useState(false)
    const [simularity, setSimularity] = useState(0)
    const videos = useSelector(state=>state.video.videos)
    const [currentPairString, setCurrentPairString] = useState("")
    const dispatch = useDispatch()
    const [result, setResult] = useState([])
    const onVoiceStart = () => {
        setResultSubmitVisible(true)
        setSpeechEnded(false)
    }

    const onVoiceEnd = () => {
        setSpeechEnded(true)
    }

    const onPartialResults = (data) => {
        setResult(data)
    }

    const onResult = (data) => {
        setResult(data)
    }

    const fetch = useCallback(()=>{
        dispatch(getVideos())

    },[])

    const onVoiceInputSubmit = useCallback(async ()=>{
        setLoading(true)
        const data = await dispatch(checkValidity({
            user_string:result[0],
            pair_string: currentPairString
        }))
        setResultSubmitVisible(false)
        setSimularity(data.simularity)
        setResultModalVisible(true)
        setLoading(false)
    },[dispatch, result, currentPairString])

    useEffect(fetch,[fetch])
    return (
        <ContentView>
            <View style={styles.topNavigation}>
                <ImageBackground resizeMode="stretch" imageStyle={{
                    transform: [
                        {
                            rotate: "180deg"
                        }
                    ]
                }} style={{
                    width: "100%",
                    height: "100%"
                }} source={ShadowBg}>
                    <View style={styles.topNavigationWrapper}>
                        <TouchableOpacity style={styles.topNavigationButton}>
                            <Text style={styles.topNavigationText}>Русский</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.topNavigationButton}>
                            <Text style={styles.topNavigationText}>English</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            <VerticalSlider onSlideChange={video=>setCurrentPairString(video.translation)} data={videos} resultSubmitVisible={resultSubmitVisible}/>
            <View style={styles.bottomActions}>
                <ImageBackground resizeMode="stretch" style={{
                    width: "100%",
                    height: "100%"
                }} source={ShadowBg}>
                    <ContentContainer style={styles.bottomNavigationWrapper}>
                        {!loading && (resultSubmitVisible ? <TouchableOpacity onPress={()=>{
                                setResultSubmitVisible(false)
                            }}><RemoveBtn/></TouchableOpacity> :
                            <TouchableOpacity><BurgerMenu/></TouchableOpacity>)}

                        {
                            !loading ?<VoicButton speechRecording={resultSubmitVisible} onStart={onVoiceStart} onEnd={onVoiceEnd} onResult={onResult}
                                                  onPartialResult={onPartialResults}/> : <ActivityIndicator size="large" color={"#AA80F9"}/>
                        }


                        {!loading && (resultSubmitVisible  ?
                            <TouchableOpacity onPress={onVoiceInputSubmit}>
                                <SubmitBtn/>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity>
                                <Subtitles/>
                            </TouchableOpacity>)}

                    </ContentContainer>
                </ImageBackground>
            </View>
            <SubmitVoiceResult text={[result[0]]} visible={resultSubmitVisible}/>
            <ResultModal visible={resultModalVisible} text={currentPairString} simularity={simularity} closeModal={()=>{setResultModalVisible(false)}}/>
        </ContentView>
    );
};

const styles = StyleSheet.create({
    topNavigation: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        height: 70
    },
    bottomActions: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1006,
        height: 140
    },
    topNavigationWrapper: {
        marginLeft: -10,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    bottomNavigationWrapper: {
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    topNavigationButton: {
        marginLeft: 20,
    },

    topNavigationText: {
        color: "white",
        fontSize: 20,

    }

})

export default FeedScreen;