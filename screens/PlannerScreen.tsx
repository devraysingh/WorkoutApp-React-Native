import { View, Text, Button } from "react-native"
import { useEffect } from "react";

export default function PlannerScreen({ navigation }: any) {

    useEffect(() => {
        console.log("Rending Planner Screen");

        return () => console.log("Unmounting Planner Screen")
    }, [])


    return (
        <View>
            <Text>I am planner screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
} 