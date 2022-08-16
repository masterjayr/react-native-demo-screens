import React from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/styles";

function AuthHeader({ text }) {
	return <Text style={styles.text}>{text}</Text>;
}

export default AuthHeader;

const styles = StyleSheet.create({
	text: {
		color: Colors.primary100,
		fontWeight: "bold",
		fontSize: 30,
	},
});
