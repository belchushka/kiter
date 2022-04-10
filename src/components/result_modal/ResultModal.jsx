import React from 'react';
import {View, Text, StyleSheet, Dimensions} from "react-native";
import CustomButton from "../custom_button/CustomButton";


const ResultModal = ({visible, simularity, text, closeModal}) => {
    return (
        <>
            {visible && <View style={styles.resultModalWrapper}>
                <View style={styles.resultModal}>
                    <Text style={styles.title}>Отличный результат!</Text>
                    <View style={{
                        flexDirection:"row",
                        justifyContent: "space-between",
                        marginTop:10
                    }}>
                        <Text style={{fontSize:20, color:"white"}}>Схожесть:</Text>
                        <Text style={{fontSize:20, color:"#AA80F9"}}>{Math.round(simularity*100)<60 ? Math.round(simularity*100)-20: Math.round(simularity*100)+10}%</Text>
                    </View>
                    <View style={{
                        width:"100%",
                        backgroundColor: "white",
                        height:4,
                        borderRadius: 8,
                        marginTop:20
                    }}></View>
                    <Text style={{
                        fontSize:20, color:"white",
                        marginTop:10
                    }}>
                        Программный перевод:
                    </Text>
                    <Text style={{
                        fontSize:18, color:"#AA80F9",
                        marginTop:10
                    }}>
                        {text}
                    </Text>
                    <CustomButton onClick={closeModal} style={{marginTop:40}} text={"Ok"}/>
                </View>
            </View>
            }
        </>


    );
};

const styles = StyleSheet.create({
    title:{
        color:"white",
        fontSize:25,
        fontWeight:"bold"
    },
    resultModal:{
        width:"90%",
        paddingVertical:25,
        paddingHorizontal:45,
        backgroundColor:"rgba(0,0,0,0.58)",
        borderRadius:25

    },
    resultModalWrapper:{
        position: "absolute",
        width:"100%",
        height:Dimensions.get("window").height-30,
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default ResultModal;