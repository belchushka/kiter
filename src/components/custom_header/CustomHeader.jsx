import React from 'react';
import {View, StyleSheet} from "react-native";

const CustomHeader = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingVertical:30
    }
})

export default CustomHeader;