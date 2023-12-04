import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useContext } from "react";
import { Context_ } from "../../context/AuthContext";
import PreviosAppointmentCard from "../../components/previosAppointmentCard";
import HealthCard from "../../components/HealthCard";
import UserDetailCard from "../../components/userDetailCard";
import { useNavigation } from "expo-router";
const { width, height } = Dimensions.get("window");

const Profile = () => {
    const data = useContext(Context_);
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
                <View style={styles.profileImageContainer}>
                    <Image
                        source={require("../../assets/images/profile.png")}
                        style={{
                            width: "95%",
                            height: "95%",
                            resizeMode: "contain",
                        }}
                    />
                </View>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        alignSelf: "center",
                        marginTop: 10,
                    }}
                >
                    {data?.user?.username}
                </Text>
                <UserDetailCard />
                <PreviosAppointmentCard />
                <HealthCard />
            </ScrollView>
        </>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15,
        paddingBottom: 120,
    },
    profileImageContainer: {
        width: width * 0.5,
        height: width * 0.5,
        borderRadius: width * 0.5,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
});
