import React from "react";
import { SafeAreaView, View, StyleSheet, Text, Pressable } from "react-native";
import SignupForm from "../../components/Auth/SignupForm";
import AuthHeader from "../../components/UI/AuthHeader";
import Button from "../../components/UI/Button";
import SizedBox from "../../components/UI/SizedBox";
import { Colors } from "../../constants/styles";

function SignupScreen({ navigation }) {
	function submitHandler() {
		navigation.navigate("AuthenticatedStack");
	}

	function loginHandler() {
		navigation.navigate("Login");
	}
	return (
		<SafeAreaView style={styles.rootContainer}>
			<SizedBox />
			<SizedBox />
			<SizedBox />
			<View style={styles.headerText}>
				<AuthHeader text="Sign Up" />
			</View>

			<SignupForm />

			<SizedBox />

			<View style={styles.buttons}>
				<Button onPress={submitHandler}>{"Sign up"}</Button>
			</View>

			<Pressable onPress={loginHandler}>
				<Text style={styles.noAccount}>
					Already Have An Account? <Text style={styles.signUp}>Login</Text>
				</Text>
			</Pressable>
		</SafeAreaView>
	);
}

export default SignupScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginHorizontal: 20,
		justifyContent: "start",
	},
	headerText: {
		marginVertical: 20,
	},
	forgotPassword: {
		color: "gray",
		marginVertical: 5,
		fontSize: 13,
	},
	buttons: {
		marginTop: 12,
	},
	noAccount: {
		color: "gray",
		fontSize: 13,
		marginVertical: 10,
		textAlign: "center",
	},
	signUp: {
		color: Colors.primary100,
		fontSize: 13,
	},
});
