import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Colors } from "../../constants/styles";

function PetsContainer({ petName, location, amount }) {
	return (
		<View style={styles.parentContainer}>
			<View style={styles.imageContainer}>
				<Image
					source={require("../../assets/sittingroom.jpeg")}
					style={styles.imageContainer}
				/>
			</View>

			<View style={styles.columnContainer}>
				<Text style={styles.petName}>{petName}</Text>
				<View style={styles.rowContainer}>
					<FontAwesome
						name="map-marker"
						size={15}
						color="gray"
						style={styles.icon}
					/>
					<Text style={styles.locationText}>{location}</Text>
				</View>
				<Text style={styles.amountText}>{amount}</Text>
			</View>

			<View style={styles.spaceContainer}></View>

			<View style={styles.redBar}></View>
		</View>
	);
}

export default PetsContainer;

const styles = StyleSheet.create({
	parentContainer: {
		height: 120,
		backgroundColor: "white",
		borderRadius: 5,
		marginVertical: 20,
		shadowColor: "black",
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		flexDirection: "row",
	},
	imageContainer: {
		height: 120,
		width: 100,
	},

	columnContainer: {
		justifyContent: "center",
		marginHorizontal: 10,
	},
	petName: {
		color: "black",
		fontSize: 16,
		marginBottom: 5,
	},

	rowContainer: {
		flexDirection: "row",
		justifyContent: "start",
		alignItems: "center",
		marginBottom: 5,
	},

	locationText: {
		color: "gray",
	},
	amountText: {
		color: Colors.primary100,
		fontSize: 20,
		fontWeight: "bold",
	},
	icon: {
		marginRight: 5,
	},
	redBar: {
		height: 120,
		backgroundColor: Colors.primary100,
		width: 10,
		borderTopEndRadius: 5,
		borderBottomEndRadius: 5,
	},
	spaceContainer: {
		flex: 1,
	},
});
