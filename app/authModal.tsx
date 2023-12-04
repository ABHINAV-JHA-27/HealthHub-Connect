import { Link, router, useLocalSearchParams } from "expo-router";
import LottieView from "lottie-react-native";
import { useContext, useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { Context_ } from "../context/AuthContext";

const { width, height } = Dimensions.get("window");

export default function Modal() {
    const data = useContext(Context_);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const isPresented = router.canGoBack();
    const type = useLocalSearchParams().type;

    const handleAuth = () => {
        data.setUser({
            username,
        });
    };

    const checkValid = () => {
        if (type === "signup") {
            if (name && username && password) {
                return true;
            }
        } else {
            if (username && password) {
                return true;
            }
        }
        return false;
    };

    return (
        <View style={{ flex: 1, alignItems: "center", padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                {type === "login" ? "Login" : "Sign Up"}
            </Text>
            <LottieView
                autoPlay
                style={styles.anim}
                source={require("../assets/lottie/login.json")}
            />
            {type === "signup" && (
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your Name"
                    value={name}
                    onChangeText={setName}
                />
            )}
            <TextInput
                style={styles.input}
                placeholder="Enter Your Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Your Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Link
                href={"/home/"}
                style={{
                    marginTop: 10,
                    height: 50,
                }}
                replace
                onPress={handleAuth}
                disabled={!checkValid()}
            >
                <View style={styles.button}>
                    <Text
                        style={{
                            color: "#fff",
                        }}
                    >
                        Continue
                    </Text>
                </View>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: width * 0.9,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#f0f0f0",
        padding: 10,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#1F51FF",
        color: "#0f0f0fcf",
        marginVertical: 10,
    },
    anim: {
        width: width,
        resizeMode: "contain",
    },
    button: {
        width: width * 0.9,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#1F51FF",
        padding: 10,
        fontSize: 24,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
});
