import React from "react";
import { View, StyleSheet } from "react-native";
function SizedBox() {
	return <View style={styles.space}></View>;
}

export default SizedBox;

const styles = StyleSheet.create({
	space: {
		marginVertical: 12,
	},
});
