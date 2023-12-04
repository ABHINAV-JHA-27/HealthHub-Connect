import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import LottieView from "lottie-react-native";
const { width, height } = Dimensions.get("window");

const Report = () => {
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
            <View style={styles.container}>
                <LottieView
                    autoPlay
                    style={styles.anim}
                    source={require("../../assets/lottie/report.json")}
                />
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#1A73E8",
                            padding: 10,
                            borderRadius: 20,
                            width: width * 0.6,
                            alignSelf: "center",
                            marginTop: 20,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                color: "white",
                            }}
                        >
                            Upload New Report {"+"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        marginTop: 25,
                    }}
                >
                    Past Reports
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        alignSelf: "center",
                        marginTop: 15,
                    }}
                >
                    No Report History Availabe
                </Text>
            </View>
        </>
    );
};

export default Report;

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
