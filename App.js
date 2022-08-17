import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import LoginScreen from "./screens/auth/LoginScreen";
import SignupScreen from "./screens/auth/SignupScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "./constants/styles";
import Home from "./screens/dashboard/Home";
import Pets from "./screens/dashboard/Pets";
import Profile from "./screens/dashboard/Profile";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function AuthStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				backgroundColor: "white",
			}}
		>
			<Stack.Screen
				name="Login"
				component={LoginScreen}
				options={{
					headerBackVisible: false,
					title: "",
					headerShown: false,
					contentStyle: { backgroundColor: "white" },
				}}
			/>

			<Stack.Screen
				name="SignUp"
				component={SignupScreen}
				options={{
					headerBackVisible: false,
					title: "",
					headerShown: false,
					contentStyle: { backgroundColor: "white" },
				}}
			/>

			<Stack.Screen
				name="AuthenticatedStack"
				component={AuthenticatedStack}
				options={{
					headerBackVisible: false,
					title: "",
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}

function AuthenticatedStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="HomeRoot"
				component={BottomTabNavigator}
				options={{
					headerShown: false,
					headerStyle: {},
				}}
			/>
		</Stack.Navigator>
	);
}

function BottomTabNavigator() {
	return (
		<BottomTab.Navigator
			screenOptions={{
				tabBarStyle: { height: 100 },
				tabBarLabelStyle: { fontSize: 13 },
				headerTintColor: "white",
				tabBarInactiveTintColor: Colors.primary100,
				tabBarActiveTintColor: Colors.primary100,
			}}
		>
			<BottomTab.Screen
				name="Home"
				component={Home}
				options={{
					headerStyle: { backgroundColor: Colors.primary100 },

					title: "Home",
					tabBarLabel: "Home",
					tabBarLabelStyle: { fontSize: 13 },
					tabBarIcon: ({ color, size, focused }) =>
						focused ? (
							<View style={styles.activeStyle}>
								<Ionicons name="home" color="white" size={size} />
							</View>
						) : (
							<Ionicons name="home" color={color} size={size} />
						),
				}}
			/>

			<BottomTab.Screen
				name="Pets"
				component={Pets}
				options={{
					headerStyle: { backgroundColor: Colors.primary100 },
					title: "",
					headerShown: false,
					tabBarLabel: "Pets",
					tabBarLabelStyle: { fontSize: 13 },
					tabBarIcon: ({ color, size, focused }) =>
						focused ? (
							<View style={styles.activeStyle}>
								<Ionicons name="bookmark" color="white" size={size} />
							</View>
						) : (
							<Ionicons name="bookmark" color={color} size={size} />
						),
				}}
			/>

			<BottomTab.Screen
				name="Profile"
				component={Profile}
				options={{
					headerStyle: { backgroundColor: Colors.primary100 },
					title: "Profile",
					tabBarLabel: "Profile",
					tabBarLabelStyle: { fontSize: 13 },
					tabBarIcon: ({ color, size, focused }) =>
						focused ? (
							<View style={styles.activeStyle}>
								<Ionicons name="person" color="white" size={size} />
							</View>
						) : (
							<Ionicons name="person" color={color} size={size} />
						),
				}}
			/>
		</BottomTab.Navigator>
	);
}

export default function App() {
	return (
		<>
			<StatusBar style="dark" />
			<NavigationContainer>
				<AuthStack />
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},

	activeStyle: {
		height: 35,
		width: 60,
		backgroundColor: Colors.primary100,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
	},
});
