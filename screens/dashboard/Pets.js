import React from "react";
import { SafeAreaView, StyleSheet, View, FlatList } from "react-native";
import AuthHeader from "../../components/UI/AuthHeader";
import PetsContainer from "../../components/UI/PetsContainer";
import SizedBox from "../../components/UI/SizedBox";
import { Colors } from "../../constants/styles";

const petInfoList = [
	{
		id: "1",
		petName: "RotWeiler",
		location: "Agbowo",
		amount: "N 200,000",
	},
	{
		id: "2",
		petName: "Local Fowl",
		location: "Badija",
		amount: "N 6000",
	},
	{
		id: "3",
		petName: "Local Dog",
		location: "Dugbe",
		amount: "N 45,000",
	},
];

function Pets() {
	return (
		<SafeAreaView style={styles.rootContainer}>
			<SizedBox />
			<SizedBox />
			<AuthHeader text="Petsco" />

			<View style={{ margin: 10 }}>
				<FlatList
					data={petInfoList}
					horizontal={false}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<PetsContainer
							petName={item.petName}
							location={item.location}
							amount={item.amount}
						/>
					)}
				/>
			</View>
		</SafeAreaView>
	);
}

export default Pets;

const styles = StyleSheet.create({
	rootContainer: {
		marginHorizontal: 20,
	},
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
