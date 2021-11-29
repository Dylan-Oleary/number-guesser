import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "../constants";

interface ITitleProps {
    title: string;
}

const Header: FC<ITitleProps> = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop: 36,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        color: "#000",
        fontSize: 18,
        fontFamily: "open-sans-bold"
    }
});

export default Header;
export { Header };
