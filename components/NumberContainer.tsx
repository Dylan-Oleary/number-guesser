import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "../constants";

const NumberContainer: FC<Record<string, unknown>> = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.accent,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        borderRadius: 10
    },
    number: {
        fontSize: 22,
        color: colors.accent
    }
});

export default NumberContainer;
export { NumberContainer };
