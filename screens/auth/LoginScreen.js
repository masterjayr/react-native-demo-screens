import React from "react";
import { SafeAreaView, View, StyleSheet, Text, Pressable } from "react-native";
import LoginForm from "../../components/Auth/LoginForm";
import AuthHeader from "../../components/UI/AuthHeader";
import Button from "../../components/UI/Button";
import SizedBox from "../../components/UI/SizedBox";
import { Colors } from "../../constants/styles";

function LoginScreen({ navigation }) {
	function submitHandler() {
		navigation.navigate("AuthenticatedStack");
	}

	function signupHandler() {
		navigation.navigate("SignUp");
	}
	return (
		<SafeAreaView style={styles.rootContainer}>
			<SizedBox />
			<SizedBox />
			<SizedBox />
			<View style={styles.headerText}>
				<AuthHeader text="Login" />
			</View>

			<LoginForm />

			<Text style={styles.forgotPassword}>Forgot Password?</Text>
			<SizedBox />
			<View style={styles.buttons}>
				<Button onPress={submitHandler}>{"Login"}</Button>
			</View>

			<Pressable onPress={signupHandler}>
				<Text style={styles.noAccount}>
					Don't Have An Account? <Text style={styles.signUp}>Sign Up</Text>
				</Text>
			</Pressable>
		</SafeAreaView>
	);
}

export default LoginScreen;

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
