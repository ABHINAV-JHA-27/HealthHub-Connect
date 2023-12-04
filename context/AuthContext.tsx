import { View, Text } from "react-native";
import React, { createContext, useState } from "react";

export const Context_ = createContext({});

type Props = {
    children: React.ReactNode;
};

const AuthContext = ({ children }: Props) => {
    const [user, setUser] = useState(null);
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [appointments, setAppointments] = useState([]);
    return (
        <Context_.Provider
            value={{
                user,
                setUser,
                name,
                setName,
                age,
                setAge,
                weight,
                setWeight,
                height,
                setHeight,
                appointments,
                setAppointments,
            }}
        >
            {children}
        </Context_.Provider>
    );
};

export default AuthContext;
