import React, { FC } from "react";
import { StyleSheet, TextInput, TextInputProps, ViewStyle } from "react-native";

interface IInputProps extends TextInputProps {
    style?: ViewStyle;
}

const Input: FC<IInputProps> = (props) => {
    const { style = {} } = props;

    return <TextInput {...props} style={{ ...InputStyles.input, ...style }} />;
};

const InputStyles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

export default Input;
export { Input };
