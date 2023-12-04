import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const QuickActions = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Quick Actions</Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Link href={"/home/profile"}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={require("../assets/images/profile.png")}
                            style={{ width: 40, height: 40 }}
                        />
                    </View>
                </Link>
                <Link href={"/home/report"}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={require("../assets/images/report.png")}
                            style={{ width: 40, height: 40, tintColor: "#fff" }}
                        />
                    </View>
                </Link>
                <Link href={"/home/ambulance"}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={require("../assets/images/ambulance.png")}
                            style={{ width: 40, height: 40, tintColor: "#fff" }}
                        />
                    </View>
                </Link>
                <Link href={"/home/appointments"}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={require("../assets/images/schedule.png")}
                            style={{ width: 40, height: 40, tintColor: "#fff" }}
                        />
                    </View>
                </Link>
            </View>
        </View>
    );
};

export default QuickActions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    iconContainer: {
        backgroundColor: "#1F51FF",
        padding: 10,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
});
