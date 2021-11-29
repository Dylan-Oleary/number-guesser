import React, { FC, useEffect, useRef, useState } from "react";
import { Alert, Button, StyleSheet, View, Text } from "react-native";

import { Card, NumberContainer } from "../components";

interface IGameScreenProps {
    onGameOver: (numOfRounds: number) => void;
    userChoice: number;
}

const generateRandomBetween: (min: number, max: number, exclude: number) => number = (
    min,
    max,
    exclude
) => {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);

    const randomNumber = Math.floor(Math.random() * (newMax - newMin)) + newMin;

    return randomNumber === exclude ? generateRandomBetween(min, max, exclude) : randomNumber;
};

const GameScreen: FC<IGameScreenProps> = ({ onGameOver = () => {}, userChoice }) => {
    const [currentGuess, setCurrentGuess] = useState<number>(
        generateRandomBetween(1, 100, userChoice)
    );
    const [rounds, setRounds] = useState<number>(0);
    const minRef = useRef<number>(1);
    const maxRef = useRef<number>(100);

    const nextGuessHandler: (higher: boolean) => void = (higher) => {
        if ((higher && currentGuess > userChoice) || (!higher && currentGuess < userChoice)) {
            Alert.alert("Don't lie", "Seriously...", [
                {
                    text: "Okay",
                    style: "destructive"
                }
            ]);
            return;
        }

        if (higher) {
            minRef.current = currentGuess;
        } else {
            maxRef.current = currentGuess;
        }

        setRounds((rounds) => rounds + 1);
        setCurrentGuess(generateRandomBetween(minRef.current, maxRef.current, currentGuess));
    };

    useEffect(() => {
        if (currentGuess === userChoice) {
            Alert.alert("Winner winner chicken dinner!", "You did it!", [
                {
                    text: "Okay",
                    style: "destructive"
                }
            ]);

            onGameOver(rounds);
            return;
        }
    }, [currentGuess]);

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={() => nextGuessHandler(false)} />
                <Button title="HIGHER" onPress={() => nextGuessHandler(true)} />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: "80%"
    }
});

export default GameScreen;
export { GameScreen };
