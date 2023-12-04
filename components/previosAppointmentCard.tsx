import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context_ } from "../context/AuthContext";
const { width, height } = Dimensions.get("window");

const PreviosAppointmentCard = () => {
    const data = useContext(Context_);
    return (
        <View style={styles.container}>
            {data.appointments.length > 0 ? (
                <Text>appointments</Text>
            ) : (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            marginTop: 10,
                            color: "#000",
                        }}
                    >
                        No Previous Appointment
                    </Text>
                </View>
            )}
        </View>
    );
};

export default PreviosAppointmentCard;

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
