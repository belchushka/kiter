import React from 'react';
import {TouchableOpacity,StyleSheet, Text} from "react-native";

const CustomButton = ({text, style, onClick}) => {
    return (
        <TouchableOpacity onPress={onClick} style={[styles.button,style]}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        width:"100%",
        height:65,
        borderRadius:10,
        backgroundColor:"#AA80F9",
        justifyContent:"center",
        alignItems:"center"
    },

    buttonText:{
        fontWeight: "700",
        fontSize: 30,
        color:"white"
    }
})

export default CustomButton;