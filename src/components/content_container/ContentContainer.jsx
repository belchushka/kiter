import React from 'react';
import {View, StyleSheet} from "react-native";

const ContentContainer = ({children, style}) => {
    return (
        <View style={[styles.container,style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:25
    }
})

export default ContentContainer;