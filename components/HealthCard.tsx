import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");

const HealthCard = () => {
    return (
        <View style={styles.container}>
            <Text>HealthCard</Text>
        </View>
    );
};

export default HealthCard;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        height: height * 0.2,
        backgroundColor: "#fff",
        borderRadius: 20,
        elevation: 10,
        padding: 10,
    },
});
