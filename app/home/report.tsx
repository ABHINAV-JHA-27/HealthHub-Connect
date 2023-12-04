import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");

const Report = () => {
    return <View style={styles.container}></View>;
};

export default Report;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15,
    },
});
