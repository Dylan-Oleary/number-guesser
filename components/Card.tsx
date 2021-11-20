import React, { FC } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface ICardProps {
    style?: ViewStyle;
}

const Card: FC<ICardProps> = ({ children, style = {} }) => (
    <View style={{ ...cardStyles.container, ...style }}>{children}</View>
);

const cardStyles = StyleSheet.create({
    container: {
        /**
         * Shadow Props will only work on iOS
         */
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        /**
         * End iOS shadow props
         */
        /**
         * Elevation only works on Android
         */
        elevation: 8,
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 10
    }
});

export default Card;
export { Card };
