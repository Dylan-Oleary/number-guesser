import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import { Header } from "./components";
import { GameScreen, GameOverScreen, StartGameScreen } from "./screens";

const fetchFonts = () => {
    Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
    });
};

export default function App() {
    const [userNumber, setUserNumber] = useState<number | null>(null);
    const [guessRounds, setGuessRounds] = useState<number>(0);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const startGameHandler: (selectedNumber: number) => void = (selectedNumber) => {
        setUserNumber(selectedNumber);
        setGuessRounds(0);
    };

    const gameOverHandler = (numOfRounds: number) => {
        setGuessRounds(numOfRounds);
    };

    const newGameHandler = () => {
        setGuessRounds(0);
        setUserNumber(null);
    };

    return isLoaded ? (
        <View style={styles.screen}>
            <Header title="Guess a Number" />
            {userNumber && guessRounds <= 0 ? (
                <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
            ) : guessRounds > 0 ? (
                <GameOverScreen numOfRounds={guessRounds} startNewGame={newGameHandler} />
            ) : (
                <StartGameScreen onStart={startGameHandler} />
            )}
            <StatusBar style="auto" />
        </View>
    ) : (
        <AppLoading
            //@ts-ignore
            startAsync={fetchFonts}
            onError={(err) => console.info(err)}
            onFinish={() => setIsLoaded(true)}
        />
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});
