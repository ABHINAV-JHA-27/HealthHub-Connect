import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, {
    useCallback,
    useContext,
    useMemo,
    useRef,
    useState,
} from "react";
import { Context_ } from "../../context/AuthContext";
import DoctorsNearBy from "../../components/DoctorsNearBy";
import QuickActions from "../../components/QuickActions";
const { width, height } = Dimensions.get("window");
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "expo-router";

const Page = () => {
    const data = useContext(Context_);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ["25%", "35%"], []);
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log("handleSheetChanges", index);
    }, []);
    const navigation = useNavigation();
    const [clicked, setClicked] = useState(false);

    return (
        <BottomSheetModalProvider>
            <View style={styles.container}>
                <Text style={styles.welcomeText}>
                    Hello {data?.user?.username}
                </Text>
                <QuickActions />
                <Text style={styles.label}>Doctors Nearby</Text>
                <ScrollView
                    style={{
                        height: height * 0.58,
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    {[...new Array(25)].map((_, i) => (
                        <DoctorsNearBy
                            key={`Doctor-id-${i}`}
                            onClick={() => {
                                handlePresentModalPress();
                            }}
                        />
                    ))}
                </ScrollView>
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                >
                    <View style={styles.contentContainer}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                width: "100%",
                                marginTop: 10,
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    width: "50%",
                                }}
                            >
                                <Image
                                    source={require("../../assets/images/profile.png")}
                                    style={{
                                        width: width * 0.35,
                                        height: width * 0.35,
                                        resizeMode: "contain",
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    alignItems: "center",
                                    width: "50%",
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: "bold",
                                        marginBottom: 10,
                                    }}
                                >
                                    Mohit Jain
                                </Text>
                                <Text>MBBS, MD</Text>
                                <Text>Noida, India</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "100%",
                                marginTop: 20,
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    width: "45%",
                                    alignItems: "center",
                                    padding: 10,
                                    backgroundColor: "#1F51FF",
                                    borderRadius: 10,
                                }}
                                onPress={() => {
                                    navigation.navigate("home/chat");
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                    }}
                                >
                                    Chat
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: "45%",
                                    alignItems: "center",
                                    padding: 10,
                                    backgroundColor: "#1F51FF",
                                    borderRadius: 10,
                                }}
                                onPress={() => {
                                    data.setAppointments([
                                        ...data.appointments,
                                        { doctor: "Mohit Jain" },
                                    ]);
                                    setClicked(true);
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#fff",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                    }}
                                >
                                    {clicked ? "Booked" : "Book"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </BottomSheetModal>
            </View>
        </BottomSheetModalProvider>
    );
};

export default Page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15,
    },
    welcomeText: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 10,
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 15,
    },
});
