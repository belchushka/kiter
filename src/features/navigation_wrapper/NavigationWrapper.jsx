import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Home from "../../screens/Home"
import Feed from "../../screens/Feed"

const NavigationWrapper = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initalRouteName={"home"} screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name={"home"} component={Home}/>
                <Stack.Screen name={"feed"} component={Feed}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationWrapper;