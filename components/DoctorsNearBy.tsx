import React, { useState } from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
const { width, height } = Dimensions.get("window");

type Props = {
    onClick: () => void;
};

const DoctorsNearBy = (props: Props) => {
    return (
        <View style={styles.card}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Image
                    source={{
                        uri: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    }}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        marginRight: 10,
                    }}
                />
                <View style={{ flexDirection: "column" }}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "bold",
                        }}
                    >
                        Mohit Jain
                    </Text>
                    <Text>MBBS, MD</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.bookButton}
                onPress={() => props.onClick()}
            >
                <Text
                    style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: "bold",
                    }}
                >
                    Book
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default DoctorsNearBy;

const styles = StyleSheet.create({
    card: {
        width: width - 30,
        height: height * 0.1,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        elevation: 10,
    },
    bookButton: {
        width: 80,
        height: 30,
        backgroundColor: "#1F51FF",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        elevation: 5,
    },
});
