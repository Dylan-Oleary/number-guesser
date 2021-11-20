import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Header } from "./components";
import { StartGameScreen } from "./screens";

export default function App() {
    return (
        <View style={styles.screen}>
            <Header title="Guess a Number" />
            <StartGameScreen />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});
