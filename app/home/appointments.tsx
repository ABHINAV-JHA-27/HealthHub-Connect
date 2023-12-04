import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import LottieView from "lottie-react-native";
import React from "react";
import { useNavigation } from "expo-router";
const { width, height } = Dimensions.get("window");

const Appointments = () => {
    const navigation = useNavigation();
    return (
        <>
            <TouchableOpacity
                style={{
                    position: "absolute",
                    top: 50,
                    left: 15,
                    zIndex: 100,
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 20,
                }}
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Image
                    source={require("../../assets/images/back.png")}
                    style={{ width: 25, height: 25 }}
                />
            </TouchableOpacity>
            <ScrollView style={styles.container}>
                <LottieView
                    autoPlay
                    style={styles.anim}
                    source={require("../../assets/lottie/history.json")}
                />
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        marginTop: 10,
                    }}
                >
                    Upcoming Appointments
                </Text>

                <Text
                    style={{
                        fontSize: 16,
                        alignSelf: "center",
                        marginTop: 20,
                    }}
                >
                    No Upcoming Appointment Available
                </Text>

                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        marginTop: 25,
                    }}
                >
                    Past Appointments
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        alignSelf: "center",
                        marginTop: 20,
                    }}
                >
                    No Appointment History Availabe
                </Text>
            </ScrollView>
        </>
    );
};

export default Appointments;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15,
    },
    anim: {
        width: width * 0.9,
        resizeMode: "contain",
    },
});
