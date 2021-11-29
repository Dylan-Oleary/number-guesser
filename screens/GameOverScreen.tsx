import React, { FC } from "react";
import { Button, Image, StyleSheet, View, Text } from "react-native";

const GameOverScreen: FC<Record<string, any>> = ({ numOfRounds, startNewGame }) => {
    return (
        <View style={styles.screen}>
            <Text>Game Over</Text>
            <Image source={require("../assets/success.png")} />
            <Text>Number of rounds: {numOfRounds} </Text>
            <Button title="New Game" onPress={startNewGame} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default GameOverScreen;
export { GameOverScreen };
