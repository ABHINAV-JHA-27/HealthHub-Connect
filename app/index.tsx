import { Link } from "expo-router";
import LottieView from "lottie-react-native";
import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Page() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5200);
    }, []);
    return (
        <View style={styles.container}>
            <LottieView
                autoPlay
                style={styles.splash}
                source={require("../assets/lottie/splash.json")}
            />
            <Link href={{ pathname: "/authModal", params: { type: "login" } }}>
                <View
                    style={{
                        backgroundColor: "#1F51FF",
                        width: width * 0.7,
                        alignItems: "center",
                        padding: 10,
                        borderRadius: 10,
                    }}
                >
                    <Text style={{ color: "#fff", fontSize: 18 }}>Login</Text>
                </View>
            </Link>
            <Link
                href={{ pathname: "/authModal", params: { type: "signup" } }}
                style={{
                    marginTop: 10,
                }}
            >
                <View
                    style={{
                        borderColor: "#1F51FF",
                        borderWidth: 1,
                        width: width * 0.7,
                        alignItems: "center",
                        padding: 10,
                        borderRadius: 10,
                    }}
                >
                    <Text style={{ color: "#1F51FF", fontSize: 18 }}>
                        Sign Up
                    </Text>
                </View>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    splash: {
        width: width,
        resizeMode: "contain",
    },
});
