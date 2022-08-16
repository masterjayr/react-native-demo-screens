import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "../constants/styles";

function Input({ label, isInvalid, textInputConfig, containerStyle }) {
	return (
		<View style={styles.inputContainer}>
			<Text style={[styles.label, isInvalid && styles.labelInvalid]}>
				{label}
			</Text>
			<TextInput
				{...textInputConfig}
				placeholder={textInputConfig.placeholder}
				style={[styles.input, isInvalid && styles.inputInvalid]}
			/>
		</View>
	);
}

export default Input;

const styles = StyleSheet.create({
	inputContainer: {
		marginVertical: 5,
	},
	label: {
		color: "black",
		marginBottom: 4,
	},
	labelInvalid: {
		color: Colors.error500,
	},
	input: {
		height: 45,
		paddingVertical: 8,
		paddingHorizontal: 6,
		backgroundColor: Colors.primaryGray,
		borderRadius: 4,
		fontSize: 16,
	},
	inputInvalid: {
		backgroundColor: Colors.error100,
	},
});
