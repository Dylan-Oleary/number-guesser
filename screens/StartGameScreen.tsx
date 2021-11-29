import React, { FC, useState } from "react";
import {
    Alert,
    Button,
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from "react-native";

import { Card, Input, NumberContainer } from "../components";
import { colors } from "../constants";

interface IStartGameScreenProps {
    onStart: (userNumber: number) => void;
}

const StartGameScreen: FC<IStartGameScreenProps> = ({ onStart = () => {} }) => {
    const [value, setValue] = useState<string>("");
    const [confirmed, setConfirmed] = useState<boolean>(false);
    const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

    const onChange: (newValue: string) => void = (newValue) => {
        setValue(newValue.replace(/[^0-9]/g, ""));
    };

    const onConfirm: () => void = () => {
        const chosenNumber = parseInt(value);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid Number", "Number has to be a number between 1 and 99", [
                {
                    text: "Okay",
                    style: "destructive",
                    onPress: onReset
                }
            ]);
            return;
        }

        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setValue("");
    };

    const onReset: () => void = () => {
        setConfirmed(false);
        setValue("");
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        blurOnSubmit
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={onChange}
                        style={styles.input}
                        value={value}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button color={colors.accent} title="Reset" onPress={onReset} />
                        </View>
                        <View style={styles.button}>
                            <Button color={colors.primary} title="Confirm" onPress={onConfirm} />
                        </View>
                    </View>
                </Card>
                {confirmed && (
                    <Card style={styles.summaryContainer}>
                        <Text>You selected</Text>
                        <NumberContainer>{selectedNumber}</NumberContainer>
                        <Button
                            title="START GAME"
                            onPress={() => {
                                if (selectedNumber) onStart(selectedNumber);
                            }}
                        />
                    </Card>
                )}
            </View>
        </TouchableWithoutFeedback>
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
        marginVertical: 10,
        fontFamily: "open-sans-bold"
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: "center"
    }
});

export default StartGameScreen;
export { StartGameScreen };
