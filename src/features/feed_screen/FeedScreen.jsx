import React from 'react';
import ContentView from "../../components/content_view/ContentView";
import ContentContainer from "../../components/content_container/ContentContainer";
import VerticalSlider from "../../components/vertical_slider/VerticalSlider";
import {TouchableOpacity, Text, StyleSheet, View,ImageBackground} from "react-native";
import ShadowBg from "../../media/imgs/ShadowBg.png"
import {Touchable} from "react-native-web";
import BurgerMenu from "../../media/icons/BurgerMenu";
import VoiceButton from "../../media/icons/VoiceButton";
import Subtitles from "../../media/icons/Subtitles";
import VoicButton from "../../components/voice_button/VoicButton";

const FeedScreen = () => {
    return (
        <ContentView>
            <View style={styles.topNavigation}>
                <ImageBackground resizeMode="stretch" imageStyle={{
                    transform:[
                        {
                            rotate:"180deg"
                        }
                    ]
                }} style={{
                    width:"100%",
                    height:"100%"
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
            <VerticalSlider/>
            <View style={styles.bottomActions}>
                <ImageBackground resizeMode="stretch" style={{
                    width:"100%",
                    height:"100%"
                }} source={ShadowBg}>
                <ContentContainer style={styles.bottomNavigationWrapper}>
                    <TouchableOpacity>
                        <BurgerMenu/>
                    </TouchableOpacity>
                    <VoicButton/>
                    <TouchableOpacity>
                        <Subtitles />
                    </TouchableOpacity>
                </ContentContainer>
                </ImageBackground>
            </View>
        </ContentView>
    );
};

const styles = StyleSheet.create({
    topNavigation:{
        position:"absolute",
        top:0,
        left:0,
        width:"100%",
        zIndex:1000,
        height:70
    },
    bottomActions:{
        position:"absolute",
        bottom:0,
        left:0,
        width:"100%",
        zIndex:1000,
        height:140
    },
    topNavigationWrapper:{
        marginLeft:-10,
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
    },
    bottomNavigationWrapper:{
        width:"100%",
        height:"100%",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
    },
    topNavigationButton: {
        marginLeft:20,
    },

    topNavigationText:{
        color:"white",
        fontSize:20,

    }

})

export default FeedScreen;