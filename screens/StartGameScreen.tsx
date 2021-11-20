import React, { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { Card, Input } from "../components";
import { colors } from "../constants";

const StartGameScreen: FC<Record<string, unknown>> = ({}) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input blurOnSubmit keyboardType="number-pad" style={styles.input} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button color={colors.accent} title="Reset" onPress={() => {}} />
                    </View>
                    <View style={styles.button}>
                        <Button color={colors.primary} title="Confirm" onPress={() => {}} />
                    </View>
                </View>
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
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input: {
        width: 100,
        textAlign: "center"
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    }
});

export default StartGameScreen;
export { StartGameScreen };