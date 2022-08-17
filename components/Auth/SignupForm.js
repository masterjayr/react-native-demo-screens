import React from "react";
import { View, StyleSheet } from "react-native";
import SizedBox from "../UI/SizedBox";
import Input from "../../components/Input";

function SignupForm() {
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
					placeholder: "Password",
				}}
				obscureText={true}
			/>

			<SizedBox />
			<Input
				label="Phone Number"
				textInputConfig={{
					keyboardType: "number-pad",
					onChangeText: () => {},
					placeholder: "0801121923",
				}}
			/>
		</View>
	);
}

export default SignupForm;

const styles = StyleSheet.create({
	form: {},
});
