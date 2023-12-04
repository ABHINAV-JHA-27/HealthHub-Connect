import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import AmbulanceCard from "../../components/AmbulanceCard";
const { width, height } = Dimensions.get("window");

const Ambulance = () => {
    return (
        <ScrollView style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <View
                style={{
                    marginTop: 20,
                    paddingHorizontal: 15,
                }}
            >
                <AmbulanceCard />
                <AmbulanceCard />
                <AmbulanceCard />
                <AmbulanceCard />
                <AmbulanceCard />
            </View>
        </ScrollView>
    );
};

export default Ambulance;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: width,
        height: height * 0.6,
    },
});
