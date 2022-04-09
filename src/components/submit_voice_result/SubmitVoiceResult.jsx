import React from 'react';
import {View, StyleSheet, Dimensions, ScrollView, Text} from "react-native";

const height = Dimensions.get("window").height

const SubmitVoiceResult = ({text, visible, id}) => {
    return (
        <>
            {visible && <View style={[styles.modalWrapper]}>
                <View style={styles.textScrollView}>
                    <ScrollView>
                        <Text style={styles.text}>{text}</Text>
                    </ScrollView>
                </View>
            </View>}
        </>


    );
};

const styles = StyleSheet.create({
    modalWrapper: {
        width:"100%",
        position:"absolute",
        top:0,
        left:0,
        height:height,
        backgroundColor:"rgba(0,0,0,0.63)",
        zIndex:1001,
        alignItems:"center",
        justifyContent:"center",
    },

    textScrollView: {
        width:"80%",
        height:"30%"
    },

    text: {
        color:"white",
        fontSize:25
    }
})



export default SubmitVoiceResult;