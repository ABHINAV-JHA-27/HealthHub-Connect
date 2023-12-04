import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context_ } from "../../context/AuthContext";
import DoctorsNearBy from "../../components/DoctorsNearBy";
import QuickActions from "../../components/QuickActions";
const { width, height } = Dimensions.get("window");

const Page = () => {
    const data = useContext(Context_);
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.welcomeText}>Hello {data?.user?.username}</Text>
            <QuickActions />
            <Text style={styles.label}>Doctors Nearby</Text>
            {[...new Array(25)].map((_, i) => (
                <DoctorsNearBy key={`Doctor-id-${i}`} />
            ))}
        </ScrollView>
    );
};

export default Page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15,
    },
    welcomeText: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 10,
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
});
