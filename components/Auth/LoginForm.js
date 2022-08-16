import React from "react";
import { View, StyleSheet } from "react-native";
import SizedBox from "../UI/SizedBox";
import Input from "../../components/Input";
function LoginForm() {
	return (
		<View style={styles.form}>
			<Input
				label="Email Address"
				textInputConfig={{
					keyboardType: "email-address",
					onChangeText: () => {},
					placeholder: "name@name.com",
				}}
			/>
			<SizedBox />
			<Input
				label="Password"
				textInputConfig={{
					keyboardType: "default",
					onChangeText: () => {},
					secureTextEntry: true,
					placeholder: "Password",
				}}
			/>
		</View>
	);
}

export default LoginForm;

const styles = StyleSheet.create({
	form: {},
});
