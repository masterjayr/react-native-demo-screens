import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/styles";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

function Input({ label, isInvalid, textInputConfig, obscureText }) {
	const [passwordVisible, setPasswordVisible] = useState(true);

	return (
		<View style={styles.inputContainer}>
			<Text style={[styles.label, isInvalid && styles.labelInvalid]}>
				{label}
			</Text>

			{obscureText ? (
				<TextInput
					{...textInputConfig}
					secureTextEntry={passwordVisible}
					underlineColor="transparent"
					activeUnderlineColor={Colors.primary100}
					placeholder={textInputConfig.placeholder}
					style={[styles.input, isInvalid && styles.inputInvalid]}
					right={
						<TextInput.Icon
							name={passwordVisible ? "eye" : "eye-off"}
							onPress={() => setPasswordVisible(!passwordVisible)}
						/>
					}
				/>
			) : (
				<TextInput
					{...textInputConfig}
					secureTextEntry={false}
					underlineColor="transparent"
					activeUnderlineColor={Colors.primary100}
					placeholder={textInputConfig.placeholder}
					style={[styles.input, isInvalid && styles.inputInvalid]}
				/>
			)}
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
		height: 35,
		borderBottomWidth: 0,
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
