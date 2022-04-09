import {StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from "react-native";
import NavigationWrapper from "./src/features/navigation_wrapper/NavigationWrapper";


export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            <NavigationWrapper/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
