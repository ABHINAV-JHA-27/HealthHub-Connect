import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { Context_ } from "../context/AuthContext";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

const UserDetailCard = () => {
    const data = useContext(Context_);
    const [editing, setEditing] = useState(false);

    return (
        <View style={styles.container}>
            {editing ? null : (
                <TouchableOpacity
                    onPress={() => {
                        console.log("edit");
                        setEditing(true);
                    }}
                    style={{
                        width: 20,
                        height: 20,
                        position: "absolute",
                        right: 10,
                        zIndex: 2,
                    }}
                >
                    <Image
                        source={require("../assets/images/edit.png")}
                        style={{
                            width: 20,
                            height: 20,
                            borderRadius: 10,
                            resizeMode: "contain",
                            zIndex: 1,
                        }}
                    />
                </TouchableOpacity>
            )}
            <View
                style={{
                    flexDirection: "row",
                }}
            >
                <View
                    style={{
                        width: "50%",
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 16,
                        }}
                    >
                        Name
                    </Text>
                </View>
                <View
                    style={{
                        width: "50%",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 14,
                        }}
                    >
                        {data?.user?.name || data?.user?.username}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: "row",
                }}
            >
                <View
                    style={{
                        width: "50%",
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 16,
                        }}
                    >
                        Age
                    </Text>
                </View>
                <View
                    style={{
                        width: "50%",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 14,
                        }}
                    >
                        21
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: "row",
                }}
            >
                <View
                    style={{
                        width: "50%",
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 16,
                        }}
                    >
                        Weight
                    </Text>
                </View>
                <View
                    style={{
                        width: "50%",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 14,
                        }}
                    >
                        90
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: "row",
                }}
            >
                <View
                    style={{
                        width: "50%",
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 16,
                        }}
                    >
                        Height
                    </Text>
                </View>
                <View
                    style={{
                        width: "50%",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 14,
                        }}
                    >
                        6.1`
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default UserDetailCard;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        height: height * 0.2,
        backgroundColor: "#fff",
        borderRadius: 20,
        elevation: 10,
        padding: 10,
        justifyContent: "space-between",
    },
});
