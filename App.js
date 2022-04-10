import {StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from "react-native";
import NavigationWrapper from "./src/features/navigation_wrapper/NavigationWrapper";
import {Provider} from "react-redux";
import store from "./src/store";


export default function App() {

    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <NavigationWrapper/>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
