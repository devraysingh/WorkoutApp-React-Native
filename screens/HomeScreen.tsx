import { View, Text, Button } from "react-native"
import { useEffect } from "react";

export default function HomeScreen({navigation}: any) {

    useEffect(() => {
        console.log("Rending Home Screen");
    
        return () => console.log("Unmounting Home Screen")
      }, [])


    return (
        <View>
            <Text>HomeScreen</Text>
            <Button
                title="Go to Planner"
                onPress={() => navigation.navigate("Planner")}
            />
        </View>
    )
}