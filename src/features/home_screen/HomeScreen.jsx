import React from 'react';
import ContentView from "../../components/content_view/ContentView";
import {StyleSheet,TouchableOpacity, Text} from "react-native";
import ContentContainer from "../../components/content_container/ContentContainer";
import CustomHeader from "../../components/custom_header/CustomHeader";
import Logo from "../../media/icons/Logo";
import IntroIcon from "../../media/icons/IntroIcon";
import CustomButton from "../../components/custom_button/CustomButton";

const HomeScreen = ({navigation}) => {
    const bottomClickHandler = ()=>{
        navigation.navigate("feed")
    }
    return (
        <ContentView style={styles.contentView}>
            <ContentContainer>
                <CustomHeader>
                    <Logo/>
                </CustomHeader>
            </ContentContainer>
            <IntroIcon style={{left:-5}}/>
            <ContentContainer style={styles.bottomContainer}>
                <CustomButton onClick={bottomClickHandler} text={"Начать"}/>
                <TouchableOpacity style={styles.bottomLink} onPress={bottomClickHandler}>
                    <Text>Пропустить регистрацию</Text>
                </TouchableOpacity>
            </ContentContainer>
        </ContentView>
    );
};

const styles = StyleSheet.create({
    contentView:{
        backgroundColor:"white"
    },

    bottomContainer:{
        flex:1,
        justifyContent:"flex-end",
        marginBottom:50
    },

    bottomLink:{
        alignSelf:"center",
        marginTop:25
    }

})

export default HomeScreen;