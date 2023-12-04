import { Stack } from "expo-router";
import AuthContext from "../context/AuthContext";
export default function Layout() {
    return (
        <AuthContext>
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="authModal"
                    options={{
                        headerShown: false,
                        presentation: "modal",
                    }}
                />
                <Stack.Screen
                    name="home/index"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="home/profile"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="home/report"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="home/ambulance"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="home/appointments"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="home/chat"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
        </AuthContext>
    );
}
