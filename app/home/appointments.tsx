import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");

const Appointments = () => {
    return (
        <>
            <View
                style={{
                    width: width * 0.2,
                    height: width * 0.2,
                    borderRadius: width * 0.1,
                    backgroundColor: "#fff",
                    margin: 10,
                    position: "absolute",
                    top: 0,
                    zIndex: 100,
                    left: 0,
                    borderWidth: 1,
                }}
            >
                {/* <Image
                    source={require("../../assets/images/back.png")}
                    style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "contain",
                        zIndex: 100,
                    }}
                /> */}
                <Text>Back</Text>
            </View>
            <ScrollView style={styles.container}>
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
                        marginTop: 10,
                    }}
                >
                    No Upcoming Appointment Availabe
                </Text>

                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        marginTop: 10,
                    }}
                >
                    Past Appointments
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        alignSelf: "center",
                        marginTop: 10,
                    }}
                >
                    No History Availabe
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
});
