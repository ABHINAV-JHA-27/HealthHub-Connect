import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import MapView from "react-native-maps";
import AmbulanceCard from "../../components/AmbulanceCard";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useNavigation } from "expo-router";
const { width, height } = Dimensions.get("window");

const Ambulance = () => {
    const sheetRef = useRef<BottomSheet>(null);
    const handleSheetChange = useCallback((index) => {
        console.log("handleSheetChange", index);
    }, []);
    const handleSnapPress = useCallback((index) => {
        sheetRef.current?.snapToIndex(index);
    }, []);
    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
    }, []);
    const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);
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
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <BottomSheet
                ref={sheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChange}
            >
                <BottomSheetScrollView
                    contentContainerStyle={styles.contentContainer}
                >
                    {[...new Array(10)].map((_, i) => (
                        <AmbulanceCard key={i.toString() + "ambulance"} />
                    ))}
                </BottomSheetScrollView>
            </BottomSheet>
        </View>
    );
};

export default Ambulance;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    contentContainer: {
        backgroundColor: "white",
        paddingHorizontal: 15,
    },
});
