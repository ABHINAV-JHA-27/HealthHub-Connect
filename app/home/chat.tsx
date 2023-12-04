import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { Context_ } from "../../context/AuthContext";
import { useNavigation } from "expo-router";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const data = useContext(Context_);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: `Hello ${data?.user?.username}`,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: "Mohit Jain",
                    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
            },
        ]);
    }, []);
    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, messages)
        );
    }, []);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
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
            <GiftedChat
                messages={messages}
                onSend={(messages) => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        </View>
    );
};

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 15,
    },
});
